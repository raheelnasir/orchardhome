
import Feature from '@/components/Feature';
import Guide from '@/components/Guide';
import Camp from '@/components/Camp';
import About from '@/components/About';
import PhotoGallery from '@/components/Carousel';
import Hero from '@/components/Hero';

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
