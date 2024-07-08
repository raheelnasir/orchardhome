"use client";

import { useState, useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "./Container";
import Slider from 'infinite-react-carousel';
const galleryThumbnails = [
    {
        id: 1,
        src: "/gallery/home.jpg",
        club: "House Snaps",
        city: "Berlin",
        date: "25/12/2017",
        slides: [{ src: "/gallery/home.jpg" }, { src: "/gallery/bedroom1.png" }, { src: "/gallery/bedroom2.png" }, { src: "/gallery/washroom.JPG" }],
    },
    {
        id: 2,
        src: "/gallery/beauty.jpg",
        club: "Nearby Views",
        city: "Berlin",
        date: "25/12/2017",
        slides: [{ src: "/gallery/beauty.jpg" }, { src: "/gallery/largeview.jpg" }, { src: "/gallery/sheepview.jpg" }, { src: "/gallery/mountainskyview.JPG" }, { src: "/gallery/ducks.JPG" }, { src: "/gallery/flower.JPG" }],
    },
    {
        id: 3,
        src: "https://www.holidaymonk.com/wp-content/uploads/2021/09/Kashmiri-Food-and-Travel.jpg",
        club: "Traditional Dishes",
        city: "Berlin",
        date: "25/12/2017",
        slides: [{ src: "https://www.holidaymonk.com/wp-content/uploads/2021/09/Kashmiri-Food-and-Travel.jpg" }, { src: "https://i.ndtvimg.com/i/2016-09/kashmiri-food-625_625x350_51473671605.jpg" }, { src: "https://ethnq.com/wp-content/uploads/2023/02/Kashmiri-Food-Culture.webp" }, { src: "https://www.tourmyindia.com/states/jammu-kashmir/image/cuisine-jk1.jpg" }],
    },
    {
        id: 4,
        src: "https://thebetterkashmir.com/betterkashmircontent/uploads/2020/08/cold-smooth-tasty-1920x1080.jpg",
        club: "Bungus Valley 25KM Away",
        city: "Berlin",
        date: "25/12/2017",
        slides: [{ src: "https://thebetterkashmir.com/betterkashmircontent/uploads/2020/08/cold-smooth-tasty-1920x1080.jpg" }, { src: "https://alienholidays.com/ebmedia/sitename_eb/wp-content/uploads/2016/12/4.jpg" }, { src: "https://thekashmirpress.com/wp-content/uploads/2022/06/bangus-picnic-forest.jpeg" }],
    },
    {
        id: 5,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwx0wBqu89ol-rA_1tK1nT9cagU9jTkbwrQ&s",
        club: "Lolab Valley 20KM Away",
        city: "Berlin",
        date: "25/12/2017",
        slides: [{ src: "https://kashmirport.com/wp-content/uploads/2019/03/K108-resize.jpg" }, { src: "https://images.nativeplanet.com/img/2018/06/neelum-valley-jammu-kashmirsolabvalley-1528718901.jpg" }, { src: "https://www.dailygoodmorningkashmir.com/wp-content/uploads/2023/12/Lolab-Kupwara-Good-Morning-Kashmir-e1702580300737.jpg " }],
    },
    {
        id: 68,
        src: "https://eagleeye.com.pk/pttl/wp-content/uploads/2021/10/Karen-And-Upper-Neelum-2-870x555.jpg",
        club: "Karen 25KM Away",
        city: "Berlin",
        date: "25/12/2017",
        slides: [{ src: "https://www.holidaymonk.com/wp-content/uploads/2021/09/Kashmiri-Food-and-Travel.jpg" }, { src: "https://alienholidays.com/ebmedia/sitename_eb/wp-content/uploads/2016/12/4.jpg" }, { src: "https://rightwingstours.com/images/tulail.jpg" }, { src: "/gallery/mountainskyview.JPG" }, { src: "/gallery/ducks.JPG" }, { src: "/gallery/flower.JPG" }],
    },
    {
        id: 66,
        src: "https://www.tangdhar.com/img1.wsimg.com/isteam/ip/815aaba6-e62d-4a16-8aab-53f0b7a0f205/WhatsApp%20Image%202023-11-02%20at%2010.31.15%20(1).jpeg/_/cr%3Dt_0%25%2Cl_6.56%25%2Cw_93.44%25%2Ch_93.jpg",
        club: "Tangadar 45KM Away",
        city: "Berlin",
        date: "25/12/2017",
        slides: [{ src: "https://www.tangdhar.com/img1.wsimg.com/isteam/ip/815aaba6-e62d-4a16-8aab-53f0b7a0f205/WhatsApp%20Image%202023-11-02%20at%2010.31.15%20(1).jpeg/_/cr%3Dt_0%25%2Cl_6.56%25%2Cw_93.44%25%2Ch_93.jpg" }, { src: "https://www.canewsottawa.ca/wp-content/uploads/2020/07/Jammu-and-Kashmir-to-welcome-vacationers-before-long-new-tips.jpg" }, , { src: "https://www.hindustantimes.com/ht-img/img/2023/07/29/1600x900/Jammu_and_Kashmir_Keran_village_1690633726976_1690633735708.jpg" }, { src: "/gallery/ducks.JPG" },],
    }




];

const observerOptions = {
    rootMargin: "0px",
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
        <section id="photo-gallery" className={`w-full m-auto  pb-14 h-max relative reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
            <Container customClasses="lg:absolute  lg:left-1/2 lg:-translate-x-1/2">
                <h2 className="font-bold md:text-4xl text-xl  pb-6">Gallery</h2>
                <p>Click to see more..</p>
                <div className="w-full">

                    <div className="hidden md:block">
                        <Slider dots slidesToShow={4} arrows={false} autoplay={true} autoplayScroll={1} autoplaySpeed={2000}	>

                            {galleryThumbnails.map((item, index) => {
                                return (
                                    <div className="flex flex-col mb-5 leading-none" key={item.id}>
                                        <div className="w-full h-full relative rounded-lg bg-fluo-green transition-all">
                                            <img className="rounded-lg cursor-pointer hover:opacity-60  min-h-[300px] max-h-[300px] transition-all" src={item.src} sizes="100vw" width={300} height={300} alt="Gallery gig thumbnail" onClick={() => clickHandler(index)} />
                                            <h5 className="absolute top-[91%]  bg-white w-[300px] z-50 text-center font-bold text-xl  " style={{ textShadow: "0px 0px 2px black" }}>{item.club}</h5>

                                        </div>

                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className="md:hidden block">
                        <Slider dots slidesToShow={2} arrows={false} autoplay={true} autoplayScroll={1} autoplaySpeed={2000}	>

                            {galleryThumbnails.map((item, index) => {
                                return (
                                    <div className="flex flex-col mb-5 leading-none" key={item.id}>
                                        <div className="w-full h-full relative rounded-lg bg-fluo-green transition-all">
                                            <img className="rounded-lg cursor-pointer hover:opacity-60  min-h-[250px] max-h-[250px] transition-all" src={item.src} sizes="100vw" width={185} height={220} alt="Gallery gig thumbnail" onClick={() => clickHandler(index)} />
                                            <h5 className="absolute top-[94%] text-sm   bg-white w-full  z-50  " style={{ textShadow: "0px 0px 2px black" }}>{item.club}</h5>

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