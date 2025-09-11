import React from "react";
// import cons3D from "../assets/servicesImg/construction_3d.png"

const services = [
  {
    title: "Building Construction",
    desc: "Bringing projects to life—from foundation to final structure. We deliver reliable building construction services tailored to your vision and timeline.",
    img: "https://blog.credlix.com/wp-content/uploads/2019/09/62-828x550.jpg",
  },
  {
    title: "Interior Design",
    desc: "Transforming interiors with precision and creativity. From structural work to finishing touches, our team creates spaces that feel like home.",
    img: "https://previews.123rf.com/images/shootdiem/shootdiem1909/shootdiem190900054/132075289-interior-modern-empty-house-beautiful-living-room-without-furniture.jpg",
  },
  {
    title: "Flat System Contruction",
    desc: "Streamlined, modern building solutions. Showcasing our flat system construction services with efficiency and clarity.",
    img: "https://thumbs.dreamstime.com/b/high-rise-buildings-under-construction-25292487.jpg",
  },
  {
    title: "3D Designing",
    desc: "Visualize your project before building begins. Our 3D design service brings your concepts to life with realistic renderings you can explore.",
    img: "https://www.dukebuildersinc.com/uploads/4/2/7/3/42732311/doll-house-full_orig.jpg",
  },
  {
    title: "Government Projects",
    desc: "Delivering strong, reliable infrastructure for public institutions. We construct government buildings that meet strict standards and serve communities for generations.",
    img: "https://st4.depositphotos.com/4147207/19816/i/450/depositphotos_198161714-stock-photo-kuala-lumpur-malaysia-july-2017.jpg",
  },
  {
    title: "Material with Construction",
    desc: "Supplying quality construction materials along with expert building services. We ensure every project is built with strength, durability, and trusted resources.",
    img: "https://cdn.prod.website-files.com/6682b09346626706d72ebbd5/688a389aca86cccfc6a884b7_construction%20materials.webp",
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
