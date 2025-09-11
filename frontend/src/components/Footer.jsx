import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; // ✅ Import toast
import haritLogo from "../assets/HarIT_Tech_Logo.png";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClasses = (path) =>
    currentPath === path
      ? "text-golden-yellow font-semibold"
      : "hover:text-golden-yellow transition";

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false); // ✅ Loader state

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loader

    try {
      const res = await fetch("https://sahilconstruction.onrender.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully ✅"); // ✅ Success toast
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong ❌"); // ✅ Error toast
    } finally {
      setLoading(false); // ✅ Stop loader
    }
  };

  return (
    <div className="w-full flex flex-col justify-end bg-white" id="contact">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Contact Section */}
      <div className="bg-[#f6f8fa] mx-auto mt-10 mb-[-80px] px-4 py-10 rounded-lg shadow-md w-[90%] max-w-[900px] text-center relative z-20">
        <h2 className="text-[2.1rem] font-normal mb-2">Need any help?..</h2>
        <h3 className="text-[1.7rem] font-normal mb-7">Contact us</h3>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
            disabled={loading}
            className="px-9 py-2 rounded-md bg-[#eee] text-black text-[1.1rem] cursor-pointer mt-2 hover:bg-[#dde6ef] flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="loader border-2 border-t-transparent border-black rounded-full w-5 h-5 animate-spin"></span>
            ) : (
              "Send"
            )}
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
              <li><Link to="/" className={linkClasses("/")}>Home</Link></li>
              <li><Link to="/work" className={linkClasses("/work")}>Work</Link></li>
              <li><Link to="/services" className={linkClasses("/services")}>Services</Link></li>
              <li><Link to="/about" className={linkClasses("/about")}>About us</Link></li>
              <li><a href="#contact">Contact</a></li>
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
              <li> <Link to="/services">Building Construction</Link></li>
              <li><Link to="/services">Infrastructure Development</Link></li>
              <li><Link to="/services">Villa Construction</Link></li>
              <li><Link to="/services">Commercial Building construction</Link></li>
              <li><Link to="/services">View all</Link></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[170px] mx-2 mb-6">
            <h4 className="text-[1.12rem] mb-3">Address</h4>
            <p className="text-[1rem] mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
            <button className="bg-[#eee] text-[#222] rounded-md px-7 py-2 text-[1rem] cursor-pointer mt-2">
              Google map
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#112d43] text-center text-[0.97rem]">
          <span>© 2025 Relume. All rights reserved.</span>
          <div className="bg-transparent text-[#ffffff] border-t border-[#23405f] text-center pt-4 mt-2">
            <p className="text-[14px] font-medium">
              Built with <span className="text-yellow-400">🧡</span> by
            </p>
            <a href="https://harittech.in" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center gap-2 mt-[2px]">
                <img
                  src={haritLogo}
                  alt="HarIT Tech Logo"
                  className="w-7 h-7 rounded-full"
                />
                <span className="text-[16px] font-semibold">HarIT Tech Solution</span>
              </div>
            </a>
            <p className="mt-[2px] text-[12px] text-[#1e293b] font-light">
              Digital transformation experts
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
