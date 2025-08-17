import { CallToAction } from '@/sections/CallToAction';
import {Hero} from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { OurTeam } from '@/sections/OurTeam';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Testimonials } from '@/sections/Testimonials';


export default function Home() {
  return(
  <>
   <Hero />
   <LogoTicker/>
   <ProductShowcase/>
   <OurTeam/>
   <Testimonials/>
   <CallToAction/>

  </>
  );
}
