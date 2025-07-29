import React, { useState, useEffect } from "react";
import Rajavruksha from "../../assets/rajavruksha1.png";
import Rajavruksha2 from "../../assets/Rajavruksha-2.png";
import Rajavruksha3 from "../../assets/Rajavruksha-3.png";

import DefenceHabitat from "../../assets/defenceHabitat1.png";
import DefenceHabitat2 from "../../assets/DefenceHabitat-2.png";
import DefenceHabitat3 from "../../assets/DefenceHabitat-3.png";

import SriMatru from "../../assets/sriMatru1.png";
import Srimatru2 from "../../assets/srimatru-2.png";
import Srimatru3 from "../../assets/Srimatru-3.png";

import PlumeriaResort from "../../assets/plumeria1.png";
import Plumeria2 from "../../assets/plumeria-2.png";
import Plumeria3 from "../../assets/plumeria-3.png";

import bgwork from "../../assets/bg-work4.jpg";

const brands = [
  {
    name: "Rajavruksha Realtors",
    images: [Rajavruksha, Rajavruksha2, Rajavruksha3],
  },
  {
    name: "Defence Habitat Housing Society",
    images: [DefenceHabitat, DefenceHabitat2, DefenceHabitat3],
  },
  {
    name: "Sri Matru Developers",
    images: [SriMatru, Srimatru2, Srimatru3],
  },
  {
    name: "Plumeria Resort",
    images: [PlumeriaResort, Plumeria2, Plumeria3],
  },
];

const OurWorks = () => {
  const [activeBrand, setActiveBrand] = useState(brands[0]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % activeBrand.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeBrand]);

  const handleBrandClick = (brand) => {
    setActiveBrand(brand);
    setImageIndex(0);
  };

  return (
    <div
      className="relative grid md:grid-cols-2 min-h-screen w-full font-sans"
      style={{
        backgroundImage: `url(${bgwork})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-0" />

      {/* Left Panel */}
      <div className="z-10 text-white flex flex-col justify-center items-start p-6 sm:p-10 gap-6">
        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 w-full max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-2">
            Our Works
          </h1>
          <p className="text-sm text-white/80 mb-4">
            Explore the brands we’ve helped grow. Click to view more.
          </p>
          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => handleBrandClick(brand)}
                className={`text-sm sm:text-base font-medium px-4 py-2 rounded-full border transition-all duration-300
                  ${
                    activeBrand.name === brand.name
                      ? "bg-amber-500 text-white shadow"
                      : "bg-white text-[#7c4d00] border-amber-300 hover:bg-amber-100"
                  }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="z-10 flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white backdrop-blur-md rounded-2xl shadow-2xl p-5 sm:p-7 border border-white/30 transition-all duration-500">
          <div className="overflow-hidden rounded-xl shadow-lg shadow-amber-100 transition-all duration-500 ease-in-out">
            <img
              src={activeBrand.images[imageIndex]}
              alt={activeBrand.name}
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-700"
              style={{ transition: "opacity 0.5s ease-in-out" }}
            />
          </div>

          <div className="text-center mt-6">
            <hr className="border-amber-300 w-10 mx-auto mb-2" />
            <p className="text-lg font-semibold text-[#7c4d00] tracking-wide flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              {activeBrand.name}
            </p>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-4 gap-3">
            {activeBrand.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setImageIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                  idx === imageIndex
                    ? "bg-amber-500 scale-125 shadow-md"
                    : "bg-gray-300 hover:scale-110 hover:bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
