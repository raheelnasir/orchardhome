'use client';

import { useState, useRef } from 'react';
import { useIsIntersecting } from '@/app/util/useObserver';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';
import Container from './Container';
import Slider from 'infinite-react-carousel';

const galleryThumbnails = [
    {
        id: 1,
        src: '/gallery/home.jpg',
        club: 'House Snaps',
        city: 'Berlin',
        date: '25/12/2017',
        slides: [
            { src: '/gallery/home.jpg', type: 'image' },
            { src: '/gallery/Home11.jpg', type: 'image' },
            { src: '/gallery/bedroom1.png', type: 'image' },
            { src: '/gallery/bedroom2.png', type: 'image' },
            { src: '/gallery/washroom.JPG', type: 'image' }
        ],
    },
    {
        id: 2,
        src: '/gallery/beauty.jpg',
        club: 'Nearby Views',
        city: 'Berlin',
        date: '25/12/2017',
        slides: [
            { src: '/gallery/beauty.jpg', type: 'image' },
            { src: '/gallery/largeview.jpg', type: 'image' },
            { src: '/gallery/sheepview.jpg', type: 'image' },
            { src: '/gallery/mountainskyview.JPG', type: 'image' },
            { src: '/gallery/ducks.JPG', type: 'image' },
            { src: '/gallery/flower.JPG', type: 'image' }
        ],
    },
    {
        id: 3,
        src: '/gallery/f2.jpg',
        club: 'Traditional Dishes',
        city: 'Berlin',
        date: '25/12/2017',
        slides: [
            { src: '/gallery/f1.jpg', type: 'image' },
            { src: '/gallery/f2.jpg', type: 'image' },
            { src: '/gallery/f3.jpg', type: 'image' },
            { src: '/gallery/f4.jpg', type: 'image' },
            { src: '/gallery/f5.jpg', type: 'image' },
            { src: '/gallery/f6.jpg', type: 'image' }
        ],
    },
    {
        id: 4,
        src: '/bb1.png',
        club: 'Bungus Valley 25KM Away',
        city: 'Berlin',
        date: '25/12/2017',
        slides: [
            { src: '/bb1.png', type: 'image' },
            { src: '/bb2.png', type: 'image' },
            { src: '/bb3.png', type: 'image' },
            { src: '/bb4.png', type: 'image' }

        ],
    },
    {
        id: 5,
        src: '/ll1.png',
        club: 'Lolab Valley 20KM Away',
        city: 'Berlin',
        date: '25/12/2017',
        slides: [
            { src: '/ll2.png', type: 'image' },
            { src: '/ll3.png', type: 'image' },
            { src: '/ll4.png ', type: 'image' },
            { src: '/ll5.png ', type: 'image' }

        ],
    },
    {
        id: 68,
        src: '/kv1.png',
        club: 'Karen 25KM Away',
        city: 'Berlin',
        date: '25/12/2017',
        slides: [
            { src: '/kv1.png', type: 'image' },
            { src: '/kv2.png', type: 'image' },
            { src: '/kv3.png', type: 'image' },
            { src: '/kv4.png', type: 'image' },
            { src: '/kv5.png', type: 'image' }],
    },
    {
        id: 66,
        src: '/bt1.png',
        club: 'Tangadar 45KM Away',
        city: 'Berlin',
        date: '25/12/2017',
        slides: [
            { src: '/bt1.png', type: 'image' },
            { src: '/bt2.png', type: 'image' },
            { src: 'bt3.png', type: 'image' }
        ],
    }
];

const observerOptions = {
    rootMargin: '0px',
    threshold: 0.2,
};

export default function PhotoGallery() {
    const [openGallery, setOpenGallery] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const sectionRef = useRef(null);
    const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

    const clickHandler = (index) => {
        setOpenGallery(true);
        setGalleryIndex(index);
    };

    return (
        <section id='photo-gallery' className={`w-full m-auto  pb-14 h-max relative reveal${isIntersecting ? ' visible' : ''}`} ref={sectionRef}>
            <Container customClasses='lg:absolute  lg:left-1/2 lg:-translate-x-1/2'>
                <h2 className='font-bold md:text-4xl text-xl  pb-6'>Gallery</h2>
                <p>Click to see more..</p>
                <div className='w-full'>

                    <div className='hidden md:block'>
                        <Slider dots slidesToShow={4} arrows={false} autoplay={true} autoplayScroll={1} autoplaySpeed={2000}	>

                            {galleryThumbnails.map((item, index) => {
                                return (
                                    <div className='flex flex-col mb-5 leading-none' key={item.id}>
                                        <div className='w-full h-full relative rounded-lg bg-fluo-green transition-all'>
                                            <img className='rounded-lg cursor-pointer hover:opacity-60  min-h-[300px] max-h-[300px] transition-all' src={item.src} sizes='100vw' width={300} height={300} alt='Gallery gig thumbnail' onClick={() => clickHandler(index)} />
                                            <h5 className='absolute top-[91%]  bg-white w-[300px] z-50 text-center font-bold text-xl  ' style={{ textShadow: '0px 0px 2px black' }}>{item.club}</h5>

                                        </div>

                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className='md:hidden block'>
                        <Slider dots slidesToShow={2} arrows={false} autoplay={true} autoplayScroll={1} autoplaySpeed={2000}	>

                            {galleryThumbnails.map((item, index) => {
                                return (
                                    <div className='flex flex-col mb-5 leading-none' key={item.id}>
                                        <div className='w-full h-full relative rounded-lg bg-fluo-green transition-all'>
                                            <img className='rounded-lg cursor-pointer hover:opacity-60  min-h-[220px] max-h-[220px] transition-all' src={item.src} sizes='100vw' width={150} height={200} alt='Gallery gig thumbnail' onClick={() => clickHandler(index)} />
                                            <h5 className='absolute top-[94%] text-sm   bg-white w-full  z-50  ' style={{ textShadow: '0px 0px 2px black' }}>{item.club}</h5>

                                        </div>

                                    </div>
                                );
                            })}
                        </Slider>
                    </div>


                    <Lightbox open={openGallery} close={() => setOpenGallery(false)} slides={galleryThumbnails[galleryIndex].slides} />
                </div>
            </Container>
        </section>
    );
}
