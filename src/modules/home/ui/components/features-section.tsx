'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Leaf, Rabbit, Sprout, Wheat } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: '100% Vegan',
  },
  {
    icon: Rabbit,
    title: 'Cruelty Free',
  },
  {
    icon: Sprout,
    title: 'Natural Ingredients',
  },
  {
    icon: BadgeCheck,
    title: 'Non GMO',
  },
  {
    icon: Wheat,
    title: 'Organic',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function FeaturesSection() {
  return (
    <section className="border-y border-neutral-100 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group flex flex-col items-center text-center"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mb-5"
                >
                  <Icon
                    size={58}
                    strokeWidth={1.25}
                    className="text-green-700 transition-colors duration-300 group-hover:text-green-800"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">{feature.title}</h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
