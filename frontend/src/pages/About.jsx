import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "John drives the company vision with a decade of experience in construction management and business strategy.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    desc: "Jane manages our projects ensuring quality, timeliness, and client satisfaction across all builds.",
  },
  {
    name: "Michael Brown",
    role: "Lead Architect",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    desc: "Michael designs innovative and sustainable building solutions, focusing on functionality and aesthetics.",
  },
  {
    name: "Emily White",
    role: "Senior Engineer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
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
      <div className="w-[94%]  bg-[rgba(235,239,242,0.8)] border-2 border-[#043152] drop-shadow-lg backdrop-blur-[47px] p-6 md:p-10 lg:p-12 text-center text-[#043152] text-[1.15rem] leading-7 rounded-xl font-normal mb-14">
        <span className="text-[#C30000] font-bold text-lg block mb-4">
          (History of the company and little bit of compliments)
        </span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
        <br />
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type.
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
              className="bg-[rgba(235,239,242,0.67)] border-[1px] rounded-lg border-[#043152] shadow-[0_8px_32px_rgba(4,49,82,0.08)] backdrop-blur-[47px] max-w-[300px] w-full text-center p-5 sm:p-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full aspect-square object-cover mb-4"
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
