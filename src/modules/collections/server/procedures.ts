import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE, MIN_PAGE_SIZE } from '@/constants'
import { getCollectionByHandle, getCollections } from '@/data/data'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'
import { TRPCError } from '@trpc/server'
import z from 'zod'

export const collectionsRouter = createTRPCRouter({
  getOne: baseProcedure.input(z.object({ id: z.string() })).query(async ({ input, ctx }) => {
    const collection = getCollectionByHandle(input.id)

    if (!collection) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Collection not found' })
    }

    return collection
  }),
  getMany: baseProcedure
    .input(
      z.object({
        page: z.number().int().min(1).default(DEFAULT_PAGE),
        pageSize: z.number().int().min(MIN_PAGE_SIZE).max(MAX_PAGE_SIZE).default(DEFAULT_PAGE_SIZE),
      })
    )
    .query(async ({ ctx, input }) => {
      const { page, pageSize } = input

      const collections = await getCollections()

      const start = (page - 1) * pageSize
      const data = collections.slice(start, start + pageSize)

      const total = collections.length
      const totalPages = Math.ceil(total / pageSize)

      return {
        items: data,
        total,
        totalPages,
      }
    }),
})
