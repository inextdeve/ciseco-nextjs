import VerifyIcon from '@/components/VerifyIcon'
import avatarImage from '@/images/users/avatar4.jpg'
import { FC } from 'react'

interface AvatarProps {
  containerClassName?: string
  sizeClass?: string
  radius?: string
  imgUrl?: string | null | undefined 
  userName?: string
  hasChecked?: boolean
  hasCheckedClass?: string
}

const Avatar: FC<AvatarProps> = ({
  containerClassName = 'ring-1 ring-white dark:ring-neutral-900',
  sizeClass = 'size-6 text-sm',
  radius = 'rounded-full',
  imgUrl = avatarImage.src,
  userName,
  hasChecked,
  hasCheckedClass = 'size-4 bottom-1 -right-0.5',
}) => {
  const url = imgUrl || ''
  const name = userName || 'John Doe'
  const _setBgColor = (name: string) => {
    const colors = ['rgb(239, 90, 88)', 'rgb(46, 80, 57)', '#3357FF', '#FF33A1', '#FF8C33']
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center font-semibold text-neutral-100 uppercase shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && <img className={`absolute inset-0 object-cover ${radius} h-full w-full`} src={url} alt={name} />}
      <span className="select-none">{name.split(" ")[0].charAt(0)}{name.split(" ")[1].charAt(0)}</span>

      {hasChecked && (
        <span className={`absolute text-white ${hasCheckedClass}`}>
          <VerifyIcon className="" />
        </span>
      )}
    </div>
  )
}

export default Avatar
