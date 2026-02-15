// src/pages/About.jsx
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe, ArrowRight, Leaf } from "lucide-react";
import { NavLink } from "react-router-dom";

// ────────────────────────────────────────────────
// Hero Section (same visual language as Home / E-Bikes / Logistics)
function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-gradient-to-br from-teal-950 via-cyan-950 to-emerald-900 text-white overflow-hidden">
      {/* Subtle background texture / map */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1523475496153-3d1396826c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="abstract green mobility background"
          className="w-full h-full object-cover scale-110 brightness-75"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 md:mb-8"
          >
            About Altway Mobility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed"
          >
            We are building a cleaner, smarter and more efficient way to move
            people and goods across Latvia — one electric ride at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <NavLink
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 px-8 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </NavLink>

            <NavLink
              to="/book-delivery"
              className="border-2 border-white/60 hover:bg-white/10 px-8 py-5 rounded-full font-bold text-lg transition-all"
            >
              Book a Delivery
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
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
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.9 },
  },
};

// ────────────────────────────────────────────────
// Values / Mission cards
const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Every delivery we make reduces CO₂ emissions compared to traditional transport.",
  },
  {
    icon: Target,
    title: "Customer Obsessed",
    description:
      "Fast, reliable service with real-time tracking and 24/7 support.",
  },
  {
    icon: Users,
    title: "Local & Human",
    description:
      "Latvian team, local knowledge — we know Riga, Daugavpils, Liepāja and every street in between.",
  },
  {
    icon: Globe,
    title: "Future-Ready",
    description:
      "Investing in electric mobility and smart logistics to shape tomorrow’s cities.",
  },
];

// ────────────────────────────────────────────────
export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Main content */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-32 items-center">
            <motion.div variants={item}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full mb-8" />

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                Altway Mobility SIA is a Latvian company founded with one clear
                mission: to make urban and regional transportation cleaner,
                faster and more efficient through electric mobility.
              </p>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                We combine high-quality electric bicycles, smart logistics
                software and passionate local riders to deliver packages,
                documents and small goods in the most sustainable way possible.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58caa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team delivering with e-bikes in city"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video"
              />
            </motion.div>
          </div>

          {/* Our Values */}
          <div className="mb-20 md:mb-32">
            <div className="text-center mb-14 md:mb-20">
              <motion.h2
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5"
              >
                Our Core Values
              </motion.h2>
              <motion.div
                variants={item}
                className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={item}
                  className="bg-white rounded-3xl p-7 sm:p-8 lg:p-9 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <value.icon className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-600 mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-emerald-900 text-white rounded-3xl overflow-hidden shadow-2xl py-16 md:py-24 px-5 sm:px-10 lg:px-16 text-center"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              Join the Green Mobility Movement
            </h3>

            <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-10 md:mb-12 max-w-4xl mx-auto">
              Whether you're a business looking for sustainable delivery, an
              individual needing fast service, or someone who wants to be part
              of the future — we're here for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <NavLink
                to="/book-delivery"
                className="bg-white text-emerald-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all hover:shadow-3xl inline-flex items-center justify-center gap-3"
              >
                Book a Delivery
                <ArrowRight className="w-5 h-5" />
              </NavLink>

              <NavLink
                to="/contact"
                className="border-2 border-white/70 hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center"
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
