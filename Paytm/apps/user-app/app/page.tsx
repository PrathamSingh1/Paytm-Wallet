import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";





// Adding workflow for CI pipeline



export default async function Page() {
  const session = await getServerSession(authOptions);
  if ( session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}