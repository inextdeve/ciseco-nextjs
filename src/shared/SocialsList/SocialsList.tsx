import facebook from '@/images/socials/facebook.svg'
import instagram from '@/images/socials/instagram.svg'
import whatsapp from '@/images/socials/whatsapp.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Link } from '../link'

interface SocialsListProps {
  className?: string
  itemClass?: string
}

const socialsDemo = [
  { name: 'Facebook', icon: facebook, href: 'https://web.facebook.com/profile.php?id=61583959302268' },
  { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com/blissdor.ma/' },
  { name: 'Whatsapp', icon: whatsapp, href: 'https://api.whatsapp.com/send?phone=212720277895' },
  // { name: 'Twitter', icon: twitter, href: '#' },
]

const SocialsList: FC<SocialsListProps> = ({ className = '', itemClass = 'w-6 h-6' }) => {
  return (
    <nav className={`flex items-center gap-x-4 gap-y-2 text-2xl text-neutral-600 dark:text-neutral-300 ${className}`}>
      {socialsDemo.map((item, i) => (
        <Link
          key={i}
          className={clsx(itemClass, 'relative block')}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <Image fill sizes="40px" src={item.icon} alt="" />
        </Link>
      ))}
    </nav>
  )
}

export default SocialsList
