import z from 'zod'

export const ordersInsertSchema = z.object({
  productId: z.string().min(1, { message: 'Product ID is required' }),
  instructions: z.string().min(1, { message: 'Instructions are required' }),
})
