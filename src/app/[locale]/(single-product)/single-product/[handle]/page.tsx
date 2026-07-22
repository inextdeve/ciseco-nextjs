import { getProductDetailByHandle, getProductReviews, getProducts, getSPProductByHandle } from '@/data/data'
import { SingleProductView } from '@/modules/single-product/ui/views/single-product-view'
import { getQueryClient, trpc } from '@/trpc/server'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const queryClient = getQueryClient()

  const products = await queryClient.fetchQuery(trpc.products.getMany.queryOptions({}))

  return products.items.map((p) => ({
    handle: p.handle,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const product = await getProductDetailByHandle(handle)
  const title = product?.title || 'product detail'
  const description = product?.description || 'product detail page'
  return {
    title,
    description,
  }
}


export default async function Page({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = await getSPProductByHandle(handle)

  if (!product.id) {
    return notFound()
  }



  return <SingleProductView product={product} />
}
