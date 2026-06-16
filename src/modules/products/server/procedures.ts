import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE, MIN_PAGE_SIZE } from '@/constants'
import { getProductByHandle, getProducts } from '@/data/data'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'
import z from 'zod'

export const productsRouter = createTRPCRouter({
  getOne: baseProcedure.input(z.object({ id: z.string() })).query(async ({ input, ctx }) => {
    const product = getProductByHandle(input.id)

    if (!product) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' })
    }

    return product
  }),
  getMany: baseProcedure
    .input(
      z.object({
        page: z.number().int().min(1).default(DEFAULT_PAGE),
        pageSize: z.number().int().min(MIN_PAGE_SIZE).max(MAX_PAGE_SIZE).default(DEFAULT_PAGE_SIZE),
        search: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      // TODO: Implement pagination and search logic
      const { page, pageSize, search } = input

      const products = await getProducts()

      const data = products.filter((product) =>
        search ? product.title.toLowerCase().includes(search.toLowerCase()) : true
      )

      const total = { count: data.length }
      const totalPages = Math.ceil(total.count / pageSize)

      return { items: data, total: total.count, totalPages }
    }),
})
