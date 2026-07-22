import { Droplets, FlaskConical, Leaf, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import FeatureCard from './feature-card'

export default function FeatureSection() {
  const t = useTranslations('SinglePageProduct.features')

  const features = [
    {
      title: t('chemicalFree.title'),
      description: t('chemicalFree.description'),
      icon: <FlaskConical size={40} strokeWidth={1.5} />,
    },
    {
      title: t('plantBased.title'),
      description: t('plantBased.description'),
      icon: <Leaf size={40} strokeWidth={1.5} />,
    },
    {
      title: t('handcrafted.title'),
      description: t('handcrafted.description'),
      icon: <Droplets size={40} strokeWidth={1.5} />,
    },
    {
      title: t('preservativeFree.title'),
      description: t('preservativeFree.description'),
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    },
  ]

  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
