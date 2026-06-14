import { SignInView } from '@/models/auth/ui/views/sign-in-views'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page for the application',
}

const PageLogin = () => {
  return <SignInView />
}

export default PageLogin
