import React from "react";

const events = [
  { title: "Offer of the Week", desc: "Amazing deals from 50 to 90 SQFT", badge: "Offer" },
  { title: "Deal for Season", desc: "Exclusive seasonal offers", badge: "Deal" },
  { title: "Prize", desc: "Win exciting prizes", badge: "Prize" },
];

const Events = () => {
  return (
    <section className="bg-[#0f1724] text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <div key={i} className="bg-white text-[#0f1724] p-6 rounded-lg shadow-md relative">
              <span className="absolute top-2 left-2 bg-yellow-400 text-black px-3 py-1 text-sm rounded">
                {e.badge}
              </span>
              <h3 className="text-xl font-bold mb-3">{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
