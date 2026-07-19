"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


interface AnnouncementBarProps {
  announcements?: string[];
}
const defaultAnnouncements = [
  "🎉 Discount 20%",
  "🚚 Free Delivery",
];

export default function AnnouncementBar({ announcements = defaultAnnouncements }: AnnouncementBarProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div className="bg-[#ef5958] text-white ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {announcements.map((text, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center py-3"
            >
              <span className=" font-bold tracking-wide">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}