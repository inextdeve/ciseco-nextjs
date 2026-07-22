'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

interface AnnouncementBarProps {
  announcements?: string[]
}
const defaultAnnouncements = ['🎉 Discount 20%', '🚚 Free Delivery']

export default function AnnouncementBar({ announcements = defaultAnnouncements }: AnnouncementBarProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  )

  return (
    <div className="bg-[#ef5958] text-white" dir="ltr">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {announcements.map((text, index) => (
            <div key={index} className="flex min-w-full items-center justify-center py-3">
              <span className="font-bold tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
