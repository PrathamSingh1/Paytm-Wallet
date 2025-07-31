import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";





// Adding workflow with CI to build the code here



export default async function Page() {
  const session = await getServerSession(authOptions);
  if ( session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}