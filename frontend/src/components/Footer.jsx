import { useState } from "react";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can connect backend/EmailJS here)");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="w-full flex flex-col justify-end bg-white" id="contact">
      {/* Contact Section */}
      <div className="bg-[#f6f8fa] mx-auto mt-10 mb-[-80px] px-4 py-10 rounded-lg shadow-md w-[90%] max-w-[900px] text-center relative z-20">
        <h2 className="text-[2.1rem] font-normal mb-2">Need any help?..</h2>
        <h3 className="text-[1.7rem] font-normal mb-7">Contact us</h3>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-[98%] max-w-[600px] p-4 mb-4 border-none rounded-md text-[1.07rem] bg-white shadow-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Mail"
            value={form.email}
            onChange={handleChange}
            className="w-[98%] max-w-[600px] p-4 mb-4 border-none rounded-md text-[1.07rem] bg-white shadow-sm"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-[98%] max-w-[600px] p-4 mb-4 border-none rounded-md text-[1.07rem] bg-white shadow-sm"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-[98%] max-w-[600px] p-4 mb-4 border-none rounded-md text-[1.07rem] bg-white shadow-sm min-h-[90px] resize-y"
            required
          />
          <button
            type="submit"
            className="px-9 py-2 rounded-md bg-[#eee] text-black text-[1.1rem] cursor-pointer mt-2 hover:bg-[#dde6ef]"
          >
            Send
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-[#112d43] text-white pt-[150px] relative z-10 mt-[-35px]">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-around pb-9 max-w-[1200px] mx-auto">
          <div className="flex-1 min-w-[170px] mx-2 mb-6">
            <h4 className="text-[1.12rem] mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>Work</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[170px] mx-2 mb-6">
            <h4 className="text-[1.12rem] mb-3">Follow Us</h4>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[170px] mx-2 mb-6">
            <h4 className="text-[1.12rem] mb-3">Services</h4>
            <ul className="space-y-2">
              <li>Building Construction</li>
              <li>Infrastructure Development</li>
              <li>Villa Construction</li>
              <li>Commercial Building construction</li>
              <li>View all</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[170px] mx-2 mb-6">
            <h4 className="text-[1.12rem] mb-3">Address</h4>
            <p className="text-[1rem] mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
            <button className="bg-[#eee] text-[#222] rounded-md px-7 py-2 text-[1rem] cursor-pointer mt-2">
              Google map image
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#112d43] border-t border-[#23405f] py-4 text-center text-[0.97rem]">
          <span>© 2024 Relume. All rights reserved.</span>
          <div className="flex justify-center items-center space-x-5 mt-2">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms of Service
            </a>
            <a href="#" className="underline">
              Cookie Settings
            </a>
            <div className="ml-5">🔗</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0f1724] text-white py-10">
//       <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
//         {/* Quick Links */}
//         <div>
//           <h4 className="font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
//             <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
//             <li><a href="#work" className="hover:text-yellow-400">Work</a></li>
//             <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
//             <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
//           </ul>
//         </div>

//         {/* Follow Us */}
//         <div>
//           <h4 className="font-bold mb-4">Follow Us</h4>
//           <ul className="space-y-2">
//             <li>Facebook</li>
//             <li>Twitter</li>
//             <li>Instagram</li>
//             <li>LinkedIn</li>
//             <li>YouTube</li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="font-bold mb-4">Services</h4>
//           <ul className="space-y-2">
//             <li>Building Construction</li>
//             <li>Infrastructure Development</li>
//             <li>Villa Construction</li>
//             <li>Commercial Building</li>
//           </ul>
//         </div>

//         {/* Address */}
//         <div>
//           <h4 className="font-bold mb-4">Address</h4>
//           <p>Some address line, city, state</p>
//           <p>Pin Code - 440001</p>
//         </div>
//       </div>

//       <div className="mt-10 text-center text-sm text-gray-400">
//         © 2024 Sahil Construction. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
