import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
       
        <h1 className='bold-52 lg:bold-88'> Your Perfect Gateway</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
        Escape to the tranquility of our Orchard House, nestled amidst lush fruit trees and scenic landscapes. This charming retreat offers travelers a serene haven with modern comforts, just a stone's throw away from local attractions. Enjoy cozy accommodations, breathtaking views, and the unique experience of staying in a working orchard. Whether you're seeking a peaceful retreat or an adventurous getaway, the Orchard House provides the perfect blend of relaxation and exploration.
        </p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src='/star.svg'
                  width={24}
                  height={24}
                  alt='star'
                />
              ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>
            1K+
            <span className='regular-16 lg:regular-20 ml-1'>
              Postivie Reviews
            </span>
          </p>
        </div>

        
      </div>

      <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Location</p>
            </div>
            <p className='text-white font-light'>Bhat Mohallah Villagam Kupwara Jammu & Kashmir</p>

            <div className='flex flex-row gap-6 mt-8'>
              <div className='flex flex-col'>
                <p className='regular-16 text-gray-20'>Country</p>
                <p className='text-white font-light'>India</p>
              </div>
              <div className='flex flex-col'>
                <p className='regular-16 text-gray-20'>Postal Code</p>
                <p className='text-white font-light'>193224</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
