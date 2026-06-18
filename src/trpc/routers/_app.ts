import { collectionsRouter } from '@/modules/collections/server/procedures'
import { productsRouter } from '@/modules/products/server/procedures'
import { createTRPCRouter } from '../init'

export const appRouter = createTRPCRouter({
  products: productsRouter,
  collections: collectionsRouter,
})
// export type definition of API
export type AppRouter = typeof appRouter
