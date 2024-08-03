import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const adidasShoesContent = [
    {
      title: 'Unleash Your Style: The Ultimate Footwear Experience',
      description:
        'Step into a world where style meets performance with our exclusive range of Adidas shoes. Designed to elevate your look and enhance your comfort, our shoes are crafted for those who seek both fashion and function. Discover the perfect pair to make every step count.',
    },
    {
      title: 'Embrace Innovation: Cutting-Edge Shoe Technology',
      description:
        'Experience the future of footwear with Adidas. Our shoes incorporate the latest in athletic technology to provide unparalleled support, cushioning, and durability. From advanced materials to innovative design, our shoes are engineered to keep you ahead of the game.',
    },
    {
      title: 'Sustainability Meets Style: Eco-Friendly Footwear Solutions',
      description:
        'Join us in making a difference with our sustainable shoe collection. Adidas is committed to reducing environmental impact while delivering top-notch style and performance. Explore our eco-friendly options and walk the path to a greener future.',
    },
    {
      title: 'Unmatched Comfort: The Perfect Fit for Every Adventure',
      description:
        'Discover the ultimate in comfort with Adidas shoes designed for every journey. Whether you’re hitting the gym, the trail, or the city streets, our shoes provide the perfect fit and exceptional comfort to keep you going all day long.',
    },
    {
      title: 'Timeless Classics: Iconic Designs That Define Trends',
      description:
        'Explore our collection of iconic Adidas designs that have stood the test of time. From the classic Superstar to the ever-popular Ultraboost, our shoes blend heritage with modern style to create timeless pieces that never go out of fashion.',
    },
    {
      title: 'Elevate Your Performance: Shoes That Keep Up With You',
      description:
        'Push your limits with Adidas shoes engineered for peak performance. Our high-performance footwear supports your athletic goals with superior traction, stability, and responsiveness. Gear up with the best and reach new heights in your performance.',
    },
  ];
  
const WhyChoseUs = () => {
  return (
    <div >
    <StickyScroll content={adidasShoesContent} />
    </div>
  )
}

export default WhyChoseUs