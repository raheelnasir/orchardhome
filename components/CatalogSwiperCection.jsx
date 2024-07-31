"use client";
import Image from "next/image";
import { TbArrowsUpDown } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function CatalogSwiperSection() {

    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left ">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Comfortable House</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider"></h2>
                    <div className="grid grid-cols-2 text-gray-500 gap-x-8">
                        <div>
                            <p>
                                Discover the wonders of Kupwara District, a gem nestled in the northern reaches of Jammu and Kashmir, renowned for its breathtaking natural beauty and cultural richness.                             </p>
                        </div>
                        <div>
                            <p>
                                Immerse yourself in the tranquil charm of Orchard Home Stay, surrounded by Kashmiri Apple garden.                             </p>
                            <a href="" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">View Gallery <TbArrowsUpDown /> </a>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}

            >
                <SwiperSlide>
                    <Image src="/gallery/Bungus1.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/gallery/Bungus2.jpg" alt="LOGO" width={520} height={300} className="w-full !h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/gallery/Bungus7777.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/gallery/Bungus4.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/gallery/Bungus555.jpg" alt="LOGO" width={520} height={180} className="w-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}