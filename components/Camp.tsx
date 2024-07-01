'use client';

import { PEOPLE_URL } from '@/constants/constant.index';
import Image from 'next/image';

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

const CampSite = (props: CampSiteProps) => {
  const { backgroundImage, title, subtitle, peopleJoined } = props;
  return (
    <div
      className={`h-full w-full min-w-[1100px]  bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `} style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        {/* TOP */}
        <div className='flexCenter gap-4'>

          <div className='flex flex-col gap-1 text-white'>
            <h4 className='bold-18 '>{title}</h4>
            <span className='regular-14'>{subtitle}</span>
          </div>
        </div>
        {/* JOINED */}

      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className='relative 2xl:max-container flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage='/img-1.png'
          title='Orchard House'
          subtitle='Traveling in the Wilderness'
          peopleJoined='50+ Joined'
        />

        <CampSite
          backgroundImage='/img-2.png'
          title='Tent Equipment'
          subtitle='Somewhere in the Wilderness'
          peopleJoined='50+ Joined'

        />
        <CampSite
          backgroundImage='/gallery/bedroom2.jpg'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peopleJoined='50+ Joined'
        />
      </div>

      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-90 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong> Tranquil Orchard Haven</strong>
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Escape to our tranquil orchard haven, where lush greenery and serene landscapes welcome you. Relax in our cozy, well-appointed rooms with breathtaking views, and indulge in the simple pleasures of nature. With a range of activities including hiking, wildlife tours, and fresh farm-to-table dining, your stay promises both adventure and relaxation. Come and experience a peaceful retreat where every moment connects you to the beauty of the natural world.
          </p>
          <Image
            src='/quote.svg'
            alt='qoute'
            width={186}
            height={219}
            className='absolute -bottom-5 right-0'
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
