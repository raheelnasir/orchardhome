"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                ? "text-dark dark:text-white"
                : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-center w-full">
          <PricingBox
            packageName="Location"
            price=""
            duration=""
            subtitle="Villagam, Kupwara, Jammu and Kashmir, India"
          >
            <OfferList text="100 km from Srinagar International Airport" status="active" />
            <OfferList text="47 km from Baramulla Railway Station" status="active" />
            <OfferList text="Pick-up and drop-off services available (charges apply)" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Nearby Attractions"
            price=""
            duration=""
            subtitle=""
          >
            <OfferList text="Bangus Valley: 25 km from Orchard Homestay" status="active" />
            <OfferList text="Lolab Valley: 20 km from Orchard Homestay" status="active" />
            <OfferList text="Karen: 25 km from Orchard Homestay" status="active" />
            <OfferList text="Tangdar: 45 km from Orchard Homestay" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Exploration Opportunities"
            price=""
            duration=""
            subtitle=""
          >
            <OfferList text="Explore the serene landscapes of Lolab Valley" status="active" />
            <OfferList text="Trek through Manigah Meadows" status="active" />
            <OfferList text="Visit picturesque villages like Karen and Tangdar" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Meals"
            price=""
            duration=""
            subtitle=""
          >
            <OfferList text="Breakfast: Rs. 150 (includes traditional Kashmiri Nanki tea, Bread toast, Eggs, tea and coffee)" status="active" />
            <OfferList text="Lunch and Dinner: Rs. 500 (includes options like Dal, Rice, Roti, Dahi, vegetables, veg Biryani)" status="active" />
            <OfferList text="Special Kashmiri Dishes: Available on order at an additional cost (includes Kehwa, Nun Chai, Wazwan dishes like Rista, Yakhni, Rogan Josh, etc.)" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Facilities and Amenities"
            price=""
            duration=""
            subtitle=""
          >
            <OfferList text="Free WiFi" status="active" />
            <OfferList text="Parking Facilities" status="active" />
            <OfferList text="Delicious home-cooked meals featuring local cuisine" status="active" />
            <OfferList text="Outdoor seating area to enjoy picturesque views" status="active" />
            <OfferList text="Seasonal Fruits available" status="active" />
            <OfferList text="Literature on Forest Biodiversity and Local Traditional Knowledge" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Services"
            price=""
            duration=""
            subtitle=""
          >
            <OfferList text="Guided tours to nearby forests and mountain areas" status="active" />
            <OfferList text="Assistance with pick-up and drop-off service (paid)" status="active" />
            <OfferList text="Laundry service" status="active" />
            <OfferList text="Facilities for trekking (tents, sleeping bags, trekking sticks)" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Booking Information"
            price=""
            duration=""
            subtitle="For reservations, please contact us via phone or email."
          >
            <OfferList text="Advance payment of up to 30% is required upon booking" status="active" />
            <OfferList text="Cancellations are eligible for a 20% refund" status="active" />
            <OfferList text="Flexible check-in and check-out times available 24 hours" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
