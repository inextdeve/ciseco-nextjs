'use client'
import { getSPProductByHandle } from '@/data/data'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { Field, Fieldset, Label } from '@/shared/fieldset'
import { Input, InputGroup } from '@/shared/input'
import { useTRPC } from '@/trpc/client'
import { MapsLocation01Icon, SmartPhone01Icon, User02FreeIcons } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useMutation } from '@tanstack/react-query'
import { CheckCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SHIPPING_PRICE } from '../views/single-product-view'
import ProductOptionSelector from './product-option-selector'

interface OrderFormProps {
  product: Awaited<ReturnType<typeof getSPProductByHandle>>
}

const initialFormData = {
  fullName: '',
  address: '',
  phone: '',
  productOption: 'id-1-pack-x-4',
}

export const OrderForm = ({ product }: OrderFormProps) => {
  const t = useTranslations('SinglePageProduct.orderForm')
  const router = useRouter()
  const trpc = useTRPC()
  const addSPPOrder = useMutation(
    trpc.sppOrders.insert.mutationOptions({
      onSuccess: (order) => {
        router.push(`/single-product/success?order_id=${order.id}`)
      },
    })
  )
  const [formData, setFormData] = useState(initialFormData)
  const onSubmit = () => {
    addSPPOrder.mutate({
      ...formData,
      productId: product.handle,
      productName: product.title,
      productPrice:
        formData.productOption === 'id-1-pack-x-4'
          ? product.price * 4 + SHIPPING_PRICE
          : product.price * 2 + SHIPPING_PRICE,
    })
  }

  return (
    <form action={onSubmit} id="single-product-form">
      <Fieldset className="mt-4 flex flex-col md:flex-row">
        <div className="mt-10 max-w-3xl grow space-y-7 md:mt-0 md:pl-2">
          <Field>
            <ProductOptionSelector
              currency={t('pricing.currency')}
              value={formData.productOption}
              onChange={(value) => setFormData({ ...formData, productOption: value })}
              name="product-option"
              label=""
              defaultValue="id-1-pack-x-4"
              options={[
                {
                  id: 'id-1-pack-x-4',
                  image: product.featuredImage[0].src,
                  price: product.price * 4 + SHIPPING_PRICE,
                  title: t('pricing.pack') + ' x4',
                  badge: t('pricing.mostOrdered'),
                  compareAtPrice: (product.price * 4 + SHIPPING_PRICE) * 2 + 20,
                },
                {
                  id: 'id-2-pack-x-2',
                  image: product.featuredImage[0].src,
                  price: product.price * 2 + SHIPPING_PRICE,
                  title: t('pricing.pack') + ' x2',
                  compareAtPrice: (product.price * 2 + SHIPPING_PRICE) * 2 + 10,
                },
              ]}
            />
          </Field>
          <Field>
            <Label id="order-name-label" htmlFor="order-name-input">
              {t('fullName.label')}
            </Label>
            <InputGroup>
              <HugeiconsIcon data-slot="icon" icon={User02FreeIcons} size={16} />
              <Input
                id="order-name-input"
                name="fullName"
                placeholder={t('fullName.placeholder')}
                value={formData?.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </InputGroup>
          </Field>
          <Field>
            <Label>{t('address.label')}</Label>
            <InputGroup>
              <HugeiconsIcon data-slot="icon" icon={MapsLocation01Icon} size={16} />
              <Input
                name="address"
                placeholder={t('address.placeholder')}
                value={formData?.address!}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </InputGroup>
          </Field>

          {/* ---- */}
          <Field>
            <Label>{t('phone.label')}</Label>
            <InputGroup>
              <HugeiconsIcon data-slot="icon" icon={SmartPhone01Icon} size={16} />
              <Input
                name="phone"
                placeholder={t('phone.placeholder')}
                value={formData?.phone!}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </InputGroup>
          </Field>
          {/* ---- */}

          <div className="pt-2">
            <ButtonPrimary
              color="none"
              type="submit"
              disabled={addSPPOrder.isPending}
              className="flex w-full cursor-pointer items-center justify-center gap-2 bg-[#ef5958] text-white hover:bg-[#31503c] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {addSPPOrder.isPending && (
                <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}
              {addSPPOrder.isPending ? t('orderStatus.placingOrder') : t('orderStatus.title')}
            </ButtonPrimary>
          </div>
        </div>
      </Fieldset>
      <p className="flex items-center justify-center gap-1.5 pt-3 text-xs text-gray-500">
        <CheckCircleIcon className="size-3.5 text-[#387a2f]" />
        {t('deliveryOffer')}
      </p>
    </form>
  )
}
