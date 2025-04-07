"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaUserTie,
  FaFolderOpen,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    company: "AMPCOME Technology",
    location: "Bengaluru, India",
    period: "Mar 2024 – Sep 2024",
    role: "React Developer",
    project: "MyCENTA",
    description:
      "A platform for teachers focused on assessments, training & development, certification, and career growth.",
    responsibilities: [
      "Integrated REST and GraphQL APIs to meet platform requirements.",
      "Improved performance through infinite scrolling, pagination, and custom hooks.",
      "Developed a Next.js application with SEO enhancements and optimization.",
      "Built responsive web designs and user-friendly interfaces using reusable components by converting Figma and Photoshop designs into web pages.",
      "Optimized state management with Redux, Redux Toolkit, and Zustand.",
      "Debugged and resolved issues across the application to ensure stability and functionality.",
    ],
  },
  {
    company: "MAGNUS VISTA Labs",
    location: "Coimbatore, India",
    period: "Nov 2024 – Present",
    role: "Full Stack Developer",
    project: "ERP/CRM platform",
    description:
      "An ERP platform for buying and selling medical equipment in hospitals.",
    responsibilities: [
      "Designed and developed the user interface using React and Tailwind CSS for a seamless, responsive experience.",
      "Utilized Nano-store for lightweight and efficient state management across components.",
      "Implemented reusable components and maintained a modular codebase to enhance scalability and reduce development time.",
    ],
  },
];

const WorkExperiencePage = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 py-12 text-white font-sans">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Work Experience
      </motion.h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="border-gray-600 mb-10"
      />

      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="mb-12 bg-[#112240] p-6 rounded-xl shadow-md"
        >
          <div className="flex justify-between flex-wrap mb-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
              <FaBuilding className="text-emerald-400" />
              {exp.company}
            </h3>
            <span className="text-sm text-emerald-400 font-semibold italic tracking-wide">
              {exp.period}
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            {exp.location} —{" "}
            <span className="text-emerald-400 flex items-center gap-1">
              <FaUserTie className="text-emerald-400" />
              {exp.role}
            </span>
          </p>
          <p className="text-white/90 mb-3">
            <span className="flex items-center gap-2 font-semibold">
              <FaFolderOpen className="text-yellow-400" />
              Project: {exp.project}
            </span>
            <br />
            <span className="text-gray-300">{exp.description}</span>
          </p>
          <ul className="list-none space-y-2 mt-4">
            {exp.responsibilities.map((task, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-white/90 hover:text-emerald-400 transition-colors"
              >
                <FaCheckCircle className="mt-1 text-emerald-400 shrink-0" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperiencePage;
