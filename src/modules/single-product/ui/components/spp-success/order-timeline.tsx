import { Check, Home, Phone, Truck } from 'lucide-react'

const steps = [
  {
    icon: <Check />,
    label: 'Order received',
  },
  {
    icon: <Phone />,
    label: 'Confirmation call',
  },
  {
    icon: <Truck />,
    label: 'Shipping',
  },
  {
    icon: <Home />,
    label: 'Delivered',
  },
]

export default function OrderTimeline() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-bold">What happens next?</h3>

      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                index === 0 ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-500'
              } `}
            >
              {step.icon}
            </div>

            <p className="max-w-[70px] text-center text-xs">{step.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
        {/* <Info size={18} /> */}
        Our team will call you shortly to confirm your order. Please stay available.
      </div>
    </div>
  )
}
