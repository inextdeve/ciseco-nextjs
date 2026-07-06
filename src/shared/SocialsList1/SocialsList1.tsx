import facebook from '@/images/socials/facebook.svg'
import instagram from '@/images/socials/instagram.svg'
import whatsapp from '@/images/socials/whatsapp.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Link } from '../link'

interface SocialsList1Props {
  className?: string
}

const socials = [
  { name: 'Facebook', icon: facebook, href: 'https://web.facebook.com/profile.php?id=61583959302268' },
  { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com/blissdor.ma/' },
  { name: 'Whatsapp', icon: whatsapp, href: 'https://api.whatsapp.com/send?phone=212720277895' },
  // { name: 'Twitter', icon: twitter, href: '#' },
]

const SocialsList1: FC<SocialsList1Props> = ({ className }) => {
  return (
    <div className={clsx('flex flex-col gap-y-3', className)}>
      {socials.map((item, index) => (
        <Link
          target="_blank"
          href={item.href}
          className="flex cursor-pointer items-center gap-x-2 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          key={index}
        >
          <Image sizes="40px" className="h-auto w-5 shrink-0" width={40} height={40} src={item.icon} alt={item.name} />
          <span className="text-sm/6">{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default SocialsList1
