"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import AchievementsBanner from "../../../public/achievements.jpg";

const achievements = [
  "L&T TECHGIUM PROJECT & NASSCOM TECK second round",
  "Completed TVSTS virtual internship in Motors & Drives for EV",
  "Executive Member in EDC and EEETA clubs",
  "Joint secretary in REC club",
  "Secretary in REC club",
  "Engaged in Installation of Solar PV course in Progen Energy Solutions.",
  "Energy management and audit course in Econ Energy Concepts",
];

const AchievementsPage = () => {
  return (
    <div className="w-full text-white font-sans ">
      <div className="relative w-full h-[520px] min-h-screen overflow-hidden">
        <Image
          src={AchievementsBanner}
          alt="Achievements Banner"
          fill
          className="object-cover z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-end px-6 py-12">
          <div className="max-w-4xl text-center">
            {/* Title */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              Achievements
            </motion.h2>

            {/* List */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="space-y-4 text-left md:text-center"
            >
              {achievements.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-start justify-start md:justify-start gap-2 text-white/90"
                >
                  <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
