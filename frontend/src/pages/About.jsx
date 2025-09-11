import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnAV2195eKjdsIWb9qODnuYgxUnwJ0exESA&s",
    desc: "John drives the company vision with a decade of experience in construction management and business strategy.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFlCxAfL-D3y4JVh8rnRPUoQ5pMsbf6cjAg&s",
    desc: "Jane manages our projects ensuring quality, timeliness, and client satisfaction across all builds.",
  },
  {
    name: "Michael Brown",
    role: "Lead Architect",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnAV2195eKjdsIWb9qODnuYgxUnwJ0exESA&s",
    desc: "Michael designs innovative and sustainable building solutions, focusing on functionality and aesthetics.",
  },
  {
    name: "Emily White",
    role: "Senior Engineer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFlCxAfL-D3y4JVh8rnRPUoQ5pMsbf6cjAg&s",
    desc: "Emily ensures technical excellence and structural integrity on all our projects with meticulous engineering expertise.",
  },
];

const About = () => {
  return (
    <div className=" mx-auto bg-white flex flex-col items-center mt-16 pb-16">
      {/* About Title */}
      <h1 className="text-[2.7rem] md:text-[2.1rem] sm:text-[1.6rem] text-[#043152] text-center font-serif-display tracking-wide mb-10 mt-12">
        About Us
      </h1>

      {/* About Card */}
      <div className="w-[80%]  bg-[rgba(235,239,242,0.8)] border-2 border-[#043152] drop-shadow-lg backdrop-blur-[47px] p-6 md:p-10 lg:p-12 text-center text-[#043152] text-[1.15rem] leading-7 rounded-xl font-normal mb-14">
        <span className="text-[#C30000] font-bold text-lg block mb-4">
          (History of the company and little bit of compliments)
        </span>
        Sahil Construction has been shaping dreams into reality for the past 6 years, delivering quality, trust, and innovation in the construction industry. Since our inception, we have successfully completed a wide range of residential, commercial, and infrastructure projects, earning a reputation for excellence and reliability.
        <br />
        <br />
        Our commitment lies in creating strong foundations—both in the structures we build and the relationships we develop with our clients. With a team of skilled professionals, advanced techniques, and a customer-centric approach, we ensure every project we undertake meets the highest standards of safety, durability, and design.
        <br />
        <br />
        At Sahil Construction, we believe construction is not just about building structures, but about building lives, communities, and a better future. Whether it’s designing modern homes, developing sustainable spaces, or executing large-scale projects, we stand by our promise of timely delivery and uncompromised quality.
        <br />
      </div>

      {/* Why Choose Us Section (Add-On) */}
      <section className="w-full px-10 mb-16">
        <h2 className="text-[2.3rem] md:text-[1.9rem] sm:text-[1.6rem] text-[#043152] text-center font-serif tracking-wide mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Expertise & Experience",
              desc: "With decades of combined expertise, we ensure projects meet the highest standards of quality and safety.",
            },
            {
              title: "Client-Centered Approach",
              desc: "We listen, plan, and execute projects based on client needs, ensuring transparency and trust.",
            },
            {
              title: "Sustainability",
              desc: "Our designs focus on eco-friendly and sustainable solutions for long-term value.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#043152] border-2 border-[#043152] shadow-[0_8px_32px_rgba(4,49,82,0.08)] backdrop-blur-[47px] p-6 text-center rounded-lg"
            >
              <h3 className="text-[#ffffff] font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-[#043152] pt-10 pb-16">
        <h2 className="text-[2.6rem] md:text-[2.2rem] sm:text-[1.7rem] text-[#ffffff] text-center font-serif tracking-wide mb-10">
          Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-7 md:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[rgb(255,255,255)] border-[1px] rounded-xl border-[#043152] shadow-[0_8px_32px_rgba(4,49,82,0.08)] backdrop-blur-[47px] max-w-[300px] w-full text-center p-5 sm:p-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full aspect-square object-cover mb-4 rounded-lg"
              />
              <div className="text-[#043152] font-bold  text-lg mb-1">
                {member.name}
              </div>
              <div className="text-[#043152] font-medium text-sm mb-3 tracking-wide">
                {member.role}
              </div>
              <p className="text-[#043152] text-sm leading-6">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
