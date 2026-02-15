// src/pages/Logistics.jsx
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

// ────────────────────────────────────────────────
// Hero (same style as other pages)
function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-gradient-to-br from-teal-950 via-cyan-950 to-emerald-900 text-white overflow-hidden">
      {/* Background subtle map / city pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="city delivery background"
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
            Last-Mile Logistics
            <br className="hidden sm:block" />
            <span className="text-emerald-400">Made Green & Fast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed"
          >
            Fast, reliable, eco-friendly last-mile delivery solutions powered by
            electric bikes, cargo e-bikes and smart routing across Latvia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <NavLink
              to="/book-delivery"
              className="bg-emerald-600 hover:bg-emerald-500 px-8 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
            >
              Book Delivery Now
              <ArrowRight className="w-5 h-5" />
            </NavLink>

            <NavLink
              to="/contact"
              className="border-2 border-white/60 hover:bg-white/10 px-8 py-5 rounded-full font-bold text-lg transition-all"
            >
              Get Quote
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
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
    transition: { staggerChildren: 0.13, delayChildren: 0.4 },
  },
};

const card = {
  hidden: { opacity: 0, y: 70, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 14, duration: 0.9 },
  },
};

const hoverEffect = {
  rest: { y: 0, scale: 1, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" },
  hover: {
    y: -12,
    scale: 1.03,
    boxShadow: "0 25px 60px -15px rgba(5, 150, 105, 0.4)",
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
};

// ────────────────────────────────────────────────
// Service cards data
const services = [
  {
    title: "Same-Day Delivery",
    description:
      "Order before 12 PM – delivered the same day in most cities across Latvia.",
    icon: Clock,
    badge: "Fastest Option",
    color: "emerald",
  },
  {
    title: "Eco Cargo E-Bikes",
    description:
      "Zero-emission deliveries using powerful cargo electric bicycles.",
    icon: Truck,
    badge: "0 g CO₂",
    color: "emerald",
  },
  {
    title: "Real-Time Tracking",
    description: "Live GPS tracking + photo proof of delivery for every order.",
    icon: MapPin,
    badge: "100% Transparency",
    color: "cyan",
  },
  {
    title: "Secure & Insured",
    description:
      "All parcels insured up to €500. Professional handling guaranteed.",
    icon: ShieldCheck,
    badge: "Insured",
    color: "emerald",
  },
  {
    title: "Bulk & Business",
    description:
      "Special rates and dedicated fleet for e-commerce and retail partners.",
    icon: Package,
    badge: "Volume Discounts",
    color: "emerald",
  },
  {
    title: "Last-Mile Optimization",
    description:
      "Smart routing algorithms reduce delivery time and environmental impact.",
    icon: Zap,
    badge: "AI Powered",
    color: "cyan",
  },
];

// ────────────────────────────────────────────────
export default function Logistics() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Main content */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="text-center mb-14 md:mb-20">
            <motion.h2
              variants={card}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5"
            >
              Our Last-Mile Services
            </motion.h2>
            <motion.div
              variants={card}
              className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-6"
            />
            <motion.p
              variants={card}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Sustainable, fast and reliable delivery solutions tailored for
              modern businesses and individuals.
            </motion.p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={card}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={hoverEffect}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100/70 flex flex-col h-full"
              >
                <div className="p-7 sm:p-8 lg:p-9 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mb-4" />
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-${service.color}-100 text-${service.color}-800`}
                    >
                      {service.badge}
                    </div>
                  </div>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>

                {/* <div className="px-7 sm:px-8 lg:px-9 pb-7 sm:pb-8 lg:pb-9">
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 md:py-32 bg-emerald-900 text-white text-center"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Ready to Make Your Deliveries Greener & Faster?
          </h3>

          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-10 md:mb-12 max-w-3xl mx-auto">
            Join hundreds of businesses already using Altway for sustainable
            last-mile logistics.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <NavLink
              to="/book-delivery"
              className="bg-white text-emerald-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all hover:shadow-3xl inline-flex items-center justify-center gap-3"
            >
              Start Shipping Now
              <ArrowRight className="w-5 h-5" />
            </NavLink>

            <NavLink
              to="/contact"
              className="border-2 border-white/70 hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center"
            >
              Request Corporate Quote
            </NavLink>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
