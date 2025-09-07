import React from "react";

const services1 = [
  {
    id: 1,
    icon: "🏠",
    title: "Architecture Design",
    desc: "Creative and modern architecture design solutions tailored for your dream projects.",
  },
  {
    id: 2,
    icon: "🛠️",
    title: "Construction Management",
    desc: "Efficient planning, coordination, and control over construction projects.",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Interior Design",
    desc: "Transforming spaces into aesthetically pleasing and functional environments.",
  },
  {
    id: 4,
    icon: "🌳",
    title: "Landscape Design",
    desc: "Innovative landscape solutions that blend beauty with sustainability.",
  },
  {
    id: 5,
    icon: "📐",
    title: "Structural Engineering",
    desc: "Strong, safe, and reliable engineering designs for your projects.",
  },
  {
    id: 6,
    icon: "💡",
    title: "Consultation Services",
    desc: "Expert advice to bring your construction and design ideas to life.",
  },
];


const services2 = [
  {
    title: "Building Construction",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software.`,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Villa Construction",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Building construction",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Concrete Densification flooring",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif-display text-center text-[2.8rem] text-[#043152] tracking-wide">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide high-quality services in architecture, design, and
            construction to make your vision a reality.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services1.map((service) => (
            <div
              key={service.id}
              className="bg-[#043152] p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 group text-white"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto px-4 md:px-6 lg:px-8 py-10 bg-white justify-items-center">
        {/* dotted background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(4,49,82,0.10)_1px,transparent_1px)] [background-size:18px_18px] z-0"></div>

        {/* Section Title */}
        <h1 className="relative z-10 text-center text-[2.8rem] text-[#043152] font-serif tracking-wide mb-10">
          What We Do!
        </h1>

        {/* Service Cards */}
        {services2.map((service, index) => (
          <div
            key={index}
            className="relative md:w-[90%] z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 bg-[#EBEFF2] border border-[#0F70B8] rounded-[18px] shadow-[0_4px_20px_rgba(4,49,82,0.10)] p-5 md:p-8"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-w-[520px] h-[200px] md:h-[320px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-left">
              <h2 className="text-xl md:text-[1.45rem] font-bold text-[#111] mb-2">
                {service.title}
              </h2>
              <p className="text-base md:text-[1.07rem] text-[#232b35] leading-relaxed tracking-[0.1px]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;








