import { Divider } from '@/components/Divider'
import SectionClientSay from '@/components/SectionClientSay'
import SectionCollectionSlider from '@/components/SectionCollectionSlider'
import SectionHero2 from '@/components/SectionHero/SectionHero2'
import SectionHowItWork from '@/components/SectionHowItWork/SectionHowItWork'
import SectionSliderLargeProduct from '@/components/SectionSliderLargeProduct'
import SectionSliderProductCard from '@/components/SectionSliderProductCard'
import { getBlogPosts, getProducts } from '@/data/data'
import { getQueryClient, trpc } from '@/trpc/server'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Handmade Natural Soaps & Artisan Skincare',
}

async function PageHome() {
  const queryClient = getQueryClient()

  const { items: featuredCollections } = await queryClient.fetchQuery(
    trpc.collections.getMany.queryOptions({ page: 2, pageSize: 4 })
  )
  // const allCollections = await getCollections()
  // const departmentCollections = allCollections.slice(11, 15)
  // const groupCollections = await getGroupCollections()
  const products = await getProducts()
  const carouselProducts1 = products.slice(0, 5)
  const carouselProducts2 = products.slice(3, 10)
  const carouselProducts3 = products.slice(1, 5)
  const blogPosts = await getBlogPosts()

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero2 />
      {/* <CommitmentSection /> */}
      {/* <FeaturesSection /> */}
      {/* <TestimonialsSection /> */}
      <SectionCollectionSlider className="mt-24 lg:mt-32" collections={featuredCollections} />

      <div className="relative container my-24 flex flex-col gap-y-24 lg:my-32 lg:gap-y-32">
        <SectionSliderProductCard data={carouselProducts1} />
        <SectionClientSay />
        <Divider />

        {/* <SectionPromo1 /> */}
        {/* <div className="relative pt-24 pb-20 lg:pt-28">
          <BackgroundSection />
          <SectionGridMoreExplore groupCollections={groupCollections} />
        </div> */}
        <SectionSliderLargeProduct products={carouselProducts3} />
        <SectionSliderProductCard
          data={carouselProducts2}
          heading="Best Sellers"
          subHeading="Best selling of the month"
        />
        {/* <SectionPromo2 /> */}
        {/* <SectionGridFeatureItems data={products} /> */}
        {/* <Divider /> */}
        {/* <SectionCollectionSlider2 collections={departmentCollections} /> */}
        {/* <Divider /> */}
        {/* <div>
          <Heading headingDim="From the Ciseco blog">The latest news</Heading>
          <SectionMagazine5 posts={blogPosts} />
          <div className="mt-20 flex justify-center">
            <Button href="/blog" outline>
              Show all blog articles
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div> */}

        {/* <Divider /> */}
        <div className="pb-16">
          <SectionHowItWork />
        </div>
      </div>
    </div>
  )
}

export default PageHome
