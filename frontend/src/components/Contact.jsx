import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Message Sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email"
          className="w-full p-2 border rounded"
          value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message"
          className="w-full p-2 border rounded"
          value={form.message} onChange={handleChange} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};
export default Contact;






// import React from "react";

// const Contact = () => {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="container mx-auto px-6 max-w-xl text-center">
//         <h2 className="text-3xl font-bold mb-6">Need any help?.. Contact us</h2>
//         <form className="space-y-4">
//           <input type="text" placeholder="Name" className="w-full p-3 rounded border" />
//           <input type="email" placeholder="Mail" className="w-full p-3 rounded border" />
//           <input type="tel" placeholder="Phone" className="w-full p-3 rounded border" />
//           <textarea placeholder="Message" rows="4" className="w-full p-3 rounded border"></textarea>
//           <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
