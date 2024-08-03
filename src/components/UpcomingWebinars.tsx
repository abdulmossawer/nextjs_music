"use client"
import Link from 'next/link';
import { title } from 'process';
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';


const UpcomingWebinars = () => {

    const featuredShoes = [
        {
          title: 'Unleash Your Style with Adidas',
          description:
            'Step into a world where style meets performance with our latest Adidas shoe collection.',
          slug: 'unleash-your-style',
          isFeatured: true,
        },
        {
          title: 'Cutting-Edge Comfort and Performance',
          description:
            'Experience the ultimate comfort and performance with our newest Adidas technology.',
          slug: 'cutting-edge-comfort',
          isFeatured: true,
        },
        {
          title: 'Sustainability Meets Innovation',
          description:
            'Explore our eco-friendly Adidas shoes designed to reduce environmental impact without compromising on style.',
          slug: 'sustainability-meets-innovation',
          isFeatured: true,
        },
        {
          title: 'Iconic Designs, Timeless Appeal',
          description:
            'Discover our collection of iconic Adidas designs that blend classic style with modern performance.',
          slug: 'iconic-designs',
          isFeatured: true,
        },
        // Added two more featured shoes
        {
          title: 'Elevate Your Game',
          description:
            'Push your limits with Adidas shoes engineered for peak performance and durability.',
          slug: 'elevate-your-game',
          isFeatured: true,
        },
        {
          title: 'The Perfect Fit for Every Adventure',
          description:
            'Find the perfect fit for any adventure with our versatile Adidas footwear options.',
          slug: 'perfect-fit-for-every-adventure',
          isFeatured: true,
        },
      ];
      
  return (
    <div className="p-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
      </div>

      <div className="mt-10">
      <HoverEffect items={featuredShoes.map(shoe => (
        {
            title: shoe.title,
            description: shoe.description,
            link: '/'
        }
      ))} />
      </div>

      <div className="mt-10 text-center">
      <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
      </div>
    </div>
  </div>


        
  )
}

export default UpcomingWebinars