import type { AppRouter } from '@/trpc/routers/_app'
import { inferRouterOutputs } from '@trpc/server'

export type CartGet = inferRouterOutputs<AppRouter>['cart']['get']
export type CartProductLine = CartGet['lines'][number]
