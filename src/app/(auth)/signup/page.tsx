import { SignUpView } from '@/models/auth/ui/views/sign-up-views'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup page for the application',
}

const PageSignUp = () => {
  return <SignUpView />
}

export default PageSignUp
