import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample testimonials
const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Piyush Ninawe",
    image: "/client1.png",
  },
  {
    text: "We had a great experience, everything was delivered on time with quality!",
    name: "Rahul Sharma",
    image: "/client2.png",
  },
  {
    text: "Professional and reliable team. Highly recommended!",
    name: "Ananya Gupta",
    image: "/client3.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Testimonials from our Satisfied Clients
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-lg italic mb-6">“{t.text}”</p>
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                  <p className="font-bold">{t.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
