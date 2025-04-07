"use client";

import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-6  mt-2 text-white w-full "
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-6">
        <motion.div
          variants={itemVariants}
          className="flex justify-center w-full md:w-1/2"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={profile}
              alt="Gharniyas Ramesh"
              width={450}
              height={450}
              className="rounded-full object-cover border-4 border-white w-72 h-72 sm:w-96 sm:h-96"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full md:w-1/2 px-2">
          <motion.div className="mb-6" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Hi, I'm <span className="text-[#64ffda]">Gharniyas Ramesh</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4">
              Full-Stack Developer
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white">
              I have live project experience in front-end development, working
              extensively with modern frameworks and libraries to build
              responsive, user-friendly interfaces. Alongside that, I’ve gained
              hands-on experience in back-end development through self-driven
              projects, where I’ve built and deployed complete web applications
              from scratch. I love bringing ideas to life with clean, scalable
              code and enjoy learning new technologies to sharpen my skills
              every day.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 items-center mb-4 text-white"
          >
            <Link href="https://github.com/gharniyas" target="_blank">
              <FaGithub size={30} className="hover:text-gray-400" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gharniyas-r-9bbb1a224/"
              target="_blank"
            >
              <FaLinkedinIn size={30} className="hover:text-gray-400" />
            </Link>
            <a href="mailto:gharniyasramesh@gmail.com">
              <MdOutlineEmail size={30} className="hover:text-gray-400" />
            </a>
          </motion.div>

          {/* CV Button */}
          <motion.a
            variants={itemVariants}
            href="/GharniyasRamesh_CV.pdf"
            download="GharniyasRamesh_CV.pdf"
            className="inline-block mt-2 px-4 py-2 bg-white text-[#0a192f] font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
