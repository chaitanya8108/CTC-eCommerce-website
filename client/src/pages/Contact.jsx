import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 overflow-hidden">

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-orange-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or just want to talk sweets — we are here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 opacity-10"></div>

            <h2 className="text-3xl font-bold text-amber-700 mb-6">Send a Message</h2>

            <form className="space-y-6 relative z-10">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 shadow-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 shadow-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 shadow-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                ></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-10"
          >
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-yellow-100 flex items-start gap-4 animate-float">
              <Phone className="w-10 h-10 text-amber-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600 font-medium mt-1">+91 9876543210</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl border border-amber-100 flex items-start gap-4 animate-float animation-delay-2000">
              <Mail className="w-10 h-10 text-amber-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                <p className="text-gray-600 font-medium mt-1">support@ctcsweets.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl border border-orange-100 flex items-start gap-4 animate-float animation-delay-4000">
              <MapPin className="w-10 h-10 text-amber-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Address</h3>
                <p className="text-gray-600 font-medium mt-1">Choudhary Tara Chand, Basohli, J&K</p>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-yellow-100 h-56 overflow-hidden">
              <iframe
                title="store location"
                className="w-full h-full rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6304481016673!2d77.6191704!3d13.059179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae194c97b5f71d%3A0xe781a8dc37e4dde0!2sCTC%20-%20Choudhary%20Tara%20Chand%20-%20Authentic%20North%20Indian%20Food!5e0!3m2!1sen!2sin!4v1763726367740!5m2!1sen!2sin" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

    </section>
  );
};

export default Contact;
