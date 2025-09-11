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
    desc: "From laying the foundation to completing the final structure, we manage every stage of the building process with care and precision. Our team focuses on delivering projects that are strong, reliable, and built to last. Whether it’s residential, commercial, or mixed-use developments, we tailor our construction approach to match your vision, timeline, and budget. With attention to detail and commitment to quality, we turn ideas into buildings that stand the test of time.",
    img: "https://blog.credlix.com/wp-content/uploads/2019/09/62-828x550.jpg",
  },
  {
    title: "Interior Design",
    desc: "We believe interiors should reflect both function and personality. Our team combines precision and creativity to transform empty spaces into welcoming environments that inspire. From the structural layout to the smallest finishing detail, we design with purpose and style, ensuring every room feels balanced, comfortable, and uniquely yours. Whether it’s modern, classic, or customized themes, our interior solutions turn houses into homes and spaces into experiences.",
    img: "https://previews.123rf.com/images/shootdiem/shootdiem1909/shootdiem190900054/132075289-interior-modern-empty-house-beautiful-living-room-without-furniture.jpg",
  },
  {
    title: "Flat System Contruction",
    desc: "Our flat system construction services are designed for speed, efficiency, and modern living. By using streamlined techniques and reliable materials, we deliver durable structures that maximize space and functionality. Each project is carefully planned and executed to meet high safety standards while maintaining a clean, contemporary design. Whether it’s residential apartments, housing complexes, or commercial flats, we provide practical solutions that bring comfort and long-term value to every build.",
    img: "https://thumbs.dreamstime.com/b/high-rise-buildings-under-construction-25292487.jpg",
  },
  {
    title: "3D Designing",
    desc: "Before the first brick is laid, our 3D design service helps you see your project in stunning detail. We create lifelike renderings that allow you to explore layouts, finishes, and design choices with confidence. This process makes it easier to plan, adjust, and perfect every aspect before construction begins, saving both time and cost. With our advanced visualization tools, your ideas are transformed into realistic previews that bring clarity to your vision and ensure the final outcome matches your expectations.",
    img: "https://www.dukebuildersinc.com/uploads/4/2/7/3/42732311/doll-house-full_orig.jpg",
  },
  {
    title: "Government Projects",
    desc: "We specialize in building strong, reliable infrastructure for public institutions that stand as pillars of progress. From administrative offices to civic centers and other government facilities, our projects are designed to meet the highest standards of safety, durability, and compliance. We combine careful planning, advanced construction techniques, and a commitment to quality to deliver buildings that serve communities for generations. Each project reflects our dedication to creating spaces that support governance, public service, and long-term growth.",
    img: "https://st4.depositphotos.com/4147207/19816/i/450/depositphotos_198161714-stock-photo-kuala-lumpur-malaysia-july-2017.jpg",
  },
  {
    title: "Material with Construction",
    desc: "We provide more than just construction services—we also supply the quality materials needed to bring every project to life. From cement and steel to bricks and finishing products, we source and deliver only trusted materials that ensure durability and strength. By combining expert building services with reliable resources, we create a seamless construction process where everything you need is handled in one place. This integrated approach guarantees efficiency, consistency, and results that stand the test of time.",
    img: "https://cdn.prod.website-files.com/6682b09346626706d72ebbd5/688a389aca86cccfc6a884b7_construction%20materials.webp",
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








