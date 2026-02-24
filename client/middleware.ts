import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth"

//protected paths that reqiure authentication
const protectedPaths=[
    '/Buy',
    '/About',
    '/SellCarForm',
    '/SignUp'
]

export async function middleware(request:NextRequest){
    const session = await auth.api.getSession({
        headers:request.headers
    })

    const pathname= request.nextUrl.pathname

    //check if the current path is in protectedPaths
    const isProtectedPath= protectedPaths.some(path=>pathname.startsWith(path))

    //if it's a protcted path and no session exists,redirect to sign-in
    if(isProtectedPath && !session && pathname !== '/'){
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
    '/SignUp',
    '/'
    ]
}