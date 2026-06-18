import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    image: 'https://mygoalthemes.com/demo/ecosoap/wp-content/uploads/2025/02/img-tes-01.jpg',
    title: 'Good soap!',
    rating: 5,
    description:
      'I love the soaps so much. I keep buying various fragrances. I think the most favourite ones are almond, lemongrass and spices. I have sensitive skin prone to eczema and this product does not cause problems.',
    name: 'Martha Griffin',
    role: 'Designer',
  },
  {
    image: 'https://mygoalthemes.com/demo/ecosoap/wp-content/uploads/2025/02/img-tes-02.jpg',
    title: 'Marvelous!',
    rating: 4,
    description:
      "I would say it's the classic soap you are looking for. Soft texture, lovely price, works great and thanks to the large selection of scents, you can discover new sensations just by changing a new bar of soap.",
    name: 'Bruce Jones',
    role: 'Web Developer',
  },
  {
    image: 'https://mygoalthemes.com/demo/ecosoap/wp-content/uploads/2025/02/img-tes-03.jpg',
    title: 'Very natural product',
    rating: 3,
    description:
      "Not bad for dry skin. Smells incredible. I've bought sandalwood and lavender scented soaps. Great price. I could not wish for more.",
    name: 'Deanna Rose',
    role: 'Consultant',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f2e5d6] py-16 lg:py-24">
      <div className="mb-14 text-center">
        <span className="mb-4 block text-sm font-semibold tracking-[0.2em] text-[#ef5958] uppercase">Testimonials</span>

        <h2 className="text-4xl leading-tight font-bold text-[#31503c] md:text-5xl">
          What Our Customers
          <br />
          Are Saying
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="overflow-hidden rounded-2xl bg-[#31503c] text-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="grid h-full md:grid-cols-[140px_1fr]">
                {/* Avatar */}
                <div className="relative md:h-full">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill={index < testimonial.rating ? 'currentColor' : 'none'}
                        className="text-amber-400"
                      />
                    ))}
                  </div>

                  <h3 className="mb-3 font-semibold text-[#ef5958]">{testimonial.title}</h3>

                  <p className="mb-6 line-clamp-4 text-sm leading-5">"{testimonial.description}"</p>

                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm font-light text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
