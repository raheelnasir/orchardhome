"use client";

import { useState, useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "./Container";

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
        club: "Nearby Locations",
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
        slides: [{ src: "https://www.holidaymonk.com/wp-content/uploads/2021/09/Kashmiri-Food-and-Travel.jpg" }, { src: "/gallery/largeview.jpg" }, { src: "/gallery/sheepview.jpg" }, { src: "/gallery/mountainskyview.JPG" }, { src: "/gallery/ducks.JPG" }, { src: "/gallery/flower.JPG" }],
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
        <section id="photo-gallery" className={`w-full   pb-14 lg:mt-10  lg:pb-56 lg:mb-[22.5rem] reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
            <Container customClasses="lg:absolute  lg:left-1/2 lg:-translate-x-1/2">
                <h2 className="font-bold text-6xl pb-6">Gallery</h2>
                <p>Click to see more..</p>
                <div className="flex md:flex-row flex-col  justify-center gap-4 mt-5">
                    {galleryThumbnails.map((item, index) => {
                        return (
                            <div className="flex flex-col mb-5 leading-none" key={item.id}>
                                <div className="w-full h-full rounded-lg bg-fluo-green transition-all">
                                    <img className="rounded-lg cursor-pointer hover:opacity-60 lg:w-[40vw] w-[80vw] min-h-[300px] max-h-[300px] transition-all" src={item.src} sizes="100vw" width={400} height={400} alt="Gallery gig thumbnail" onClick={() => clickHandler(index)} />
                                </div>
                                <h5 className=" text-center font-bold text-xl md:text-2xl xl:text-3xl ">{item.club}</h5>

                            </div>
                        );
                    })}
                    <Lightbox open={openGallery} close={() => setOpenGallery(false)} slides={galleryThumbnails[galleryIndex].slides} />
                </div>
            </Container>
        </section>
    );
}