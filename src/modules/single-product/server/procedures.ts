import { db } from '@/db'
import { sppOrders } from '@/db/schema'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'
import { eq } from 'drizzle-orm'
import z from 'zod'

export const SPPRouter = createTRPCRouter({
  insert: baseProcedure
    .input(
      z.object({
        fullName: z.string(),
        address: z.string(),
        phone: z.string(),
        productId: z.string(),
        productName: z.string(),
        productOption: z.string(),
        productPrice: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const [newOrder] = await db
        .insert(sppOrders)
        .values({
          ...input,
        })
        .returning()

      return newOrder
    }),

  get: baseProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    const [order] = await db.select().from(sppOrders).where(eq(sppOrders.id, input.id))

    if (!order) {
      throw new TRPCError({ code: 'NOT_FOUND' })
    }

    return order
  }),
})
