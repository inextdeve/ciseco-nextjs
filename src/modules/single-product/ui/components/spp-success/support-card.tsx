import { Headset } from 'lucide-react'

interface Props {
  whatsappUrl: string
  orderId: string
}

export default function SupportCard({ whatsappUrl }: Props) {
  return (
    <div className="rounded-2xl bg-blue-50 p-6">
      <h3 className="flex items-center gap-2 font-bold text-blue-900">
        <Headset size={20} />
        Need help?
      </h3>

      <p className="mt-3 text-sm text-blue-800">
        Our team is here to help. Contact us for any questions about your order.
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        className="mt-5 flex justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Contact us on WhatsApp
      </a>
    </div>
  )
}
