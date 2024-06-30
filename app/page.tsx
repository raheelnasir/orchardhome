import Feature from '@/components/Feature';
import Guide from '@/components/Guide';
import Hero from '@/components/Hero';
import Camp from '@/components/Camp';
import { CarouselGallery } from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <CarouselGallery  />
      <Feature />
    </>
  );
}
