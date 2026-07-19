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
import { useState } from 'react'
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

const SHIPPING_PRICE = 40

export const OrderForm = ({ product }: OrderFormProps) => {
  const trpc = useTRPC()
  const addSPPOrder = useMutation(
    trpc.sppOrders.insert.mutationOptions({
      onSuccess: () => {
        console.log('Success !')
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
              value={formData.productOption}
              onChange={(value) => setFormData({ ...formData, productOption: value })}
              name="product-option"
              label=""
              defaultValue="id-1-pack-x-4"
              options={[
                {
                  id: 'id-1-pack-x-4',
                  image: product.featuredImage.src,
                  price: product.price * 4 + SHIPPING_PRICE,
                  title: 'Pack x4',
                  subtitle: 'Most popular',
                  badge: 'best value',
                  compareAtPrice: (product.price * 4 + SHIPPING_PRICE) * 2,
                },
                {
                  id: 'id-2-pack-x-2',
                  image: product.featuredImage.src,
                  price: product.price * 2 + SHIPPING_PRICE,
                  title: 'Pack x2',
                  compareAtPrice: (product.price * 2 + SHIPPING_PRICE) * 2,
                },
              ]}
            />
          </Field>
          <Field>
            <Label id="order-name-label" htmlFor="order-name-input">
              Full name
            </Label>
            <InputGroup>
              <HugeiconsIcon data-slot="icon" icon={User02FreeIcons} size={16} />
              <Input
                id="order-name-input"
                name="fullName"
                placeholder="Enter your full name"
                value={formData?.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </InputGroup>
          </Field>
          <Field>
            <Label>Address</Label>
            <InputGroup>
              <HugeiconsIcon data-slot="icon" icon={MapsLocation01Icon} size={16} />
              <Input
                name="address"
                placeholder="Enter your address"
                value={formData?.address!}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </InputGroup>
          </Field>

          {/* ---- */}
          <Field>
            <Label>Phone number</Label>
            <InputGroup>
              <HugeiconsIcon data-slot="icon" icon={SmartPhone01Icon} size={16} />
              <Input
                name="phone"
                placeholder="06 33 888 232"
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
              {addSPPOrder.isPending ? 'Placing your order…' : `Order now`}
            </ButtonPrimary>
          </div>
        </div>
      </Fieldset>
      <p className="flex items-center justify-center gap-1.5 pt-3 text-xs text-gray-500">
        <CheckCircleIcon className="size-3.5 text-[#387a2f]" />
        Cash on delivery — pay when your order arrives
      </p>
    </form>
  )
}
