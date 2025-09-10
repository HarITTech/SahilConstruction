// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import demoWork from "../assets/workImg/demo_work.jpg"

// const designs = [
//   {
//     id: 1,
//     img: demoWork,
//     title: "Modern Villa",
//     tagline: "Luxury Living",
//     desc: "A contemporary villa design blending elegance and comfort.",
//   },
//   {
//     id: 2,
//     img: demoWork,
//     title: "Urban Residence",
//     tagline: "City Lifestyle",
//     desc: "Perfectly designed for urban living with smart space utilization.",
//   },
//   {
//     id: 3,
//     img: demoWork,
//     title: "Classic Bungalow",
//     tagline: "Timeless Charm",
//     desc: "A traditional design with a modern touch for family homes.",
//   },
//   {
//     id: 4,
//     img: demoWork,
//     title: "Eco House",
//     tagline: "Green & Smart",
//     desc: "Sustainable living with eco-friendly architecture.",
//   },
//   {
//     id: 5,
//     img: demoWork,
//     title: "Premium Villa",
//     tagline: "Luxury & Style",
//     desc: "High-end villa with unique architectural detailing.",
//   },
// ];

// const OurDesigns = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-center text-3xl md:text-4xl font-serif-display text-navy-blue mb-12">
//           Our Designs
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//           {designs.map((design, index) => (
//             <motion.div
//               key={design.id}
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.15 }}
//               className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg group"
//             >
//               {/* Image */}
//               <img
//                 src={design.img}
//                 alt={design.title}
//                 className="w-full h-64 object-cover rounded-xl"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 text-white">
//                 <h3 className="text-lg font-bold">{design.title}</h3>
//                 <p className="text-sm italic">{design.tagline}</p>
//                 <p className="text-xs mt-1">{design.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Explore Button */}
//         <div className="flex justify-center mt-12">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate("/work")}
//             className="px-6 py-3 bg-navy-blue text-white rounded-full font-medium shadow-md hover:bg-light-blue transition"
//           >
//             Explore More
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurDesigns;











import React from "react";
import { useNavigate } from "react-router-dom";
import design1 from "../assets/designsImg/design1.jpg";
import design2 from "../assets/designsImg/design2.jpg";
import design3 from "../assets/designsImg/design3.jpg";
import design4 from "../assets/designsImg/design4.jpg";
import design5 from "../assets/designsImg/design5.jpg";


const designs = [
  {
    id: 1,
    img: design1,
    title: "Modern Villa",
    tagline: "Luxury Living",
    desc: "A contemporary villa design blending elegance and comfort.",
  },
  {
    id: 2,
    img: design2,
    title: "Urban Residence",
    tagline: "City Lifestyle",
    desc: "Perfectly designed for urban living with smart space utilization.",
  },
  {
    id: 3,
    img: design3,
    title: "Classic Bungalow",
    tagline: "Timeless Charm",
    desc: "A traditional design with a modern touch for family homes.",
  },
  {
    id: 4,
    img: design4,
    title: "Eco House",
    tagline: "Green & Smart",
    desc: "Sustainable living with eco-friendly architecture.",
  },
  {
    id: 5,
    img: design5,
    title: "Premium Villa",
    tagline: "Luxury & Style",
    desc: "High-end villa with unique architectural detailing.",
  },
];

const Designs = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pb-16 pt-10 px-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-[60px] font-serif text-navy-blue mb-12">
          Our Designs
        </h2>

        {/* Custom Layout (2 - 1 - 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center items-center justify-items-center">
          {/* Row 1 */}
          <div className="flex flex-col gap-6 place-items-center">
            {designs.slice(0, 1).map((design) => (
              <Card key={design.id} design={design} />
            ))}
            {designs.slice(3, 4).map((design) => (
              <Card key={design.id} design={design} />
            ))}
          </div>

          {/* Center Image */}
          <div className="place-items-center z-40">
            {designs.slice(2, 3).map((design) => (
              <Card key={design.id} design={design} large />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-6 place-items-center">
            {designs.slice(1, 2).map((design) => (
              <Card key={design.id} design={design} />
            ))}
            {designs.slice(4, 5).map((design) => (
              <Card key={design.id} design={design} />
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/work")}
            className="px-6 py-3 bg-navy-blue text-white rounded-full font-medium shadow-md hover:bg-light-blue transition"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

const Card = ({ design, large }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg group transition transform hover:scale-105 ${
        large ? "w-[90%] lg:max-w-[450px] md:max-w-[250px]" : "w-[90%] lg:max-w-[450px]"
      }`}
    >
      {/* Image */}
      <img
        src={design.img}
        alt={design.title}
        className="w-full h-full md:h-full object-cover rounded-xl"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 text-white">
        <h3 className="text-base lg:text-lg font-bold">{design.title}</h3>
        <p className="text-xs lg:text-sm italic">{design.tagline}</p>
        <p className="text-[10px] lg:text-xs mt-1">{design.desc}</p>
      </div>
    </div>
  );
};

export default Designs;
