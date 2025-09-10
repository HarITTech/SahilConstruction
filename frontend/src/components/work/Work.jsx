import React, { useState } from "react";
import BlueprintsShowcase from "./BlueprintsShowcase";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

// --- Reusable Components ---
const SectionTitle = ({ children, dark, className }) => (
  <div className={`flex justify-center items-center gap-6 ${className}`}>
    <div
      className={`h-1 flex-grow ${
        dark
          ? "bg-gradient-to-r from-transparent to-white"
          : "bg-gradient-to-r from-transparent to-[#043152]"
      }`}
    ></div>
    <h2
      className={`text-4xl md:text-5xl font-bold font-serif text-center ${
        dark ? "text-white" : "text-[#043152]"
      }`}
    >
      {children}
    </h2>
    <div
      className={`h-1 flex-grow ${
        dark
          ? "bg-gradient-to-l from-transparent to-white"
          : "bg-gradient-to-l from-transparent to-[#043152]"
      }`}
    ></div>
  </div>
);

// --- Main App Component ---
export default function Work() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ Dummy Data for Current Projects
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      owner: "Piyush Ninawe",
      role: "Owner",
      details:
        "(House Details) Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      owner: "Rohit Sharma",
      role: "Engineer",
      details:
        "Luxury 3BHK House with modern architecture and eco-friendly materials.",
      description:
        "Located in the heart of the city with easy access to schools and hospitals.",
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      owner: "Anita Verma",
      role: "Client",
      details:
        "High-rise apartment complex designed with sustainability in mind.",
      description:
        "Featuring rooftop gardens, solar panels, and modern amenities.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const currentProject = projects[currentIndex];

  // ✅ Dummy Data for Sale Projects
  const saleProjects = [
    {
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      title: "Prime Location Villa",
      price: "22.5L",
    },
    {
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      title: "Modern Apartment Block",
      price: "35.0L",
    },
    {
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Office Tower",
      price: "50.0L",
    },
    {
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      title: "Suburban Family House",
      price: "18.0L",
    },
  ];
  const [saleIndex, setSaleIndex] = useState(0);
  const handleSalePrev = () =>
    setSaleIndex((prev) => (prev === 0 ? saleProjects.length - 2 : prev - 1));
  const handleSaleNext = () =>
    setSaleIndex((prev) => (prev >= saleProjects.length - 2 ? 0 : prev + 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* ✅ Current Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle className="mb-10">Current Projects</SectionTitle>
          <div className="relative max-w-6xl mx-auto">
            {/* Left nav */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
              <button
                aria-label="previous"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </button>
            </div>

            {/* Card */}
            <div className="mx-8 md:mx-0 bg-white rounded-xl shadow-[0_4px_4.6px_rgba(0,0,0,0.37)] p-6 md:p-12 transition-all duration-500">
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
                {/* Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                  <div className="relative w-full max-w-[700px]">
                    <img
                      src={currentProject.img}
                      alt="project"
                      className="w-full h-auto object-cover rounded-lg shadow"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="flex-1">
                  <h3 className="uppercase text-[#043152] font-bold text-[30px] leading-[45px]">
                    {currentProject.owner}
                  </h3>
                  <p className="text-[#043152] font-light text-[19px] leading-[28px] mb-4">
                    {currentProject.role}
                  </p>
                  <p className="mb-4 font-bold text-[25px] leading-[38px] text-red-600">
                    {currentProject.details}
                  </p>
                  <p className="text-gray-600 leading-relaxed max-w-[430px]">
                    {currentProject.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right nav */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
              <button
                aria-label="next"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Blueprints Section */}
      <BlueprintsShowcase />

      {/* ✅ Projects for Sale Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <SectionTitle className="mb-16">Our Recently Projects</SectionTitle>
          <div className="relative max-w-6xl mx-auto">
            {/* Left arrow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
              <button
                aria-label="previous"
                onClick={() =>
                  document
                    .getElementById("sale-scroll")
                    .scrollBy({ left: -200, behavior: "smooth" })
                }
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </button>
            </div>

            {/* Horizontal scroll container (hidden scrollbar) */}
            <div
              id="sale-scroll"
              className="flex gap-8 overflow-x-hidden snap-x snap-mandatory px-2"
            >
              {[
                {
                  img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                  title: "Prime Location Villa",
                  price: "22.5L",
                },
                {
                  img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
                  title: "Modern Apartment Block",
                  price: "35.0L",
                },
                {
                  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                  title: "Luxury Office Tower",
                  price: "50.0L",
                },
                {
                  img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
                  title: "Suburban Family House",
                  price: "18.0L",
                },
                {
                  img: "https://images.unsplash.com/photo-1600585154511-7c1b6a3ad5ef?auto=format&fit=crop&w=800&q=80",
                  title: "Eco-Friendly Apartments",
                  price: "40.0L",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="snap-center min-w-[200px] w-[80%] md:max-w-[420px] bg-[#EBEFF2] rounded-2xl p-6 shadow-md relative flex-shrink-0"
                >
                  {/* Image */}
                  <div className="rounded-lg overflow-hidden mb-4 h-48">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Text */}
                  <div className="text-[#043152]">
                    <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                    <p className="text-sm leading-relaxed mb-3 text-gray-600">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="text-xs text-[#043152] mb-3">
                      <div className="font-semibold">Area (sq.m)</div>
                      <div className="text-sm">From 99 to 999 Sqm</div>
                    </div>
                  </div>
                  {/* Price Tag */}
                  <div className="absolute right-6 bottom-6">
                    <div className="bg-[#043152] text-white rounded-md px-4 py-2 text-sm font-semibold shadow">
                      {p.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
              <button
                aria-label="next"
                onClick={() =>
                  document
                    .getElementById("sale-scroll")
                    .scrollBy({ left: 200, behavior: "smooth" })
                }
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            {/* All Properties button aligned to bottom-right */}
            {/* <div className="flex justify-end mt-8">
              <button className="bg-[#043152] text-white rounded-md px-5 py-2 text-sm font-semibold shadow">
                All Properties
              </button>
            </div> */}
          </div>
        </div>
      </section>

      
    </div>
  );
}
