import { Check, Package, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useId, useState } from 'react'

export type Accent = 'emerald' | 'blue' | 'violet' | 'amber'

export interface ProductOption {
  id: string
  title?: string
  badge?: string
  price: number
  compareAtPrice?: number
  subtitle?: string
  image?: string
  imageAlt?: string
}

interface ProductOptionSelectorProps {
  label?: string
  options?: ProductOption[]
  name?: string
  defaultValue?: string
  value?: string
  onChange?: (id: string, option: ProductOption) => void
  currency?: string
  locale?: string
  accent?: Accent
}

interface OptionCardProps {
  option: ProductOption
  name: string
  inputId: string
  isSelected: boolean
  onSelect: () => void
  currency: string
  locale: string
  accent: Accent
}

interface Discount {
  percent: number
  amount: number
}

interface AccentPalette {
  border: string
  tint: string
  solid: string
  ring: string
  badgeBg: string
  badgeText: string
}

export default function ProductOptionSelector({
  label = 'Select option',
  options = DEFAULT_OPTIONS,
  name,
  defaultValue,
  value,
  onChange,
  currency = 'MAD',
  locale = 'en-US',
  accent = 'emerald',
}: ProductOptionSelectorProps) {
  const uid = useId()

  const groupName = name ?? `product-option-${uid}`

  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue ?? options[0]?.id)

  const isControlled = value !== undefined
  const selectedId = isControlled ? value : internalValue

  const handleSelect = (option: ProductOption) => {
    if (!isControlled) {
      setInternalValue(option.id)
    }

    onChange?.(option.id, option)
  }

  return (
    <fieldset className="m-0 w-full border-0 p-0">
      <legend className="mb-2.5 text-[11px] font-bold tracking-wider text-gray-500 uppercase">{label}</legend>

      <div className="space-y-2.5">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            name={groupName}
            inputId={`${uid}-${option.id}`}
            isSelected={selectedId === option.id}
            onSelect={() => handleSelect(option)}
            currency={currency}
            locale={locale}
            accent={accent}
          />
        ))}
      </div>
    </fieldset>
  )
}

function OptionCard({ option, name, inputId, isSelected, onSelect, currency, locale, accent }: OptionCardProps) {
  const t = useTranslations('SinglePageProduct.orderForm.pricing')

  const palette = ACCENTS[accent]

  const discount = getDiscount(option.price, option.compareAtPrice)

  const subtitle =
    option.subtitle ?? (discount ? `${t('save')} ${formatPrice(discount.amount, currency, locale)}` : null)

  return (
    <div className="relative">
      <input
        type="radio"
        id={inputId}
        name={name}
        value={option.id}
        checked={isSelected}
        onChange={onSelect}
        className="peer sr-only"
      />

      <label
        htmlFor={inputId}
        className={[
          'flex cursor-pointer items-center gap-3.5 rounded-2xl border p-3.5',
          'transition-colors duration-200 motion-reduce:transition-none',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2',
          palette.ring,
          isSelected ? `${palette.border} ${palette.tint}` : 'border-gray-200 bg-white hover:border-gray-300',
        ].join(' ')}
      >
        <span
          aria-hidden="true"
          className={[
            'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2',
            'transition-colors duration-200 motion-reduce:transition-none',
            isSelected ? `${palette.solid} border-transparent` : 'border-gray-300 bg-white',
          ].join(' ')}
        >
          <Check
            className={[
              'h-3 w-3 text-white transition-transform duration-200 motion-reduce:transition-none',
              isSelected ? 'scale-100' : 'scale-0',
            ].join(' ')}
            strokeWidth={3}
          />
        </span>

        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
          {option.image ? (
            <img src={option.image} alt={option.imageAlt ?? ''} className="h-full w-full object-cover" />
          ) : (
            <Package className="h-6 w-6 text-gray-300" strokeWidth={1.5} aria-hidden="true" />
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          {option.badge && (
            <span
              className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${palette.badgeBg} ${palette.badgeText}`}
            >
              <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
              {option.badge}
            </span>
          )}

          {option.title && <p className="truncate text-sm font-semibold text-gray-900">{option.title}</p>}

          <div className="flex flex-wrap items-baseline gap-x-1.5">
            <span className="text-xl font-bold tracking-tight text-gray-900 tabular-nums">
              {formatPrice(option.price, currency, locale)}
            </span>

            {discount && (
              <>
                <s className="text-xs font-medium text-gray-400 tabular-nums">
                  {formatPrice(option.compareAtPrice!, currency, locale)}
                </s>

                <span className="rounded bg-rose-50 px-1 py-0.5 text-[10px] font-bold text-rose-600 tabular-nums">
                  -{discount.percent}%
                </span>
              </>
            )}
          </div>

          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </label>
    </div>
  )
}

function formatPrice(amount: number, currency: string, locale: string): string {
  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
  }).format(amount)

  return `${formatted} ${currency}`
}

function getDiscount(price: number, compareAtPrice?: number): Discount | null {
  if (!compareAtPrice || compareAtPrice <= price) {
    return null
  }

  return {
    percent: Math.round((1 - price / compareAtPrice) * 100),
    amount: compareAtPrice - price,
  }
}

const ACCENTS: Record<Accent, AccentPalette> = {
  emerald: {
    border: 'border-emerald-600',
    tint: 'bg-emerald-50',
    solid: 'bg-emerald-600',
    ring: 'peer-focus-visible:ring-emerald-500',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
  },
  blue: {
    border: 'border-blue-600',
    tint: 'bg-blue-50',
    solid: 'bg-blue-600',
    ring: 'peer-focus-visible:ring-blue-500',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
  },
  violet: {
    border: 'border-violet-600',
    tint: 'bg-violet-50',
    solid: 'bg-violet-600',
    ring: 'peer-focus-visible:ring-violet-500',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-700',
  },
  amber: {
    border: 'border-amber-600',
    tint: 'bg-amber-50',
    solid: 'bg-amber-600',
    ring: 'peer-focus-visible:ring-amber-500',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-700',
  },
}

const DEFAULT_OPTIONS: ProductOption[] = [
  {
    id: 'pack-4',
    title: 'Pack of 4',
    badge: 'Best value',
    price: 236,
    compareAtPrice: 472,
  },
  {
    id: 'pack-3',
    title: 'Pack of 3',
    price: 177,
    compareAtPrice: 354,
  },
]
