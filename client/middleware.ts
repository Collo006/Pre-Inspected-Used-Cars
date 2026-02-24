import { NextRequest, NextResponse } from "next/server";

const protectedPaths = [
  "/Buy",
  "/About", 
  "/SellCarForm",
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // ADD THIS DEBUG LOG
  console.log("🔍 MIDDLEWARE RUNNING ON:", pathname);
  console.log("🍪 SESSION COOKIE:", request.cookies.get("better-auth.session_token") ? "EXISTS" : "MISSING");
  
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );
  
  console.log("🛡️ IS PROTECTED PATH:", isProtectedPath);

  const sessionCookie = request.cookies.get("better-auth.session_token");

  if (isProtectedPath && !sessionCookie && pathname !=='/') {
    console.log("🚫 REDIRECTING TO SIGNUP FROM:", pathname);
    const signInUrl = new URL("/SignUp", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  console.log("✅ ALLOWING ACCESS TO:", pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/Buy", "/About", "/SellCarForm"],
};