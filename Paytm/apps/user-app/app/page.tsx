import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";





// Adding workflow to the project with CI now



export default async function Page() {
  const session = await getServerSession(authOptions);
  if ( session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}