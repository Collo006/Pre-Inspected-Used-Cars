// /app/api/auth/signout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    
    // Clear all auth-related cookies
    const authCookies = [
      'authjs.session-token',
      'authjs.csrf-token', 
      'next-auth.session-token',
      'next-auth.callback-url',
      'next-auth.csrf-token',
      'session',
      'token'
    ];
    
    authCookies.forEach(cookieName => {
      cookieStore.delete(cookieName);
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Signed out successfully" 
    });
    
  } catch (error) {
    console.error("Sign out error:", error);
    return NextResponse.json({ 
      error: "Sign out failed" 
    }, { status: 500 });
  }
}