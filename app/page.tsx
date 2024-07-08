
import Feature from '@/components/Feature';
import Guide from '@/components/Guide';
import Camp from '@/components/Camp';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import CatalogueSection from '@/components/CatalogueSection';
import CatalogSwiperSection from '@/components/CatalogSwiperCection';

export default function Home() {
  return (
    <>
      <div className=''>
        <header className="relative h-[80vh] !bg-top flex items-end justify-center text-white">
          <img src="/home.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="relative z-20 p-8 text-center">
            <h1 className="md:text-4xl  text-xl font-bold mb-4">Welcome to ORCHARD HOMESTAY</h1>
            <p className="md:text-lg text-base">Stay in paradise of nature with beautiful view and nearby locations. Empower your travel experience with our 24/7 service.</p>
          </div>
        </header>
        <Hero />
        <CatalogueSection />
        <CatalogSwiperSection />
        <Contact />

        <Camp />

        <Guide />


        <Feature />
      </div>

    </>
  );
}
