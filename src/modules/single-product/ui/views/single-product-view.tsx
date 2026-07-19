import GalleryImages from '@/app/[locale]/(shop)/(other-pages)/products/GalleryImages'
import { Divider } from '@/components/Divider'
import LikeButton from '@/components/LikeButton'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'

import Logo from '@/components/Logo'
import { getProductReviews } from '@/data/data'
import AnnouncementBar from '../components/announcement-bar'
import FeatureSection from '../components/feature-section'
import { OrderForm } from '../components/order-form'
import ProductReviews from '../components/ProductReviews'

export const SingleProductView = async ({ product }: { product: any }) => {
  const { title, status, featuredImage, rating, reviewNumber, options, price, selectedOptions, images, breadcrumbs } =
    product

  const reviews = await getProductReviews(product.handle)

  const renderRightSide = () => {
    return (
      <div className="w-full pt-10 lg:w-[45%] lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
        <div className="sticky top-8 flex flex-col gap-y-10">
          {/* ---------- 1 HEADING ----------  */}
          <div>
            {/* <Breadcrumb breadcrumbs={breadcrumbs} currentPage={product.title} /> */}
            <h1 className="mt-4 rounded-md bg-green-100 px-2 py-1 text-center text-2xl font-semibold text-[#387a2f] sm:text-3xl">
              {title}
            </h1>
          </div>

          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-x-3.5" id="order-form">
              {/* <FlashSaleCountdown targetDate={"2026-07-30T23:59:59"}/> */}
              <div className="mt-10 rounded-lg bg-red-600 p-4 text-center text-xl font-extrabold text-white shadow-md">
                <p>Order now and get 50% off!</p>
              </div>
              <OrderForm product={product} />
              <div className="py-10">
                <ProductReviews reviews={reviews} />
              </div>
              <a href="#order-name-input" className="flex justify-center">
                <ButtonPrimary
                  color="none"
                  className="mx-auto my-4 block w-full cursor-pointer bg-[#ef5958] text-white hover:bg-[#31503c]"
                >
                  Order Now
                </ButtonPrimary>
              </a>
            </div>
          </div>

          <FeatureSection />
          <a href="#order-name-input" className="flex justify-center">
            <ButtonPrimary
              color="none"
              className="mx-auto my-4 block w-full cursor-pointer bg-[#ef5958] text-white hover:bg-[#31503c]"
            >
              Order Now
            </ButtonPrimary>
          </a>
          <Divider />
        </div>
      </div>
    )
  }

  const renderLeftSide = () => {
    const galleryImages = [featuredImage, ...(images || [])].map((item) => item?.src).filter(Boolean) as string[]

    return (
      <div className="w-full">
        <div className="relative">
          <GalleryImages images={galleryImages} gridType="grid1" />
          <LikeButton className="absolute top-3 left-3" />
        </div>
      </div>
    )
  }

  return (
    <>
      <AnnouncementBar />
      <div className="fixed bottom-0 z-10 flex w-full items-center gap-2 bg-gradient-to-t from-[#31503c] from-0% to-transparent to-100% p-3">
        <div className="ratio-1/1 shadow-[rgba(43, 93, 36, .12)] w-[100px] min-w-fit rounded-lg border border-[rgba(56,122,47,.14)] bg-white p-2 shadow-xs">
          <span className="block text-center text-lg font-bold text-[#387a2f]">250 DH</span>
          <span className="block text-center text-xs font-normal text-gray-500 line-through">Before 600 DH</span>
        </div>
        <a href="#order-name-input" className="flex w-full justify-center">
          <ButtonPrimary
            color="none"
            className="animate-zoom-in-out mx-auto my-4 block w-full cursor-pointer bg-[#ef5958] text-white hover:bg-[#31503c]"
          >
            Order Now
          </ButtonPrimary>
        </a>
      </div>
      <main className="container mt-5 lg:mt-11">
        <div className="flex justify-center">
          <Logo href="#" />
        </div>
        <a href="#order-name-input" className="flex justify-center">
          <ButtonPrimary
            color="none"
            className="mx-auto my-4 block w-full cursor-pointer bg-[#ef5958] text-white hover:bg-[#31503c]"
          >
            Order Now
          </ButtonPrimary>
        </a>
        <div className="flex flex-wrap">
          {renderLeftSide()}
          {renderRightSide()}
        </div>
        <div className="mt-12 mb-30 flex flex-col gap-y-10 sm:mt-16 sm:gap-y-16">
          <div className="flex justify-center">
            <Logo href="#" />
          </div>
        </div>
      </main>
    </>
  )
}
