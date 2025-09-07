import React from "react";
import cons3D from "../assets/servicesImg/construction_3d.png"

const services = [
  {
    title: "Building Construction",
    desc: "Building construction involves assembling various materials.",
    img: cons3D,
  },
  {
    title: "Villa Construction",
    desc: "We create unique villas tailored to your needs.",
    img: cons3D,
  },
  {
    title: "Infrastructure Development",
    desc: "From roads to utilities, we build the foundation of economies.",
    img: cons3D,
  },
  {
    title: "Commercial Building",
    desc: "Expert commercial construction solutions.",
    img: cons3D,
  },
  {
    title: "Concrete Densification",
    desc: "Stronger, healthier, more productive flooring spaces.",
    img: cons3D,
  },
  {
    title: "Road Construction",
    desc: "Expert paving for residential and highway projects.",
    img: cons3D,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#043152] text-white z-40">
      {/* <div className=" hidden md:flex bg-white h-[272px]"></div> */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-[60px] font-serif text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white text-[#0f1724] p-6 rounded-lg shadow-lg">
              <img src={s.img} alt={s.title} />
              <div className="">
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
