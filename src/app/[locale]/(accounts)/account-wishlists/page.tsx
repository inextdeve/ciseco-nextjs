import ProductCard from '@/components/ProductCard'
import { getQueryClient, trpc } from '@/trpc/server'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saved Products',
  description: 'Saved Blissdor Products',
}

const Page = async () => {
  const queryClient = getQueryClient();
  const whishlistProducts = await queryClient.fetchQuery(trpc.wishlist.getMany.queryOptions());


  return (
    <div className="flex flex-col gap-y-10 sm:gap-y-12">
      <div>
        <h1 className="text-2xl font-semibold">Wishlists</h1>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400">
          Check out your wishlists. You can add or remove items from your wishlists.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
        {whishlistProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      {/* Add show me more button when store grows */}
      {/* <div className="flex items-center justify-center pt-10">
        <ButtonPrimary>Show me more</ButtonPrimary>
      </div> */}
    </div>
  )
}

export default Page
