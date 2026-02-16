// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => (
  <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-gradient-to-br from-teal-950 via-cyan-950 to-emerald-900 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1557426272-fc94f1a10a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="contact background"
        className="w-full h-full object-cover scale-110"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto md:mx-0"
      >
        Have questions? Want a quote? Ready to start green deliveries? We’re
        here to help!
      </motion.p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 w-full">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-24 md:h-40"
      >
        <path
          d="M0 120L1440 120V0C1440 0 1080 80 720 80C360 80 0 0 0 0V120Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Fake submission delay
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // Hide success message after 6 seconds
    setTimeout(() => setShowSuccess(false), 6000);
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero />

      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-2xl flex items-center gap-3"
                >
                  <CheckCircle className="w-8 h-8" />
                  <div>
                    <strong>Thank you!</strong> Your message has been sent
                    successfully. We’ll reply within 24 hours.
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-300"} focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition`}
                      placeholder="+371 123 45678"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.subject ? "border-red-500" : "border-gray-300"} focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition`}
                    placeholder="E.g. Business Inquiry, Delivery Quote"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.message ? "border-red-500" : "border-gray-300"} focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition resize-none`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-bold text-lg py-5 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 hover:shadow-2xl hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mt-1">info@altway.lv</p>
                    <p className="text-gray-600">support@altway.lv</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mt-1">+371 67 123 456</p>
                    <p className="text-sm text-gray-500">Mon–Fri: 8:00–18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 mt-1">Brīvības iela 123,</p>
                    <p className="text-gray-600">Rīga, LV-1012, Latvia</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              {/* <div className="mt-12 bg-emerald-900 text-white p-8 rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4">Need Fast Delivery?</h3>
                <NavLink
                  to="/book-delivery"
                  className="inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
                >
                  Book a Delivery Now
                  <ArrowRight className="w-5 h-5" />
                </NavLink>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
