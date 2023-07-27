'use client'

import { Card } from '@/components/ui/Card'
import { w } from 'windstitch'

import { useKeenSlider } from 'keen-slider/react'

const CarouselComponent = w.main(
  'flex w-full max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[658px]',
)

interface CarouselProps {
  products: {
    src: string
    id: string
    name: string
    price: number
    priceId: string
  }[]
}

export default function Carousel({ products }: CarouselProps) {
  const [carouselRef] = useKeenSlider({
    slides: {
      perView: 2.75,
      spacing: 48,
    },
  })

  return (
    <CarouselComponent className="keen-slider rounded" ref={carouselRef}>
      {products.map((product) => (
        <Card
          className="keen-slider__slide"
          key={product.id}
          product={product}
        />
      ))}
    </CarouselComponent>
  )
}
