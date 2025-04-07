"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaPhone,
  FaGithub,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TimelinePage = () => {
  return (
    <div className="px-6 md:px-12 min-h-screen py-4 text-white font-sans bg-gradient-to-br from-[#010c24] via-[#103460] to-[#1b2d3a]">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Contact Me
      </motion.h2>

      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="border-gray-600 mb-4"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Contact Details</h3>
          <address className="space-y-4 text-gray-300 not-italic">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-400" />
              7/73, Thimmampalayam, Karamadai - 641104, Coimbatore, Tamilnadu,
              India
            </p>
            <p className="flex items-center">
              <FaGlobe className="mr-2 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/gharniyas-r-9bbb1a224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2 text-blue-400" />
              +91 8667582487
            </p>
            <p className="flex items-center">
              <MdEmail className="mr-2 text-blue-400" />
              <a
                href="mailto:gharniyasramesh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Gmail
              </a>
            </p>
            <p className="flex items-center">
              <FaGithub className="mr-2 text-blue-400" />
              <a
                href="https://github.com/gharniyas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </p>
          </address>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const subject = `Message from ${name}`;
              const body = `Hi Gharniyas,\n\n${message}\n\nFrom,\n${name}\nEmail: ${email}`;
              const mailtoLink = `mailto:gharniyasramesh@gmail.com?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;

              window.location.href = mailtoLink;
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                <span className="flex items-center gap-2">
                  <FaUser className="text-blue-400" />
                  Your Name:
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 rounded bg-[#0f172a] text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" />
                  Your Email:
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 rounded bg-[#0f172a] text-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                <span className="flex items-center gap-2">
                  <FaCommentDots className="text-blue-400" />
                  Your Message:
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-2 rounded bg-[#0f172a] text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
            >
              Ping Me!
            </button>
            <div id="form-error-message" className="text-red-500"></div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelinePage;
