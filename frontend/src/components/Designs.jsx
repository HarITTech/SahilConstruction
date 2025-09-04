import React from "react";

const designs = ["/design1.png", "/design2.png", "/design3.png", "/design4.png"];

const Designs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Designs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {designs.map((src, i) => (
            <img key={i} src={src} alt="Design" className="rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designs;
