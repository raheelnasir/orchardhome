import React from 'react';

export function CarouselGallery() {
    return (
        <div>
            <h1 className='font-bold font-[cursive] my-5 text-6xl text-center'>
                Shots...
            </h1>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {/* Gallery Images */}
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 transition-all hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/mountainskyview.jpg" alt="Gallery Image 3" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/mountainview.jpg" alt="Gallery Image 5" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/view3.jpg" alt="Gallery Image 5" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/bedroom1.jpg" alt="Gallery Image 1" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/bedroom2.jpg" alt="Gallery Image 2" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/washroom.jpg" alt="Gallery Image 2" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/beauty.jpg" alt="Gallery Image 5" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/largeview.jpg" alt="Gallery Image 5" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/home.jpg" alt="Gallery Image 5" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/traditionalwoods.jpg" alt="Gallery Image 5" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/ducks.jpg" alt="Gallery Image 5" />
                </div>
                <div className="max-w-xs rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:w-[350px]">
                    <img className="w-full h-full object-cover" src="/gallery/flower.jpg" alt="Gallery Image 5" />
                </div>
            </div>
        </div>
    );
}
