import { SignInView } from '@/modules/auth/ui/views/sign-in-views'
import { Metadata } from 'next'
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page for blissdor',
}

const PageLogin = async () => {
  const session = await auth.api.getSession({
      headers: await headers(),
    });
  
    if (!!session) {
      redirect("/");
    }
  return <SignInView />
}

export default PageLogin
