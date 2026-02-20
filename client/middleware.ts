//import { NextRequest, NextResponse } from "next/server";

// protected paths
/*const protectedPaths = [
  "/Buy",
  "/About",
  "/SellCarForm",
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // Just check if session cookie exists
  const sessionCookie = request.cookies.get("better-auth.session");

  if (isProtectedPath && !sessionCookie) {
    const signInUrl = new URL("/SignUp", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Buy/:path*", "/About/:path*", "/SellCarForm/:path*"],}; */

// For now, let's just log the request to verify middleware is working