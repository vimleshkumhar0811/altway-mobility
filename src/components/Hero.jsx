// src/components/Hero.jsx
import { NavLink } from "react-router-dom";
import homeBg from "/src/assets/homeBg.png";
import home from "/src/assets/home.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-900 via-cyan-900 to-emerald-800 text-white overflow-hidden pt-20 md:pt-0">
      {/* Faded background map (world / Latvia style) */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <img
          src={homeBg}
          alt="Latvia / Europe map faded background"
          className="w-full h-full object-cover scale-125"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            E-Mobility & Last-Mile
            <br />
            Logistics in Latvia
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-xl">
            Powering Eco-Friendly Transport & Efficient Deliveries
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <NavLink
              to="/e-bikes"
              className="bg-emerald-600 hover:bg-emerald-500 px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              Explore E-Bikes
            </NavLink>
            <NavLink
              to="/book-delivery"
              className="border-2 border-white/80 hover:bg-white hover:text-teal-900 px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Book a Delivery
            </NavLink>
          </div>
        </div>

        <div className="hidden md:block relative">
          <img
            src={home}
            alt="Delivery rider on electric bike with yellow backpack"
            className="rounded-3xl shadow-2xl object-cover h-[620px] w-full brightness-95"
          />
          <div className="absolute -bottom-10 -right-10 bg-white/90 text-teal-950 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
            <p className="font-bold text-2xl">Fast • Green • Reliable</p>
            <p className="text-sm mt-1 opacity-80">
              Last-mile delivery across Latvia
            </p>
          </div>
        </div>
      </div>

      {/* Curved bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-40"
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
