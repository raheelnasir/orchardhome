import Image from 'next/image';
import Container from './Container';

const Guide = () => {
  return (

    <section className='flexCenter flex-col'>
      <div className='relative flex  min-h-[80vh] w-[100vw]'>
        <Container customClasses="lg:absolute top-0 lg:left-1/2 lg:-translate-x-1/2">

          <div className='   w-full pb-24'>
            <Image src='/camp.svg' alt='camp' width={50} height={50} />
            <p className='uppercase regular-18 mt-1 mb-3 text-green-50 '>
              we are here for you
            </p>
            <div className='flex  flex-wrap justify-between gap-5 lg:gap-10'>
              <h2 className='bold-40  font-[cursive] xl:max-w-[450px]'>
                Nature Lover's Paradise
              </h2>
              <p className='regular-16 text-gray-30 xl:max-w-[620px]'>
                Discover the serene beauty of Orchard House, where comfort meets nature. Enjoy our eye-catching rooms with stunning mountain and forest views, perfect for nature lovers seeking a peaceful retreat. Enhance your outdoor adventures with our high-quality travel equipment, including cozy tents and sturdy hiking sticks. Travel effortlessly with our reliable transportation services, ensuring a smooth and safe journey. Dive into a variety of focused activities, from wildlife tourism to savoring traditional Kashmiri food, and immerse yourself in local culture through agricultural and horticultural experiences. Orchard House is your ultimate destination for a relaxing and enriching escape.
              </p>
            </div>
          </div>

        </Container>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image
          src='/gallery/mountainskyview.jpg'
          width={1440}
          height={580}
          alt='boat'
          className='object-cover object-center 2xl:rounded-5xl'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image src='/meter.svg' alt='progress' width={16} height={158} className='h-full w-auto' />
          <div className='flexBetween flex-col'>
            <div className='w-full flex-col '>
              <div className='flex flex-row items-center justify-between gap-8'>
                <p className='regular-16 text-gray-20'>Beautiful View</p>
                <span className='bold-16 text-green-90'></span>
              </div>
              <h4 className='bold-20 mt-2'>Orchard Homestay</h4>
            </div>
            <div className='w-full flex-col'>
              <div className='flex flex-row items-center justify-between gap-8'>
                <p className='regular-16 text-gray-20'></p>
              </div>
              <h4 className='bold-20 mt-2'>Kashmir</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
