'use client'
import React, { useState } from 'react';
import { sendEmail } from '@/constants/serverAction';
import PhotoGallery from './Carousel';
const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState({
        message: '',
        type: true
    })
    const [formData, setFormData] = useState({
        people: '',
        checkInDate: '',
        checkOutDate: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hi")
        const { people, checkInDate, checkOutDate, name, email, phone } = formData;
        const messageToSend = `
        I want to request to book the house for the following dates:
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Number of People: ${people}
            Check-in Date: ${checkInDate}
            Check-out Date: ${checkOutDate}
        `;
        try {
            setIsSending(true)
            const message = await sendEmail(name, email, messageToSend);
            console.log("hi", message)


            if (message.type === true) {
                setMessage({ message: "Booking request sent successfully", type: true })
            }
            else {
                setMessage({ message: "Failed to send booking", type: false })

            }
        } catch (error) {
            console.log(error)
            setMessage({ message: "Failed to send booking", type: false })
        }
        finally {
            setIsSending(false)
        }
    };

    return (
        <div>
            {formData.name}
            <div className='flex flex-row flex-wrap border-t mt-8 pt-5'>
                <div className="m-auto text-green-90 shadow-md rounded-lg p-6 ">
                    <h2 className="text-3xl font-bold mb-4">Policies</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Advance payment of up to 30% is required upon booking</li>
                        <li>Cancellations are eligible for a 20% refund</li>
                        <li>Flexible check-in and check-out times available 24 hours</li>
                    </ul>
                </div>
                <form className="contact-main m-auto p-8 mb-0 md:w-[500px] w-full mt-4 shadow-lg" onSubmit={handleSubmit}>
                    {['name', 'people', 'checkInDate', 'checkOutDate', 'email', 'phone'].map((field, index) => (
                        <div className="relative mb-6" key={index}>
                            <input
                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : field.includes('Date') ? 'date' : field === 'people' ? 'number' : 'text'}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="peer shadow appearance-none border w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline transition duration-200 ease-in-out bg-transparent text-lg"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor={field}
                                className="absolute text-lg  duration-200 transform -translate-y-6 scale-75 top-1 z-10 origin-[0] bg-white text-green-90   px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6 left-4"
                            >
                                {field === 'name' ? 'Name' : field === 'people' ? 'Number of People' : field === 'checkInDate' ? 'Check-in Date' : field === 'checkOutDate' ? 'Check-out Date' : field === 'email' ? 'Email' : 'Phone Number'}
                            </label>
                        </div>
                    ))}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-green-90 hover:bg-green-950 text-white font-bold py-2  w-full rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                            disabled={isSending}
                        >
                            {isSending ? "Sending..." : "Send Booking Request   "}
                        </button>
                    </div>
                    <p className={`text-base mt-4 ${message.type === false ? 'text-red-500' : "text-green-500"}`}>
                        {message.message}
                    </p>
                </form>
            </div>
            <PhotoGallery />
            <div className="max-w-7xl mx-auto p-6 pt-0">
                <h1 className="text-6xl font-extrabold text-center my-8" style={{ fontFamily: "cursive" }}>
                    Welcome to ORCHARD HOMESTAY!
                </h1>
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="bg-white text-green-90 hover:bg-green-90 hover:text-white   shadow-md rounded-lg p-6">
                        <h2 className="text-3xl   font-bold mb-4">Location</h2>
                        <p className="text-lg mb-2">Villagam, Kupwara, Jammu and Kashmir, India</p>
                        <ul className="list-disc pl-5 space-y-2  ">
                            <li>100 km from Srinagar International Airport</li>
                            <li>47 km from Baramulla Railway Station</li>
                            <li>Pick-up and drop-off services available (charges apply)</li>
                        </ul>
                    </div>
                    <div className="bg-white text-green-90 hover:bg-green-90 hover:text-white shadow-md rounded-lg p-6">
                        <h2 className="text-3xl font-bold mb-4">Nearby Attractions</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Bangus Valley: 25 km from Orchard Homestay</li>
                            <li>Lolab Valley: 20 km from Orchard Homestay</li>
                            <li>Karen: 25 km from Orchard Homestay</li>
                            <li>Tangdar: 45 km from Orchard Homestay</li>
                        </ul>
                    </div>
                    <div className="bg-white text-green-90 hover:bg-green-90 hover:text-white shadow-md rounded-lg p-6">
                        <h2 className="text-3xl font-bold mb-4">Exploration Opportunities</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Explore the serene landscapes of Lolab Valley</li>
                            <li>Trek through Manigah Meadows</li>
                            <li>Visit picturesque villages like Karen and Tangdar</li>
                        </ul>
                    </div>
                    <div className="bg-white text-green-90 hover:bg-green-90 hover:text-white shadow-md rounded-lg p-6 ">
                        <h2 className="text-3xl font-bold mb-4">Meals</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Breakfast: Rs. 150 (includes traditional Kashmiri Nanki tea, Bread toast, Eggs, tea and coffee)</li>
                            <li>Lunch and Dinner: Rs. 500 (includes options like Dal, Rice, Roti, Dahi, vegetables, veg Biryani)</li>
                            <li>Special Kashmiri Dishes: Available on order at an additional cost (includes Kehwa, Nun Chai, Wazwan dishes like Rista, Yakhni, Rogan Josh, etc.)</li>
                        </ul>
                    </div>
                    <div className="bg-white text-green-90 hover:bg-green-90 hover:text-white shadow-md rounded-lg p-6 ">
                        <h2 className="text-3xl font-bold mb-4">Facilities and Amenities</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Free WiFi</li>
                            <li>Parking Facilities</li>
                            <li>Delicious home-cooked meals featuring local cuisine</li>
                            <li>Outdoor seating area to enjoy picturesque views</li>
                            <li>Seasonal Fruits available</li>
                            <li>Literature on Forest Biodiversity and Local Traditional Knowledge</li>
                        </ul>
                    </div>
                    <div className="bg-white text-green-90  hover:text-white hover:bg-green-90  shadow-md rounded-lg p-6 ">
                        <h2 className="text-3xl font-bold mb-4">Services</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Guided tours to nearby forests and mountain areas</li>
                            <li>Assistance with pick-up and drop-off service (paid)</li>
                            <li>Laundry service</li>
                            <li>Facilities for trekking (tents, sleeping bags, trekking sticks)</li>
                        </ul>
                    </div>

                </div>
            </div>
            <section id='book' className=" p-8 flex flex-row items-center " style={{ padding: "10px 50px" }}>
                <div className='w-[50%] text-green-90 '>
                    <p className='text-5xl font-bold ' style={{ fontFamily: "" }}>
                        Discover the wonders of Kupwara District

                    </p>
                    <p className='font-light text-xl ' style={{ fontFamily: "" }}>
                        A gem nestled in the northern reaches of Jammu and Kashmir, renowned for its breathtaking natural beauty and cultural richness.
                        Immerse yourself in the tranquil charm of Orchard Home Stay, surrounded by Kashmiri Apple garden.

                    </p>

                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210253.93000267434!2d74.08446405000001!3d34.5733588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e0dc5c6ce664cf%3A0x4b6498fca3764e50!2s193224!5e0!3m2!1sen!2s!4v1720337075949!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </section>
            <h1 className='text-6xl text-green-90 font-extrabold  my-2 text-center' style={{ fontFamily: "cursive" }}>
                Book your spot now
            </h1>


        </div>
    );
};

export default Contact;
