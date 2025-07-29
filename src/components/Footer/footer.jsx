import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import footerbg from "../../assets/footer-bg-4.webp";

const Footer = () => {
  return (
    <footer
      className="relative text-[#3b2c0a] text-sm"
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for slight warm tint */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="pl-4 md:pl-8">
          <h2 className="text-2xl font-bold mb-3 text-[#402000]">CONTACT US</h2>
          <address className="not-italic leading-relaxed text-[#3b2c0a] opacity-90">
            No 35 A, Kowdi, 2nd Floor, 1st Main Road
            <br />
            Chiranjeevi Layout, Hebbal, Kempapura
            <br />
            Bengaluru, Karnataka - 560024
          </address>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-lg">
            {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-[#fff6dd] p-2 rounded-full hover:bg-yellow-200 text-[#402000] transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white/80 rounded-md p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 shadow-md">
          {[
            "Name*",
            "Phone*",
            "Email*",
            "Company Name*",
            "Company Website URL",
          ].map((placeholder, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={placeholder}
              className="p-2 rounded bg-white border border-yellow-300 text-[#3b2c0a] placeholder:text-gray-500 text-sm"
            />
          ))}

          <select className="p-2 rounded bg-white border border-yellow-300 text-[#3b2c0a] text-sm">
            <option>Choose Preferred Service</option>
            <option>SEO</option>
            <option>Web Design</option>
            <option>Marketing</option>
          </select>

          <div className="sm:col-span-2 mt-1">
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white font-semibold py-2 rounded hover:bg-yellow-500 transition text-sm shadow"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-center border-t border-yellow-300/40 py-3 px-4 text-xs text-[#3b2c0a] opacity-80">
        © 2025 DigiBoost. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
