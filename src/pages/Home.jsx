// src/pages/Home.jsx
import Hero from "../components/Hero";
import { Bike, Truck, Leaf } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white font-sans antialiased">
      {/* HERO – now in separate component */}
      <Hero />

      {/* WELCOME + FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Welcome to Altway Mobility
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            Modern electric mobility solutions and efficient last-mile logistics
            services across all of Latvia.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-emerald-50/70 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <Bike className="mx-auto h-20 w-20 text-emerald-600 mb-8" />
              <h3 className="text-3xl font-bold mb-4">
                Electric Bicycle Sales
              </h3>
              <p className="text-gray-600 text-lg">
                High-performance e-bikes for everyday and commercial use
              </p>
            </div>

            <div className="bg-emerald-50/70 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <Truck className="mx-auto h-20 w-20 text-emerald-600 mb-8" />
              <h3 className="text-3xl font-bold mb-4">
                Last-Mile Delivery Suite
              </h3>
              <p className="text-gray-600 text-lg">
                Fast, green and reliable cargo transport
              </p>
            </div>

            <div className="bg-emerald-50/70 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <Leaf className="mx-auto h-20 w-20 text-emerald-600 mb-8" />
              <h3 className="text-3xl font-bold mb-4">
                Eco-Friendly Transport
              </h3>
              <p className="text-gray-600 text-lg">
                Zero-emission mobility for a cleaner Latvia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
            <img
              src="https://thumbs.dreamstime.com/b/delivery-person-electric-bike-yellow-bag-delivering-food-city-rides-bicycle-urban-setting-399489574.jpg"
              alt="E-Mobility Bike delivery rider"
              className="w-full h-80 object-cover"
            />
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-3">E-Mobility Bike</h3>
              <p className="text-gray-500 mb-6">
                Perfect for urban commuting & light delivery
              </p>
              <div className="text-5xl font-extrabold text-emerald-600 mb-8">
                €56<span className="text-2xl font-normal">/day</span>
              </div>
              <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
            <img
              src="https://electrek.co/wp-content/uploads/sites/3/2023/08/ups-bike-truck-header.jpg?quality=82&strip=all"
              alt="Cargo / Heavy duty e-bike"
              className="w-full h-80 object-cover"
            />
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-3">Cargo / Mountain Bike</h3>
              <p className="text-gray-500 mb-6">
                Heavy-duty option for larger loads
              </p>
              <div className="text-5xl font-extrabold text-emerald-600 mb-8">
                €79<span className="text-2xl font-normal">/day</span>
              </div>
              <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* You can add a third card here if needed */}
        </div>
      </section>

      {/* COVERAGE MAP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Coverage Across Latvia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            From Riga to the farthest corners – reliable green deliveries
            everywhere.
          </p>
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://c8.alamy.com/comp/2WAAM1N/shape-of-a-topographic-osm-france-style-map-of-the-latvia-with-distance-scale-and-map-border-coordinates-isolated-on-white-2WAAM1N.jpg"
              alt="Detailed map of Latvia coverage"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-br from-emerald-800 to-teal-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready for Green Mobility?
          </h2>
          <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
            Join hundreds of satisfied clients using eco-friendly deliveries
            across Latvia.
          </p>
          <NavLink
            to="/book-delivery"
            className="inline-block bg-white text-emerald-900 px-12 py-6 rounded-full font-bold text-2xl shadow-2xl hover:bg-gray-100 transition-all hover:shadow-3xl"
          >
            Book a Delivery Today
          </NavLink>
        </div>
      </section>
    </div>
  );
}
