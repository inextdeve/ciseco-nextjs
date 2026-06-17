import { Divider } from '@/components/Divider'
import { FilterSortByMenuListBox } from '@/components/FilterSortByMenu'
import { FiltersMenuTabs } from '@/components/FiltersMenu'
import CollectionSlugView from '@/modules/collections/ui/views/collectionSlugView'
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/shared/Pagination/Pagination'
import { getQueryClient, trpc } from '@/trpc/server'

export default async function Page({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const queryClient = getQueryClient()
  const data = await queryClient.fetchQuery(trpc.products.getMany.queryOptions({ collection: handle }))

  return (
    <main>
      {/* TABS FILTER */}
      <div className="flex flex-wrap items-center gap-2.5">
        <FiltersMenuTabs />
        <FilterSortByMenuListBox className="ml-auto" />
      </div>

      <Divider className="mt-8" />

      {/* LOOP ITEMS */}
      <CollectionSlugView data={data.items} />

      {/* PAGINATION */}
      <div className="mt-20 flex justify-center lg:mt-24">
        <Pagination className="mx-auto">
          <PaginationPrevious href="?page=1" />
          <PaginationList>
            <PaginationPage href="?page=1" current>
              1
            </PaginationPage>
            <PaginationPage href="?page=2">2</PaginationPage>
            <PaginationPage href="?page=3">3</PaginationPage>
            <PaginationPage href="?page=4">4</PaginationPage>
          </PaginationList>
          <PaginationNext href="?page=3" />
        </Pagination>
      </div>
    </main>
  )
}
