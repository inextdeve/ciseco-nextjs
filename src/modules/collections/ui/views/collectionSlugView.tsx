'use client'
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const CollectionSlugView = ({ slug }: { slug: string }) => {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.products.getMany.queryOptions({ collection: slug }))

  useEffect(() => {
    console.log('Products in collection:', data)
  }, [data])

  return <div></div>
}

export default CollectionSlugView
