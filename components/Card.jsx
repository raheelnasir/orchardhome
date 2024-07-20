import React from "react";

const Card = () => {
    return (
        <>
            <div className="h-full w-full">
                <div className="relative h-[250px] w-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('pexels-wendywei-1787142.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex items-center justify-center h-full">
                        <div className="text-white text-center text-[80px] p-4">
                            Research Opportunities
                        </div>
                    </div>
                </div>
                <div className="text-black text-center text-[40px] p-4 mt-2">
                    <h1>Welcome to Orchard Homestay in Jammu and Kashmir</h1>
                    <p className="text-[20px] mt-2">
                        Nestled in the picturesque landscapes of Jammu and Kashmir, our homestay offers a serene retreat for travelers seeking tranquility and comfort. Owned and managed by <b>Dr. Shiekh Marifatul Haq</b>, a distinguished scholar with over 150 published articles, our homestay combines the warmth of traditional hospitality with modern amenities. Dr. Haq's passion for research and his love for his homeland are reflected in every corner of this beautiful house, making it an ideal destination for both leisure and learning. Visitors will find our homestay particularly enriching, as it offers numerous research opportunities guided by Dr. Haq himself. Whether you're looking to unwind amidst nature or explore the rich cultural heritage of the region, our homestay provides the perfect setting for an unforgettable experience.
                    </p>
                </div>
                <div className="h-[350px] w-full mt-8 flex">

                    <div className="relative h-[300px] w-[400px] ml-4 hover:scale-105 cursor-pointer"
                        onClick={() => window.location.href = 'https://www.mdpi.com/1999-4907/13/8/1214'}

                    >
                        <div
                            // className="absolute inset-0 bg-cover bg-center"
                            className="absolute inset-0 bg-cover bg-center transition "
                            style={{ backgroundImage: "url('bg3.jpg')" }}
                        ></div>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative flex items-center justify-center h-full">
                            <div className="text-white text-center text-[40px] p-4"

                            >
                                Forest Ecology

                            </div>
                        </div>
                    </div>

                    <div className="relative h-[300px] w-[400px] ml-14 hover:scale-105 cursor-pointer"
                        onClick={() => window.location.href = 'https://www.sciencedirect.com/science/article/abs/pii/S0378112721010616'}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('bg2.jpg')" }}
                        ></div>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative flex items-center justify-center h-full">
                            <div className="text-white text-center text-[40px] p-4">
                                Sustainability
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[300px] w-[400px] ml-14 mr-4 hover:scale-105 cursor-pointer"
                        onClick={() => window.location.href = 'https://www.mdpi.com/2076-2615/10/12/2317'}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('bg1.jpg')" }}
                        ></div>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative flex items-center justify-center h-full">
                            <div className="text-white text-center text-[40px] p-4">
                                Wild Life
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[100px]">
                    <h1>If you want to see more articles by Dr. Shiekh Marifatul Haq, <p className="text-blue-700">click here.</p></h1>
                </div>
            </div >
        </>
    );
}

export default Card;
