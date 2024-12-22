import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { error } from "console";
export const runtime = "nodejs";

const app = new Hono().basePath("/api");

app.get("/hello", clerkMiddleware(), (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      error: "unauthorized",
    });
  }
  return c.json({
    message: "Hello from Hono!",
    userId: auth.userId,
  });
});

export const GET = handle(app);
export const POST = handle(app);
