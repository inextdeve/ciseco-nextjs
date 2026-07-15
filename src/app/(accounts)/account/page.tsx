import { AccountView } from '@/modules/account/ui/views/account-view'
import { getQueryClient, trpc } from '@/trpc/server'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Account',
  description: 'Account page',
}

const Page = async () => {

  const queryClient = getQueryClient()

  const sessionProvider = await queryClient.fetchQuery(trpc.account.getSessionProvider.queryOptions())

  const isOauth = sessionProvider?.provider !== 'credential'

  const user = await queryClient.fetchQuery(
    trpc.user.get.queryOptions(),
  );

  return <AccountView isOauth={isOauth} user={user} />
}

export default Page
