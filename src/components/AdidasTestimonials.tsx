"use client";
import { InfiniteMovingCards } from './ui/infinite-moving-cards';


const adidasShoeTestimonials = [
    {
      quote:
        'The comfort and support of these Adidas shoes have completely transformed my daily routine. Perfect for both workouts and casual wear!',
      name: 'Jordan Smith',
      title: 'Fitness Enthusiast',
    },
    {
      quote:
        "I've never experienced such a perfect blend of style and performance. These Adidas shoes not only look great but also provide outstanding comfort.",
      name: 'Lisa Wong',
      title: 'Fashion Aficionado',
    },
    {
      quote:
        "Adidas shoes have elevated my running experience to a whole new level. The cushioning and support are unmatched. Highly recommended for athletes!",
      name: 'Ryan Clark',
      title: 'Marathon Runner',
    },
    {
      quote:
        'The quality and durability of these Adidas shoes are incredible. They have become my go-to footwear for both work and play.',
      name: 'Emily Davis',
      title: 'Professional',
    },
    {
      quote:
        'The innovation behind Adidas shoes is impressive. They offer not only superior comfort but also a stylish edge that fits any occasion.',
      name: 'Chris Johnson',
      title: 'Tech Enthusiast',
    },
  ];
  
const AdidasTestimonials = () => {
  return (
    <div>
            <div className="h-[40rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Durable and stylish:Adidas shoes are my ultimate go-to.</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={adidasShoeTestimonials}
        direction="left"
        speed="normal"
      />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AdidasTestimonials