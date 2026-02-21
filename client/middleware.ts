import { NextRequest, NextResponse } from "next/server";

//protected paths that reqiure authentication
const protectedPaths=[
    '/Buy',
    '/About',
    '/SellCarForm',
    '/SignUp'
]

export async function middleware(request:NextRequest){
  
    const pathname= request.nextUrl.pathname

    //check if the current path is in protectedPaths
    const isProtectedPath= protectedPaths.some(path=>pathname.startsWith(path))

 // check if session cookie exists
  const sessionCookie = request.cookies.get("better-auth.session_token");

    //if it's a protcted path and no session exists,redirect to sign-in
    if(isProtectedPath && !sessionCookie){
        const signInUrl=new URL('/SignUp',request.url)
        signInUrl.searchParams.set('callbackUrl',pathname)
        return NextResponse.redirect(signInUrl)
    }
    return NextResponse.next()
}
//configure which routes to run middleware on
export const config ={
    matcher:[
      '/Buy',
    '/About',
    '/SellCarForm',
    '/SignUp'
    ]
}