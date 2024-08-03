import AdidasTestimonials from "@/components/AdidasTestimonials";
import Designers from "@/components/Designers";
import FeaturedShoes from "@/components/FeaturedShoes";
import HeroSection from "@/components/HeroSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedShoes/>
    <WhyChoseUs/>
    <AdidasTestimonials/>
    <UpcomingWebinars/>
    <Designers/>
   </main>
  );
}
