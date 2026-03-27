import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { contactSubmissions } from "../drizzle/schema";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          company: z.string().optional(),
          subject: z.string().min(1),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (db) {
          await db.insert(contactSubmissions).values({
            name: input.name,
            email: input.email,
            phone: input.phone ?? null,
            company: input.company ?? null,
            subject: input.subject,
            message: input.message,
          });
        }

        // Send notification to owner
        await notifyOwner({
          title: `New Contact Form Submission from ${input.name}`,
          content: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone || 'N/A'}\nCompany: ${input.company || 'N/A'}\nSubject: ${input.subject}\n\nMessage:\n${input.message}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
