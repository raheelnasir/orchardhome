
import Feature from '@/components/Feature';
import Guide from '@/components/Guide';
import Hero from '@/components/Hero';
import Camp from '@/components/Camp';
import About from '@/components/About';
import PhotoGallery from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <PhotoGallery />
      <About />

      <Feature />
    </>
  );
}
