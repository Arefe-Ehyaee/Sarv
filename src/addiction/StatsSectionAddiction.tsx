import React from "react";
import { Users, Clock, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "People Supported",
    description: "Individuals who found help through our platform"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available", 
    description: "Round-the-clock assistance when you need it"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Anonymous",
    description: "Your privacy and confidentiality protected"
  },
  {
    icon: CheckCircle,
    number: "85%",
    label: "Success Rate",
    description: "Of users report positive outcomes"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Making a Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every day, we help people take the first step towards recovery. 
            Join thousands who have found hope and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-blue-600 mb-2">
                {stat.label}
              </div>
              <p className="text-gray-500 text-sm max-w-xs mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}