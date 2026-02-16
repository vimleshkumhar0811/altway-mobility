// src/pages/EBikes.jsx
import { motion } from "framer-motion";
import { Bike, Zap, Leaf, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import bike2 from '/src/assets/bike2.jpg';
import bike3 from '/src/assets/bike3.jpg';
import bike1 from '/src/assets/bike1.jpg';

// ────────────────────────────────────────────────
// Reuseable Hero component (same style as home page)
function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-gradient-to-br from-teal-900 via-cyan-900 to-emerald-800 text-white overflow-hidden">
      {/* Faded map background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-023-35780-7/MediaObjects/41598_2023_35780_Fig1_HTML.png"
          alt="Latvia map background"
          className="w-full h-full object-cover scale-125"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Our E-Bike Fleet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl"
          >
            Premium electric bicycles built for performance, comfort and
            zero-emission mobility across Latvia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            {/* <NavLink
              to="/book-delivery"
              className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              Book a Test Ride
            </NavLink> */}
            <NavLink
              to="/contact"
              className="border-2 border-white/70 hover:bg-white hover:text-teal-900 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Contact Us
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* Curved bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-32 md:h-40"
        >
          <path
            d="M0 120L1440 120V0C1440 0 1080 80 720 80C360 80 0 0 0 0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────
// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 14, duration: 0.8 },
  },
};

const hoverLift = {
  rest: { y: 0, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.12)" },
  hover: {
    y: -14,
    boxShadow: "0 30px 60px -15px rgba(5, 150, 105, 0.35)",
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
};

// ────────────────────────────────────────────────
// Bike data
const bikes = [
  {
    name: "Urban Commuter Pro",
    price: "€56/day",
    desc: "Lightweight, long-range city e-bike with upright comfort and integrated lights.",
    img: bike2,
    badge: "Best for City",
    icon: Bike,
  },
  {
    name: "Cargo Beast",
    price: "€79/day",
    desc: "Heavy-duty cargo e-bike – ideal for deliveries, shopping or small business use.",
     img: bike3,
    badge: "Max Load 180 kg",
    icon: Zap,
  },
  {
    name: "Mountain Trail X",
    price: "€89/day",
    desc: "Full-suspension electric MTB – perfect for trails, forest roads and adventure.",
    img: bike1,
    badge: "Off-road Ready",
    icon: Leaf,
  },
];

// ────────────────────────────────────────────────
// Main component
export default function EBikes() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Main content – extra top padding to avoid fixed navbar overlap */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Small title + underline */}
          <div className="text-center mb-14 md:mb-20">
            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Choose Your Ride
            </motion.h2>
            <motion.div
              variants={item}
              className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"
            />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9 lg:gap-12">
            {bikes.map((bike) => (
              <motion.div
                key={bike.name}
                variants={item}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={hoverLift}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100/80"
              >
                {/* Image + badge */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={bike.img}
                    alt={bike.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                    {bike.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl lg:text-2.5xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {bike.name}
                    </h3>
                    <bike.icon className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-gray-600 mb-5 sm:mb-6 text-base lg:text-lg leading-relaxed">
                    {bike.desc}
                  </p>

                  {/* <div className="flex items-baseline mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-emerald-600">
                      {bike.price.split("/")[0]}
                    </span>
                    <span className="text-lg sm:text-xl text-gray-500 ml-2">
                      /day
                    </span>
                  </div> */}

                  <NavLink
              to="/book-delivery" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group-hover:scale-[1.02]">
                    Book Now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="py-20 md:py-28 bg-emerald-900 text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Ride Green?
          </h3>
          <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Contact us for availability, custom configurations or corporate
            fleet pricing.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-emerald-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all hover:shadow-3xl"
          >
            Get in Touch
            <ArrowRight className="w-6 h-6" />
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
}
