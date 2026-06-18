'use client'

import Heading from '@/components/Heading/Heading'
import { useCarouselArrowButtons } from '@/hooks/use-carousel-arrow-buttons'
import { useCarouselDotButton } from '@/hooks/use-carousel-dot-buttons'
import charcoalSoap from '@/images/products/charcoal_soap_1.webp'
import lavenderSoap from '@/images/products/lavender-soap.png'
import nilaSoapFlower from '@/images/products/nila_soap_flower.jpg'
import roseSoap from '@/images/products/rose_soap.png'
import sidrSoap from '@/images/products/sidr_soap_1.webp'

import qlImage from '@/images/users/ql.png'
import qrImage from '@/images/users/qr.png'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import type { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FC } from 'react'

export const DEMO_DATA = [
  {
    id: 1,
    clientName: 'Wijdan',
    content: "C'est le meilleure savon que j'ai utilise avec son effet hydraton et sa saveur naturel magnifique ",
  },
  {
    id: 2,
    clientName: 'Hasnae',
    content: 'صابونة ولات عندي ادمان الا مشميتش ريحتها منعسش',
  },
  {
    id: 3,
    clientName: 'Touriya',
    content: 'wslatni commande dakxi zwin bzaf kif kont mtwa93a riha zwina bzaf.',
  },
]

export interface SectionClientSayProps {
  className?: string
  emblaOptions?: EmblaOptionsType
  heading?: string
  subHeading?: string
}

const SectionClientSay: FC<SectionClientSayProps> = ({
  className,
  emblaOptions = {
    slidesToScroll: 1,
    loop: true,
  },
  heading = 'What Our Customers Are Saying',
  subHeading = "Let's see what people think of Blissdor",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [Autoplay({ playOnInit: true, delay: 4000 })])
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCarouselArrowButtons(emblaApi)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useCarouselDotButton(emblaApi)

  return (
    <div className={clsx('relative flow-root', className)}>
      <Heading
        description={subHeading}
        isCenter
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
        onClickPrev={onPrevButtonClick}
        onClickNext={onNextButtonClick}
      >
        {heading}
      </Heading>
      <div className="relative mx-auto max-w-2xl md:mb-16">
        {/* BACKGROUND USER IMAGES */}
        <div className="hidden md:block">
          <Image
            sizes="100px"
            width={60}
            height={60}
            className="absolute top-9 -left-20 aspect-square rounded-full object-cover"
            src={lavenderSoap}
            alt=""
          />
          <Image
            sizes="100px"
            width={60}
            height={60}
            className="absolute right-full bottom-[100px] mr-40 aspect-square rounded-full object-cover"
            src={charcoalSoap}
            alt=""
          />
          <Image
            sizes="100px"
            width={60}
            height={60}
            className="absolute top-full left-[140px] aspect-square rounded-full object-cover"
            src={sidrSoap}
            alt=""
          />
          <Image
            sizes="100px"
            width={60}
            height={60}
            className="absolute right-[140px] -bottom-10 aspect-square rounded-full object-cover"
            src={roseSoap}
            alt=""
          />
          <Image
            sizes="100px"
            width={60}
            height={60}
            className="absolute bottom-[80px] left-full ml-32 aspect-square rounded-full object-cover"
            src={nilaSoapFlower}
            alt=""
          />
          <Image
            sizes="100px"
            width={60}
            height={60}
            className="absolute top-10 -right-10 aspect-square rounded-full object-cover"
            src={sidrSoap}
            alt=""
          />
        </div>

        {/* MAIN USER IMAGE */}
        <Image
          className="mx-auto aspect-square rounded-full object-cover"
          src={roseSoap}
          width={125}
          height={120}
          alt=""
        />

        {/* SLIDER */}
        <div className="relative mt-12 lg:mt-16">
          <Image
            className="absolute top-1 right-full -mr-16 opacity-50 md:opacity-100 lg:mr-3"
            src={qlImage}
            width={50}
            height={44}
            alt=""
          />
          <Image
            className="absolute top-1 left-full -ml-16 opacity-50 md:opacity-100 lg:ml-3"
            src={qrImage}
            width={50}
            height={44}
            alt=""
          />
          <div className={'embla'} ref={emblaRef}>
            <ul className="embla__container">
              {DEMO_DATA.map((item) => (
                <li key={item.id} className="flex embla__slide basis-full flex-col items-center text-center">
                  <span className="block text-2xl">{item.content}</span>
                  <span className="mt-8 block text-2xl font-semibold">{item.clientName}</span>
                  <div className="mt-3.5 flex items-center space-x-0.5 text-yellow-500">
                    <StarIcon className="h-6 w-6" />
                    <StarIcon className="h-6 w-6" />
                    <StarIcon className="h-6 w-6" />
                    <StarIcon className="h-6 w-6" />
                    <StarIcon className="h-6 w-6" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="embla__dots flex items-center justify-center pt-10">
              {scrollSnaps.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={clsx(
                    index === selectedIndex ? 'bg-neutral-700' : 'bg-neutral-300',
                    'mx-1 size-2 rounded-full focus:outline-none'
                  )}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionClientSay
