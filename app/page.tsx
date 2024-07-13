'use client'
import { useState, useEffect } from 'react';
import Feature from '@/components/Feature';
import Guide from '@/components/Guide';
import Camp from '@/components/Camp';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import CatalogueSection from '@/components/CatalogueSection';
import CatalogSwiperSection from '@/components/CatalogSwiperCection';

export default function Home() {
  const images = [
    '/home.jpg',
    '/outview.png',
    '/boat.png',

    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className=''>
        <header className="relative h-[100vh] mb-20 !bg-top flex items-end justify-center text-white">
          <img
            src={images[currentImageIndex]}
            alt="Background Image"
            className="absolute inset-0 bg-center  w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to z-10"></div>
          <div className="relative z-20 inset-0 p-8 text-center">
            <h1 className="md:text-4xl text-xl font-bold mb-4">Welcome to ORCHARD HOMESTAY</h1>
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
