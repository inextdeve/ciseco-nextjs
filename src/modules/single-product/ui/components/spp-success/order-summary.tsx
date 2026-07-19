import { ShoppingBag } from 'lucide-react'
import { OrderItem } from '../../../types'

interface Props {
  items: OrderItem[]
  total: number
}

export default function OrderSummary({ items, total }: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="flex items-center gap-2 text-lg font-bold">
        <ShoppingBag size={20} />
        Your Order
      </h3>

      <div className="mt-5 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-4">
            <div>
              <p className="font-semibold">{item.name}</p>

              {/* <p className="text-sm text-slate-500">
                SKU: {item.sku} · Qty: {item.quantity}
              </p> */}
            </div>

            <p className="font-bold">DH {item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3 text-sm">
        {/* <div className="flex justify-between">
          <span>Subtotal</span>

          <span>DH {total.toFixed(2)}</span>
        </div> */}

        <div className="flex justify-between">
          <span>Delivery</span>

          <span className="font-semibold text-green-600">Free</span>
        </div>

        <div className="flex justify-between border-t pt-3 text-lg font-bold">
          <span>Total</span>

          <span>DH {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
