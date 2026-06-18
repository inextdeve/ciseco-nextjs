'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CommitmentSection() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}
          <div className="flex justify-center gap-6">
            {/* Left Image - Elementor rotateInUpLeft */}
            <motion.div
              initial={{
                opacity: 0,
                rotate: -45,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                rotate: 10,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                rotate: 6,
                scale: 1.03,
              }}
            >
              <Image
                src="https://mygoalthemes.com/demo/ecosoap/wp-content/uploads/2025/02/h1-img-01.jpg"
                alt="Organic soap"
                width={346}
                height={431}
                priority
                className="rounded-xl shadow-xl"
              />
            </motion.div>

            {/* Right Image - Elementor rotateInDownRight */}
            <motion.div
              className="-mt-8"
              initial={{
                opacity: 0,
                rotate: 45,
                x: 100,
                y: -100,
              }}
              whileInView={{
                opacity: 1,
                rotate: -18,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                rotate: -12,
                scale: 1.03,
              }}
            >
              <Image
                src="https://mygoalthemes.com/demo/ecosoap/wp-content/uploads/2025/02/h1-img-02.jpg"
                alt="Natural ingredients"
                width={275}
                height={330}
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-4 text-sm font-semibold tracking-[0.2em] text-green-600 uppercase"
            >
              Commitment and Values
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-6 text-4xl leading-tight font-bold lg:text-5xl"
            >
              Handcrafted with certified organic ingredients
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mb-8 text-gray-600"
            >
              Our luxurious range of natural soaps are made using the finest, pure ingredients, including only pure
              essential oils to create our uplifting, nurturing scents. Our natural soaps and all-natural skincare
              products gently work in harmony with your skin making them perfect for all skin types and ages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-green-700"
              >
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                Discover Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
