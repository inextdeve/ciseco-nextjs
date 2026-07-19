export interface OrderItem {
  name: string
  sku: string
  quantity: number
  price: number
}

export interface CustomerInfo {
  name: string
  phone: string
  address: string
  city: string
  paymentMethod: string
}

export interface SuccessPageProps {
  orderId: string
  items: OrderItem[]
  customer: CustomerInfo
  total: number
  whatsappUrl: string
}
