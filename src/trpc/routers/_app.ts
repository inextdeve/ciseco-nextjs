import { cartRouter } from '@/modules/cart/server/procedures'
import { collectionsRouter } from '@/modules/collections/server/procedures'
import { productsRouter } from '@/modules/products/server/procedures'
import { createTRPCRouter } from '../init'
import { accountRouter, userRouter } from '@/modules/account/server/procedures'
import { wishlistRouter } from '@/modules/wishlists/server/procedures'

export const appRouter = createTRPCRouter({
  products: productsRouter,
  collections: collectionsRouter,
  cart: cartRouter,
  account: accountRouter,
  user: userRouter,
  wishlist: wishlistRouter,
})
// export type definition of API
export type AppRouter = typeof appRouter
