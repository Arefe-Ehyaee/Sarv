import React from "react";
import { MessageCircle, Users, MapPin, BookOpen, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MessageCircle,
    title: "AI Recovery Assistant",
    description: "Get personalized support and guidance 24/7 from our compassionate AI chatbot trained in addiction recovery.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Anonymous Community",
    description: "Connect with others on similar journeys in a safe, supportive, and completely anonymous environment.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: MapPin,
    title: "Treatment Finder",
    description: "Locate nearby treatment centers, support groups, and healthcare providers specialized in addiction recovery.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: BookOpen,
    title: "Recovery Resources",
    description: "Access evidence-based articles, videos, and tools to support your recovery journey at every step.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your conversations and data are completely private and anonymous. No personal information required.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Heart,
    title: "Crisis Support",
    description: "Immediate access to crisis intervention resources and professional helplines when you need them most.",
    color: "from-red-500 to-red-600"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Recovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides the tools, support, and resources 
            needed to help you on your path to recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="h-full group hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
