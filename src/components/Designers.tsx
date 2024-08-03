"use client"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";


const adidasDesigners = [
    {
      id: 1,
      name: 'Sophia Martinez',
      designation: 'Lead Footwear Designer',
      image:
        'https://images.unsplash.com/photo-1541598609756-e7dfa98d129f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Liam Johnson',
      designation: 'Footwear Innovation Specialist',
      image:
        'https://images.unsplash.com/photo-1511745990576-dbb681861dc7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      designation: 'Sports Shoe Designer',
      image:
        'https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Oliver Brown',
      designation: 'Performance Footwear Engineer',
      image:
        'https://images.unsplash.com/photo-1536243298747-ea8874136d64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  
const Designers = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Designers</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the experts crafting our cutting-edge footwear. Their innovation and style elevate every step you take.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={adidasDesigners} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Designers