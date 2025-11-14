import { headers } from "next/headers";
import { auth } from "../../../lib/auth";
import { redirect } from "next/navigation";
import Home from "../page";

export default async function HomePage() {
  
const session = await auth.api.getSession({ headers: await headers()});

if(!session){
  redirect('/SignUp')
}

  return <Home/>;
}