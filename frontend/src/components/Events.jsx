import { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Events = () => {
  const events = [
    {
      id: 1,
      image: "https://www.shutterstock.com/image-vector/home-illustration-simple-house-isolated-260nw-2540084969.jpg",
      badge: "OFFER OF THE WEEK",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      area: "From 99 to 999 Sq.mtr",
      price: "22.5L",
    },
    {
      id: 2,
      image: "https://media.gettyimages.com/id/1145840259/vector/home-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=gi&k=20&c=jSGcLEJXUtHvyY5m5E1KecDOJqULmqWQ3qzOfoeqn1Y=",
      badge: "DEAL FOR 09:59:00",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      area: "From 99 to 999 Sq.mtr",
      price: "22.5L",
    },
    {
      id: 3,
      image: "https://www.shutterstock.com/image-vector/home-illustration-simple-house-isolated-260nw-2540084969.jpg",
      badge: "FREE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      area: "From 99 to 999 Sq.mtr",
      price: "22.5L",
    },
    {
      id: 4,
      image: "https://media.gettyimages.com/id/1145840259/vector/home-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=gi&k=20&c=jSGcLEJXUtHvyY5m5E1KecDOJqULmqWQ3qzOfoeqn1Y=",
      badge: "DEAL FOR 09:59:00",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      area: "From 99 to 999 Sq.mtr",
      price: "22.5L",
    },
    {
      id: 5,
      image: "https://www.shutterstock.com/image-vector/home-illustration-simple-house-isolated-260nw-2540084969.jpg",
      badge: "FREE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      area: "From 99 to 999 Sq.mtr",
      price: "22.5L",
    },
    {
      id: 6,
      image: "https://media.gettyimages.com/id/1145840259/vector/home-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=gi&k=20&c=jSGcLEJXUtHvyY5m5E1KecDOJqULmqWQ3qzOfoeqn1Y=",
      badge: "DEAL FOR 09:59:00",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      area: "From 99 to 999 Sq.mtr",
      price: "22.5L",
    },
    {
      id: 7,
      image: "https://media.gettyimages.com/id/1145840259/vector/home-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=gi&k=20&c=jSGcLEJXUtHvyY5m5E1KecDOJqULmqWQ3qzOfoeqn1Y=",
      badge: "FREE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      area: "From 99 to 999 Sq.mtr",
      price: "22.5L",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Detect screen size and update cardsToShow
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(3); // Laptop/Desktop
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Get visible events based on current index
  const getVisibleEvents = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(events[(currentIndex + i) % events.length]);
    }
    return visible;
  };

  // Slide functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Auto Slide every 4s
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#08213e] pb-24 pt-12">
      <h2 className="text-3xl font-serif text-[50px] text-white text-center mb-12">
        Events Offers
      </h2>

      <div className="flex items-center justify-center space-x-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white text-navy-blue hover:bg-gray-200 transition"
        >
          <FiArrowLeft />
        </button>

        {/* Event Cards */}
        <div className={`grid gap-6`} style={{ gridTemplateColumns: `repeat(${cardsToShow}, 1fr)` }}>
          {getVisibleEvents().map((event) => (
            <div
              key={event.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden p-4 w-[250px] md:w-[300px]"
            >
              {/* Badge */}
              <div className="absolute top-4 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full rotate-12">
                {event.badge}
              </div>

              {/* Image */}
              <img
                src={event.image}
                alt="event"
                className="w-full h-40 object-cover rounded-md"
              />

              {/* Content */}
              <div className="mt-4 text-gray-700">
                <h3 className="font-bold text-sm">Address</h3>
                <p className="text-xs">{event.description}</p>
                <p className="mt-2 font-bold text-sm">Area pr.sq.mtr</p>
                <p className="text-xs">{event.area}</p>
              </div>

              {/* Price Button */}
              <div className="mt-3 flex justify-end">
                <span className="bg-[#08213e] text-white px-4 py-1 rounded-md text-sm">
                  {event.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white text-navy-blue hover:bg-gray-200 transition"
        >
          <FiArrowRight />
        </button>
      </div>

      {/* All Events Button */}
      {/* <div className="flex justify-end mt-6 px-8">
        <button className="px-4 py-2 bg-white rounded-md text-sm font-medium shadow hover:bg-gray-200">
          All Events
        </button>
      </div> */}
    </section>
  );
};

export default Events;
