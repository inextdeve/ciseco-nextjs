import { auth } from '@/lib/auth';
import { SignUpView } from '@/modules/auth/ui/views/sign-up-views'
import { Metadata } from 'next'
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup page for blissdor',
}

const PageSignUp = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }
  return <SignUpView />
}

export default PageSignUp
