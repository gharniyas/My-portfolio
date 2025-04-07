"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaCode, FaCheckCircle } from "react-icons/fa";

const coreProjects = [
  {
    title: "Project I: AUTOMATIC HEADLIGHTS CONTROL",
    description:
      "Automatically adjusts headlights at night to prevent accidents. Components: LDR sensor, potentiometer, driver circuit, dim dip control, LED, IC555.",
  },
  {
    title: "Project II: WIRE THEFT PREVENTION SYSTEM",
    description:
      "Prevents wire theft in agricultural fields. Components: 6V relay, transformer, buzzer, Arduino Nano, capacitor, resistor.",
  },
  {
    title: "Project III: SMART MIRROR",
    description:
      "Displays news, weather, and more while grooming. Components: Raspberry Pi 3 B, 3.5-inch display, IR frame, two-way glass mirror.",
  },
  {
    title: "Project IV: GENERATING ELECTRICITY USING WASTE MATERIALS",
    description:
      "Eco-friendly energy through incineration and heating panels. Components: 6V heating panel, 4V water pump motor with tank.",
  },
];

const softwareProjects = [
  "Shopping Platform",
  "Geo Data App",
  "Netflix Clone",
  "Todo List",
  "Analog Clock",
  "FD Calculator",
  "Restaurant Website",
  "EB Bill Calculator",
  "Clock",
  "Simple Calculator",
  "Converter",
  "Forms",
  "TicTacToe",
  "Rock, Paper, Scissor",
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full px-6 md:px-12 py-12 text-white font-sans">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Projects
      </motion.h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="border-gray-600 mb-10"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2"
        >
          <FaTools className="text-emerald-400" /> Core Projects
        </motion.h3>
        <hr className="mb-6 border-gray-700" />

        <div className="space-y-6">
          {coreProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-[#112240] p-6 rounded-xl shadow-md"
            >
              <h4 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" />
                {project.title}
              </h4>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Software Projects */}
      <div className="mt-12">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2"
        >
          <FaCode className="text-emerald-400" /> Software Projects
        </motion.h3>
        <hr className="mb-6 border-gray-700" />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90"
        >
          {softwareProjects.map((title, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
              {title}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
