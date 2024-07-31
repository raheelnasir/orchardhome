"use client";

import React from 'react';
import Container from './Container';
import { useState, useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {

  const observerOptions = {
    rootMargin: "0px",
    threshold: 0.2,
  };

  const sectionRef = useRef(null);
  const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

  const clickHandler = (index) => {
    setOpenGallery(true);
    setGalleryIndex(index);
  };
  return (

    <section className={`max-container min-h-screen  relative flex flex-col  py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
      <Container customClasses="lg:absolute flex lg:flex-row flex-col  lg:left-1/2 lg:-translate-x-1/2">

        <Link className='hover:cursor-pointer hero-map w-full' href={'https://www.google.com/maps/place/Jammu+%26+Kashmir,+193224/data=!4m6!3m5!1s0x38e0e11dff744a57:0x20eb02042fcb894!7e2!8m2!3d34.479704999999996!4d74.1541901?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNS4xMDIYACCIJypaLDk0MjEyNDk2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE3NTIzLDk0MjE4NjUzLDk0MjI5ODM5LDQ3MDg3MTE4LDQ3MDg0MzkzLDk0MjEzMjAwQgJQSw%3D%3D'}></Link>

        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>

          <h1 className=' md:text-3xl text-2xl font-bold'> Your Perfect Gateway</h1>
          <p className='regular-16 mt-6 md:text-2xl !text-base  text-gray-30 xl:max-w-[520px]'>
            Escape to the tranquility of our Orchard Homestay, nestled amidst lush fruit trees and scenic landscapes. This charming retreat offers travelers a serene haven with modern comforts, just a stone's throw away from local attractions. Enjoy cozy accommodations, breathtaking views, and the unique experience of staying in a working orchard. Whether you're seeking a peaceful retreat or an adventurous getaway, the Orchard House provides the perfect blend of relaxation and exploration.
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
        <Link className='hover:cursor-pointer' href={'https://www.google.com/maps/place/Jammu+%26+Kashmir,+193224/data=!4m6!3m5!1s0x38e0e11dff744a57:0x20eb02042fcb894!7e2!8m2!3d34.479704999999996!4d74.1541901?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNS4xMDIYACCIJypaLDk0MjEyNDk2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE3NTIzLDk0MjE4NjUzLDk0MjI5ODM5LDQ3MDg3MTE4LDQ3MDg0MzkzLDk0MjEzMjAwQgJQSw%3D%3D'}>
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
              <p className='text-white'>
                See on map
              </p>

            </div>
          </div>
        </Link>

      </Container>

    </section>
  );
};

export default Hero;
