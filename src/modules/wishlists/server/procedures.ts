import { z } from "zod";
import { eq, and, desc, count } from "drizzle-orm";
import { wishlistItems } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { db } from "@/db";
import { getProducts } from "@/data/data";

export const wishlistRouter = createTRPCRouter({
    getMany: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.auth.user.id;

    const productIds = await db.select({productId: wishlistItems.productId}).from(wishlistItems).where(eq(wishlistItems.userId, userId)).orderBy(desc(wishlistItems.createdAt));

    if (!productIds) {
      return [];
    }

    const products = await getProducts()

    const wishlistProducts = products.filter((product) => productIds.some((item) => item.productId === product.id));

    return wishlistProducts ;
  }),
  toggle: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.user.id;

      const [existingItem] = await db.select({id: wishlistItems.id}).from(wishlistItems).where(
          and(
            eq(wishlistItems.userId, userId),
            eq(wishlistItems.productId, input.productId)
          ))

      // Remove from wishlist
      if (existingItem) {
        await db
          .delete(wishlistItems)
          .where(
            and(
              eq(wishlistItems.id, existingItem.id),
              eq(wishlistItems.userId, userId)
            )
          );

        return {
          added: false,
          message: "Removed from wishlist",
        };
      }

      // Add to wishlist
      await db.insert(wishlistItems).values({
        userId,
        productId: input.productId,
      });

      return {
        added: true,
        message: "Added to wishlist",
      };
    }),

    isInWishlist: protectedProcedure
  .input(
    z.object({
      productId: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    const userId = ctx.auth.user.id;

    const [item] = await db
      .select({ count: count() })
      .from(wishlistItems)
      .where(
        and(
          eq(wishlistItems.userId, userId),
          eq(wishlistItems.productId, input.productId)
        )
      )
      .limit(1);

    return Boolean(item.count);
  }),
});