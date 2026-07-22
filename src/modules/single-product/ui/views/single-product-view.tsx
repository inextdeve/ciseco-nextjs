import GalleryImages from '@/app/[locale]/(shop)/(other-pages)/products/GalleryImages'
import { Divider } from '@/components/Divider'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'

import Logo from '@/components/Logo'
import { getProductReviews } from '@/data/data'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import AnnouncementBar from '../components/announcement-bar'
import FeatureSection from '../components/feature-section'
import { OrderForm } from '../components/order-form'
import ProductReviews from '../components/ProductReviews'

export const SHIPPING_PRICE = 40

export const SingleProductView = async ({ product }: { product: any }) => {
  const { subtitle, featuredImage, images } = product

  const reviews = await getProductReviews(product.handle)

  const t = await getTranslations('SinglePageProduct')

  const renderRightSide = () => {
    return (
      <div className="w-full pt-10 lg:w-[45%] lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
        <div className="sticky top-8 flex flex-col gap-y-10">
          {/* ---------- 1 HEADING ----------  */}
          <div>
            {/* <Breadcrumb breadcrumbs={breadcrumbs} currentPage={product.title} /> */}
            <h1 className="mt-4 rounded-md bg-[#123928] px-2 py-1 py-4 text-center text-2xl font-semibold text-white sm:text-3xl">
              {subtitle}
            </h1>
          </div>

          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-x-3.5" id="order-form">
              {/* <FlashSaleCountdown targetDate={"2026-07-30T23:59:59"}/> */}
              <div className="rounded-lg bg-[#ef5958] p-4 text-center text-xl font-extrabold text-white shadow-md">
                <p>{t('offer')}</p>
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
                  {t('orderNow')}
                </ButtonPrimary>
              </a>
            </div>
          </div>
          <Image src={featuredImage[1].src} width={featuredImage[1].width} height={featuredImage[1].height} alt="" />
          <Image src={featuredImage[0].src} width={featuredImage[0].width} height={featuredImage[0].height} alt="" />

          <FeatureSection />
          <a href="#order-name-input" className="flex justify-center">
            <ButtonPrimary
              color="none"
              className="mx-auto my-4 block w-full cursor-pointer bg-[#ef5958] text-white hover:bg-[#31503c]"
            >
              {t('orderNow')}
            </ButtonPrimary>
          </a>
          <Divider />
        </div>
      </div>
    )
  }

  const renderLeftSide = () => {
    const galleryImages = [featuredImage[0], ...(images || [])].map((item) => item?.src).filter(Boolean) as string[]

    return (
      <div className="w-full">
        <div className="relative">
          <GalleryImages images={galleryImages} gridType="grid1" />
        </div>
      </div>
    )
  }

  return (
    <>
      <AnnouncementBar announcements={[t('announcement.discount'), t('announcement.delivery')]} />
      <div className="fixed bottom-0 z-10 flex w-full items-center gap-2 bg-gradient-to-t from-[#31503c] from-0% to-transparent to-100% p-3">
        <div className="ratio-1/1 shadow-[rgba(43, 93, 36, .12)] w-[100px] min-w-fit rounded-lg border border-[rgba(56,122,47,.14)] bg-white p-2 shadow-xs">
          <span className="block text-center text-lg font-bold text-[#387a2f]">
            {product.price * 4 + SHIPPING_PRICE} {t('currency')}
          </span>
          <span className="block text-center text-xs font-normal text-gray-500 line-through">
            {t('before')} {(product.price * 4 + SHIPPING_PRICE) * 2 + 20} {t('currency')}
          </span>
        </div>
        <a href="#order-name-input" className="flex w-full justify-center">
          <ButtonPrimary
            color="none"
            className="animate-zoom-in-out mx-auto my-4 block w-full cursor-pointer bg-[#ef5958] text-white hover:bg-[#31503c]"
          >
            {t('orderNow')}
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
            {t('orderNow')}
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
