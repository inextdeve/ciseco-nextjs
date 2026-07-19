'use client'

import ReviewItem from '@/components/ReviewItem'
import StarReview from '@/components/StarReview'
import { TReview } from '@/data/data'
import { Button } from '@/shared/Button/Button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/shared/dialog'
import { Field, Fieldset, Label } from '@/shared/fieldset'
import { Textarea } from '@/shared/textarea'
import { StarIcon } from '@heroicons/react/24/solid'
import { MessageAdd01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Form from 'next/form'
import React from 'react'

const ProductReviews = ({
  rating,
  reviewNumber,
  reviews,
  className,
}: {
  reviews: TReview[]
  className?: string
  rating?: number
  reviewNumber?: number
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSubmit = async (formData: FormData) => {
    const formObjectEntries = Object.fromEntries(formData.entries())

    const review = formData.get('review')?.toString() || ''
    const rating = formData.get('rating') ? parseInt(formData.get('rating')?.toString() || '0', 10) : 0
    if (!review || rating < 1 || rating > 5) {
      console.error('Invalid review or rating')
      return
    }
    // Here you would typically send the review to your server
    console.log('Submitting review:', { review, rating, formObjectEntries })
    // Close the dialog after submission
    setIsOpen(false)
    // Optionally, you can also update the reviews state to include the new review
    // For example, you could call a function to fetch the updated reviews
  }

  return (
    <div className={clsx(className)}>
      <div>
        {/* HEADING */}
        <h2 className="flex scroll-mt-8 items-center text-2xl font-semibold" id="reviews">
          <StarIcon className="mb-0.5 size-7" />
          <span className="ml-1.5">
            {rating && `${rating}`} {reviewNumber && ` · ${reviewNumber}`} Reviews
          </span>
        </h2>

        {/* comment */}
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-x-14 gap-y-11 md:grid-cols-2 lg:gap-x-28">
            {reviews.map((review) => (
              <ReviewItem key={review.id} data={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductReviews
