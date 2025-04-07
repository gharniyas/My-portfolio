"use client";
import React from "react";
import Image from "next/image";
import Banner from "../../../public/Banner.png";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaHospitalAlt,
  FaTools,
  FaLanguage,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen text-white font-sans">
      <div className="relative w-full h-[33rem] min-h-screen overflow-hidden">
        <Image
          src={Banner}
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl flex items-center gap-3"
          >
            <FaUser className="text-blue-300" />
            About Me
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-2xl text-blue-200 mt-2 flex items-center gap-2"
          >
            <FaCode className="text-blue-300" />
            Full-Stack Developer
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-25 left-1/2 transform -translate-x-1/2 text-blue-300"
        >
          <FaChevronDown className="text-2xl animate-bounce" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto p-6 md:p-12"
      >
        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          Hello, I'm <span className="font-bold text-blue-400">Gharniyas</span>,
          a B.E graduate from Sri Ramakrishna Engineering College, Coimbatore
          (2023) in Electrical and Electronics Engineering.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          I'm a passionate web development enthusiast with a drive to build,
          learn, and grow. I thrive on solving problems and optimizing user
          experiences through clean, scalable code.
        </p>

        <div className="bg-[#112240] rounded-xl p-6 md:p-8 shadow-md mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <FaProjectDiagram className="text-emerald-400" />
            MyCenta Platform
          </h3>
          <p className="mb-4 text-gray-300">
            Contributed to the development of{" "}
            <span className="italic text-blue-200">MyCenta</span> — a platform
            focused on teachers’ professional growth, including assessments,
            training & development, certification, and career advancement.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              Integrated REST and GraphQL APIs to meet platform requirements.
            </li>
            <li>
              Implemented infinite scroll and pagination for enhanced
              performance.
            </li>
            <li>Optimized state management using Redux and Zustand.</li>
            <li>Built responsive UI with reusable, scalable components.</li>
            <li>
              Debugged and resolved application-level issues to ensure
              stability.
            </li>
            <li>Worked with Next.js to enhance SEO and routing structure.</li>
          </ul>
        </div>

        <div className="bg-[#112240] rounded-xl p-6 md:p-8 shadow-md mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <FaHospitalAlt className="text-emerald-400" />
            ERP/CRM Platform
          </h3>
          <p className="mb-4 text-gray-300">
            Developed an{" "}
            <span className="italic text-blue-200">ERP platform</span> for
            buying and selling medical equipment in hospitals, focusing on
            performance and scalability.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              Designed and developed the UI using{" "}
              <span className="text-blue-200">React</span> and{" "}
              <span className="text-blue-200">Tailwind CSS</span> for a
              responsive and user-friendly experience.
            </li>
            <li>
              Used <span className="text-blue-200">Nano-store</span> for
              lightweight and efficient state management across components.
            </li>
            <li>
              Built reusable components and maintained a modular codebase to
              ensure scalability and reduce development time.
            </li>
          </ul>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          I'm equally interested in{" "}
          <span className="italic">technology, media, and finance</span>, always
          on the lookout for innovation and meaningful collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2 flex items-center gap-2">
              <FaTools className="text-emerald-400" />
              Tech Stack
            </h3>
            <p className="text-gray-300">
              C, HTML, CSS, JavaScript, TypeScript, Python, React, Tailwind CSS,
              Vite, Next.js, Astro, Node.js, Redux, Zustand, Nano store,
              GraphQL, REST API, TanStack Query, Hasura, MySQL, PostgreSQL,
              AntD, Tail Admin, Headless UI, rsuite, Git & GitHub.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2 flex items-center gap-2">
              <FaLanguage className="text-emerald-400" />
              Language Proficiency
            </h3>
            <p className="text-gray-300">
              Fluent in Tamil, Kannada, and English — comfortable collaborating
              in diverse environments.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
