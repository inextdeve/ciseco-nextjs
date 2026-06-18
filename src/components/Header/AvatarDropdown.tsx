'use client'

import { authClient } from '@/lib/auth-client'
import Avatar from '@/shared/Avatar/Avatar'
import { Button, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { UserCircle02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useRouter } from 'next/navigation'
import { Divider } from '../Divider'
import { Link } from '../Link'
import { HeartIcon } from '../icons/heart'
import { HelpIcon } from '../icons/help'
import { LogoutIcon } from '../icons/logout'
import { NotepadIcon } from '../icons/notepad'
import { UserIcon } from '../icons/user'

interface Props {
  className?: string
}

const UserList = () => {
  const router = useRouter()
  const { data, isPending } = authClient.useSession()

  if (isPending || !data?.session) {
    return null
  }

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh()
        },
      },
    })
  }

  return (
    <div className="relative grid grid-cols-1 gap-6 bg-white px-6 py-7 dark:bg-neutral-800">
      <div className="flex items-center space-x-3">
        <Avatar userName={data.user.name} imgUrl={data.user.image} sizeClass="size-12" />

        <div className="grow">
          <h4 className="font-semibold">{data.user.name}</h4>
          <p className="mt-0.5 text-xs">{data.user.email}</p>
        </div>
      </div>

      <Divider />

      {/* ------------------ 1 --------------------- */}
      <Link
        href={'/account'}
        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
      >
        <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
          <UserIcon />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium">{'My Account'}</p>
        </div>
      </Link>

      {/* ------------------ 2 --------------------- */}
      <Link
        href={'/orders'}
        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
      >
        <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
          <NotepadIcon />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium">My Orders</p>
        </div>
      </Link>

      {/* ------------------ 2 --------------------- */}
      <Link
        href={'/account-wishlists'}
        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
      >
        <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
          <HeartIcon />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium">Wishlist</p>
        </div>
      </Link>

      <Divider />

      {/* ------------------ 2 --------------------- */}
      <Link
        href={'#'}
        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
      >
        <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
          <HelpIcon />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium">{'Help'}</p>
        </div>
      </Link>

      {/* ------------------ 2 --------------------- */}
      <Button
        onClick={onLogout}
        className="-m-3 flex cursor-pointer items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
      >
        <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
          <LogoutIcon />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium">{'Log out'}</p>
        </div>
      </Button>
    </div>
  )
}

export default function AvatarDropdown({ className }: Props) {
  const { data } = authClient.useSession()

  return (
    <div className={className}>
      <Popover>
        <PopoverButton className="-m-2.5 flex cursor-pointer items-center justify-center rounded-full p-2.5 hover:bg-neutral-100 focus-visible:outline-hidden dark:hover:bg-neutral-800">
          <HugeiconsIcon icon={UserCircle02Icon} size={24} color="currentColor" strokeWidth={1.5} />
        </PopoverButton>

        <PopoverPanel
          transition
          anchor="bottom end"
          className="z-10 mt-3 w-80 rounded-3xl px-4 shadow-lg ring-1 ring-black/5 transition duration-200 ease-in-out data-closed:translate-y-1 data-closed:opacity-0 sm:px-0"
        >
          {data?.session ? (
            <UserList />
          ) : (
            <div className="relative grid grid-cols-1 gap-6 bg-white px-6 py-7 dark:bg-neutral-800">
              <Link
                href="/login"
                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-orange-500/50 dark:hover:bg-neutral-700"
              >
                <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                  <LogoutIcon />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">{'Log in'}</p>
                </div>
              </Link>
            </div>
          )}
        </PopoverPanel>
      </Popover>
    </div>
  )
}
