import React from "react";

const services = [
  { title: "Building Construction", desc: "Building construction involves assembling various materials." },
  { title: "Villa Construction", desc: "We create unique villas tailored to your needs." },
  { title: "Infrastructure Development", desc: "From roads to utilities, we build the foundation of economies." },
  { title: "Commercial Building", desc: "Expert commercial construction solutions." },
  { title: "Concrete Densification", desc: "Stronger, healthier, more productive flooring spaces." },
  { title: "Road Construction", desc: "Expert paving for residential and highway projects." },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0f1724] text-white z-40">
        {/* <div className=" hidden md:flex bg-white h-[272px]"></div> */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white text-[#0f1724] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
