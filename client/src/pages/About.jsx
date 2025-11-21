import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-orange-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Page Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mt-4">
            Celebrating over 75 years of tradition, taste, and trust.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl p-10 border border-amber-100 mb-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 opacity-10 rounded-3xl"></div>
          
          <h2 className="text-3xl font-bold text-amber-700 mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 1950 in the heart of Basohli, <b>Choudhary Tara Chand</b> began as a small family-run sweet shop with a passion for crafting
            authentic Indian sweets and snacks. Over the decades, our dedication to quality, purity, and traditional methods has earned the trust
            of thousands of families.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Today, we stand proud as a heritage brand that continues to blend tradition with taste — offering handcrafted sweets prepared fresh,
            every single day. What started as a humble shop is now a cherished part of community celebrations, festivals, and family gatherings.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            { icon: Star, title: "Premium Quality", text: "We use the purest ingredients to maintain unmatched taste." },
            { icon: Heart, title: "Made With Love", text: "Every sweet is handcrafted with care by expert artisans." },
            { icon: Award, title: "75+ Years Legacy", text: "A heritage trusted by generations for excellence." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-yellow-100 text-center animate-float"
              style={{ animationDelay: `${i * 1}s` }}
            >
              <item.icon className="w-12 h-12 mx-auto text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl p-10 border border-amber-100 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 opacity-10 rounded-3xl"></div>

          <h2 className="text-3xl font-bold text-amber-700 mb-6">Our Legacy</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                For over seven decades, our family has carried forward the vision of Sri Tara Chand Ji — a vision rooted in honesty, service, and taste.
                Each generation has added its own touch while preserving the original charm that made our sweets special.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Today, we continue to innovate while staying true to the recipes and methods passed down through time. We believe that sweets are
                more than food — they are emotions, memories, and celebrations.
              </p>
            </div>

            {/* Floating Founder Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-float border border-yellow-100 text-center">
              <Users className="w-14 h-14 mx-auto text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-700">A Family Tradition</h3>
              <p className="text-gray-600 font-medium mt-2">
                Passed down through generations with love and pride.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
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

export default About;
