"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

const education = [
  {
    degree: "BE (UG)",
    institution:
      "Sri Ramakrishna Engineering College, Coimbatore, Tamilnadu, India",
    period: "July 2019 - May 2023",
    score: "CGPA: 8.57",
  },
  {
    degree: "HSC",
    institution:
      "SRSI Matric Hr. Sec. School, Karamadai, Coimbatore, Tamilnadu, India",
    period: "June 2018 - March 2019",
    score: "Percentage: 69.3%",
  },
  {
    degree: "SSLC",
    institution:
      "SRSI Matric Hr. Sec. School, Karamadai, Coimbatore, Tamilnadu, India",
    period: "June 2016 - March 2017",
    score: "Percentage: 93%",
  },
];

const work = [
  {
    company: "AMPCOME Technology",
    location: "Bengaluru, India",
    period: "Mar 2024 – Sep 2024",
  },
  {
    company: "MAGNUS VISTA Labs",
    location: "Coimbatore, India",
    period: "Nov 2024 – Present",
  },
];

const TimelinePage = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 py-12 text-white font-sans bg-gradient-to-br from-[#010c24] via-[#103460] to-[#1b2d3a]">
      {/* Education Section */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Education Timeline
      </motion.h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="border-gray-600 mb-10"
      />

      <div className="space-y-8 mb-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#112240] rounded-xl p-6 md:p-8 shadow-md"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-2 flex items-center gap-2">
              <FaGraduationCap className="text-yellow-400" />
              {edu.degree}
            </h3>
            <p className="text-gray-300 mb-1 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-300" />
              {edu.institution}
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <FaCalendarAlt className="text-orange-300" />
              {edu.period} | {edu.score}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Work Section */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Work Timeline
      </motion.h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="border-gray-600 mb-10"
      />

      <div className="space-y-8">
        {work.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#112240] rounded-xl p-6 md:p-8 shadow-md"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-2 flex items-center gap-2">
              <FaBuilding className="text-pink-400" />
              {job.company}
            </h3>
            <p className="text-gray-300 mb-1 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-300" />
              {job.location}
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <FaCalendarAlt className="text-orange-300" />
              {job.period}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
