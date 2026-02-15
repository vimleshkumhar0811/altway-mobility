// src/pages/BookDelivery.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Package,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BookDelivery() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupAddress: "",
    dropoffAddress: "",
    packageDescription: "",
    packageSize: "small", // small | medium | large
    preferredDateTime: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.pickupAddress.trim())
      newErrors.pickupAddress = "Pickup address is required";
    if (!formData.dropoffAddress.trim())
      newErrors.dropoffAddress = "Drop-off address is required";
    if (!formData.packageDescription.trim())
      newErrors.packageDescription = "Please describe the package";

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

    // Simulate API call (1.8–2.2 seconds delay)
    await new Promise((resolve) =>
      setTimeout(resolve, 1800 + Math.random() * 400),
    );

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form (optional - can be removed if you want to keep data visible)
    // setFormData({ ...initial empty state });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-5">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="max-w-lg w-full text-center p-10 md:p-14 bg-white rounded-3xl shadow-2xl border border-gray-100"
        >
          <CheckCircle className="w-24 h-24 text-emerald-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Booking Request Received!
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Thank you! We have received your delivery request.
            <br />
            Our team will contact you within 24 hours to confirm details and
            schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
            >
              Back to Home
            </NavLink>
            <NavLink
              to="/contact"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold transition"
            >
              Contact Support
            </NavLink>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 text-white py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            Book Your Delivery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Fast, reliable, zero-emission last-mile delivery powered by our
            electric bike fleet.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                Delivery Booking Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-emerald-600"} focus:ring-4 focus:ring-emerald-100/50 transition outline-none`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-emerald-600"} focus:ring-4 focus:ring-emerald-100/50 transition outline-none`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-emerald-600"} focus:ring-4 focus:ring-emerald-100/50 transition outline-none`}
                      placeholder="+371 200 12345"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Package Size
                    </label>
                    <select
                      name="packageSize"
                      value={formData.packageSize}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/50 transition outline-none bg-white"
                    >
                      <option value="small">Small (up to 10 kg)</option>
                      <option value="medium">Medium (10–30 kg)</option>
                      <option value="large">Large (30–60 kg)</option>
                      <option value="custom">Custom / Oversized</option>
                    </select>
                  </div>
                </div>

                {/* Addresses */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Pickup Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.pickupAddress ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-emerald-600"} focus:ring-4 focus:ring-emerald-100/50 transition outline-none`}
                      placeholder="Brīvības iela 123, Rīga, LV-1012"
                    />
                    {errors.pickupAddress && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.pickupAddress}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Drop-off Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="dropoffAddress"
                      value={formData.dropoffAddress}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.dropoffAddress ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-emerald-600"} focus:ring-4 focus:ring-emerald-100/50 transition outline-none`}
                      placeholder="Maskavas iela 45, Rīga, LV-1003"
                    />
                    {errors.dropoffAddress && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.dropoffAddress}
                      </p>
                    )}
                  </div>
                </div>

                {/* More fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      name="preferredDateTime"
                      value={formData.preferredDateTime}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/50 transition outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      Package Description{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="packageDescription"
                      value={formData.packageDescription}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.packageDescription ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-emerald-600"} focus:ring-4 focus:ring-emerald-100/50 transition outline-none`}
                      placeholder="e.g. 2 boxes of documents, 15 kg total"
                    />
                    {errors.packageDescription && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.packageDescription}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    Additional Notes / Instructions
                  </label>
                  <textarea
                    name="notes"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/50 transition outline-none resize-none"
                    placeholder="e.g. Call before arrival, fragile items, specific instructions..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold text-lg py-5 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 mt-8"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      Submit Booking Request
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
