"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            category: "Orchard House",
            title: "Orchard House",
            image: "/gallery/home.jpg",
            description: "A charming orchard house with scenic views."
        },
        {
            id: "02",
            category: "Comfortable Bedroom",
            title: "Bedroom",
            image: "/gallery/bedroom1.png",
            description: "A cozy bedroom with a clean, comfortable design."
        },
        {
            id: "03",
            category: "Drawing Room",
            title: "Family Drawing Room",
            image: "/gallery/bedroom2.png",
            description: "A family drawing room with a stylish, comfortable design."
        },
        {
            id: "04",
            category: "Hygienic Bathroom",
            title: "Clean Family Bathroom",
            image: "/gallery/washroom.jpg",
            description: "A clean and well-designed family bathroom."
        }
    ]

    return (
        <div className="grid gap-8 divide-gray-300 md:min-h-[400px] lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <img src={item.image} width={380} height={100} alt="" className="w-full md:!h-[400px] " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.category}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 ">{item.category} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}