import {
  clerkMiddleware,
  ClerkMiddlewareAuth,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/landing",
  "/about",
  "/privacy",
  "/enterprise",
  "/auth/sign-in(.*)",
  "/auth/sign-up(.*)",
]);

const afterAuth = async (auth: ClerkMiddlewareAuth, req: NextRequest) => {
  const url = req.nextUrl;

  if (url.pathname === "/sign-in")
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (url.pathname === "/sign-up")
    return NextResponse.redirect(new URL("/auth/sign-up", req.url));

  if (
    url.pathname === "/" ||
    (url.pathname === "/landing" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  )
    return NextResponse.rewrite(new URL("/landing", req.url));
};

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) await auth.protect();

  return afterAuth(auth, req);
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
