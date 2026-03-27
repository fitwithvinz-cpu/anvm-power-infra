import { describe, expect, it } from "vitest";
import { createTransporter } from "./email";

describe("email service", () => {
  it("creates a transporter when Gmail credentials are set", () => {
    process.env.GMAIL_USER = "anvmpowerinfrapvtltd@gmail.com";
    process.env.GMAIL_APP_PASSWORD = "ojoa cywl fbfr jfcf";

    const transporter = createTransporter();
    expect(transporter).toBeDefined();
  });

  it("throws when Gmail credentials are missing", () => {
    const originalUser = process.env.GMAIL_USER;
    const originalPass = process.env.GMAIL_APP_PASSWORD;

    process.env.GMAIL_USER = "";
    process.env.GMAIL_APP_PASSWORD = "";

    expect(() => createTransporter()).toThrow("Gmail credentials not configured");

    process.env.GMAIL_USER = originalUser ?? "anvmpowerinfrapvtltd@gmail.com";
    process.env.GMAIL_APP_PASSWORD = originalPass ?? "ojoa cywl fbfr jfcf";
  });
});
