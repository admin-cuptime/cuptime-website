"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from '@/assets/png/images';

const FeatureCard = () => {
    const features = [
      {
        icon: images.feature.tea.src,
        title: "Handcrafted Recipes",
        description:
          "Authentic flavors prepared the traditional way — no machines, no shortcuts.",
      },
      {
        icon: images.feature.leaf.src,
        title: "Natural, Pure Ingredients",
        description:
          "Only fresh, regional ingredients. No artificial additives or preservatives.",
      },
      {
        icon: images.feature.office.src,
        title: "Made for Modern Workspaces",
        description:
          "Bringing homemade-style drinks directly to",
        content: "corporate spaces, schools, hospitals, and events.",
      },
    ];
    return (
          <div className="flex items-center justify-center mt-8 mb-8 lg:h-[42vh] h-auto bg-white sm:px-8 md:px-16 overflow-hidden ">
            {/* Centered container */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: index * 0.1,
                  }}
                  className="bg-frost rounded-lg p-6 text-left"
                >
                  <div className="mb-4 items-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="w-8 h-8 mr-4 mb-4"
                    />
                    <h3 className="text-2xl text-zinc-900 font-bold">{feature.title}</h3>
                  </div>
                  <p className="lg:text-base text-sm">{feature.description}</p>
                  <p className="text-zinc-900 text-lg font-bold">{feature.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
  };
  export default FeatureCard;