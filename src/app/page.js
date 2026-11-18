"use client";

import React from "react";
import Image from "next/image";
import profile from "../../public/profile.PNG";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaBriefcase,
  FaMapMarkerAlt,
  FaDownload,
  FaUser,
  FaCode,
  FaLightbulb,
  FaProjectDiagram,
  FaTrophy,
  FaAward,
  FaChalkboardTeacher,
  FaBoxes,
  FaMapMarkedAlt,
  FaChartBar,
  FaFilm,
  FaShoppingCart,
  FaUtensils,
  FaGraduationCap,
  FaCalendarAlt,
  FaBuilding,
  FaUserTie,
  FaFolderOpen,
  FaCheckCircle,
  FaPhone,
  FaMicrosoft,
  FaRobot,
  FaCubes,
  FaCloud,
} from "react-icons/fa";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDotnet,
  SiMysql,
  SiAstro,
  SiJavascript,
  SiC,
  SiRedux,
  SiShadcnui,
  SiHasura,
  SiReactquery,
} from "react-icons/si";
import { motion } from "framer-motion";
import GradientText from "./components/ui/GradientText";
import TypingText from "./components/ui/TypingText";
import Marquee from "./components/ui/Marquee";
import SpotlightCard from "./components/ui/SpotlightCard";
import AnimatedCounter from "./components/ui/AnimatedCounter";
import GlowBorder from "./components/ui/GlowBorder";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stats = [
  { value: "2", suffix: "+", label: "Years Experience" },
  { value: "3", suffix: "", label: "Companies" },
  { value: "15", suffix: "+", label: "Projects Completed" },
  { value: "20", suffix: "+", label: "Technologies" },
];

const techStackShowcase = [
  { name: "React", icon: <SiReact className="text-[#3d7dff]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-slate-100" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3d7dff]" /> },
  { name: "Astro", icon: <SiAstro className="text-[#D4FF24]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#3d7dff]" /> },
  { name: ".NET", icon: <SiDotnet className="text-[#1558C9]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#D4FF24]" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-[#3d7dff]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#1558C9]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#D4FF24]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#1558C9]" /> },
  { name: "Git", icon: <SiGit className="text-[#D4FF24]" /> },
];

const journeyItems = [
  {
    icon: <FaCode className="text-[#1558C9]" />,
    title: "Bachelor of Engineering",
    subtitle: "Electrical and Electronics",
    description:
      "Sri Ramakrishna Engineering College, Coimbatore (2019 – 2023), CGPA 8.67",
  },
  {
    icon: <FaLightbulb className="text-[#1558C9]" />,
    title: "AI-Powered Development",
    subtitle: "Self-Driven Learning",
    description:
      "Leveraging GitHub Copilot, Claude AI, ChatGPT and Antigravity AI to ship faster, cleaner code",
  },
  {
    icon: <FaProjectDiagram className="text-[#1558C9]" />,
    title: "Professional Growth",
    subtitle: "2+ Years, 3 Companies",
    description:
      "From React development to full-stack ERP, CRM and graph-visualization systems",
  },
];

const highlights = [
  { label: "Front-End Development", value: "React & Next.js" },
  { label: "Full-Stack Engineering", value: ".NET & REST APIs" },
  { label: "Databases", value: "PostgreSQL & MongoDB" },
  { label: "AI-Powered Solutions", value: "Prompt Engineering" },
];

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "SQL", icon: <SiPostgresql className="text-[#1558C9]" /> },
      { name: "PL/SQL", icon: <SiPostgresql className="text-[#1558C9]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#D4FF24]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3d7dff]" /> },
      { name: "C", icon: <SiC className="text-[#3d7dff]" /> },
      { name: ".NET", icon: <SiDotnet className="text-[#1558C9]" /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <SiReact className="text-[#3d7dff]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-slate-100" /> },
      { name: "Astro", icon: <SiAstro className="text-[#D4FF24]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#3d7dff]" /> },
      { name: "Nano Store", icon: <FaMapMarkedAlt className="text-[#D4FF24]" /> },
      { name: "Zustand", icon: <FaCubes className="text-[#1558C9]" /> },
      { name: "Redux", icon: <SiRedux className="text-[#3d7dff]" /> },
      { name: "Shadcn", icon: <SiShadcnui className="text-slate-100" /> },
      { name: "Mapbox", icon: <FaMapMarkedAlt className="text-[#1558C9]" /> },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#D4FF24]" /> },
      { name: "REST API", icon: <SiGraphql className="text-[#3d7dff]" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-[#3d7dff]" /> },
      { name: "TanStack Query", icon: <SiReactquery className="text-[#D4FF24]" /> },
      { name: "Hasura", icon: <SiHasura className="text-slate-100" /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-[#1558C9]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#D4FF24]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#1558C9]" /> },
    ],
  },
  {
    title: "Version Control & Cloud",
    items: [
      { name: "Git", icon: <SiGit className="text-[#D4FF24]" /> },
      { name: "GitHub", icon: <SiGithub className="text-slate-100" /> },
      { name: "Azure", icon: <FaCloud className="text-[#3d7dff]" /> },
      { name: "SharePoint", icon: <FaMicrosoft className="text-[#1558C9]" /> },
    ],
  },
  {
    title: "AI & Developer Tools",
    items: [
      { name: "GitHub Copilot", icon: <FaRobot className="text-slate-100" /> },
      { name: "Claude AI", icon: <FaRobot className="text-[#D4FF24]" /> },
      { name: "ChatGPT", icon: <FaRobot className="text-[#3d7dff]" /> },
      { name: "Prompt Engineering", icon: <FaRobot className="text-[#1558C9]" /> },
    ],
  },
];

const experiences = [
  {
    company: "Nithilam Tech",
    location: "Coimbatore, India",
    period: "Nov 2025 – Present",
    role: "Software Engineer",
    project: "Police System, Attorney General System & Resource Management System",
    stack: "Next.js, React, Tailwind CSS | .NET, REST APIs | PostgreSQL, MongoDB | Azure",
    description:
      "Building resource, workforce and project management solutions with interactive graph visualizations and secure, AI-assisted workflows.",
    responsibilities: [
      "Contributed to Resource & Project Management solutions for workforce allocation, department management, and project tracking.",
      "Designed and implemented interactive graph visualizations using Cytoscape.js, including node/edge relationships and real-time interactions.",
      "Integrated SharePoint-based document management and backend services to support secure collaboration and data management.",
      "Developed advanced graph interactions including zooming, panning, drag-and-drop functionality, and real-time graph updates.",
      "Improved application scalability and user experience through reusable architecture, performance optimizations, and AI-powered workflow automation.",
    ],
  },
  {
    company: "Magnus Vista Labs",
    location: "Coimbatore, India",
    period: "Nov 2024 – Nov 2025",
    role: "Software Engineer",
    project: "ERP/CRM Platform for Medical Equipment",
    stack: "React, TypeScript, Tailwind CSS, Nano Store | .NET, REST APIs | PostgreSQL | Azure",
    description:
      "An ERP system for managing medical equipment buying and selling in hospitals, spanning frontend architecture through database procedures.",
    responsibilities: [
      "Developed scalable frontend applications and reusable component architectures using React, TypeScript, and Tailwind CSS.",
      "Designed and optimized PostgreSQL procedures, functions, triggers, and complex queries supporting ERP and CRM workflows.",
      "Built Sales Management modules and integrated REST APIs, SharePoint solutions, and Azure deployment pipelines.",
      "Implemented AI-powered Speech-to-Text and workflow automation solutions using external AI APIs.",
    ],
  },
  {
    company: "AMPCOME Technology",
    location: "Bengaluru, India",
    period: "Mar 2024 – Aug 2024",
    role: "React Developer",
    project: "MyCENTA",
    stack: "Next.js, Tailwind CSS, Zustand, TanStack Query | Node.js, GraphQL, Hasura | PostgreSQL",
    description:
      "A platform for teachers focused on assessments, training & development, certification, and career growth.",
    responsibilities: [
      "Integrated REST and GraphQL APIs to support core platform functionalities.",
      "Implemented infinite scrolling, pagination, custom hooks, and state management solutions to improve application performance.",
      "Developed SEO-optimized and responsive Next.js applications from Figma designs.",
      "Debugged and resolved critical issues, ensuring platform stability and reliability.",
    ],
  },
];

const softwareProjects = [
  {
    title: "Resource & Project Management System",
    description:
      "Interactive Cytoscape.js graph visualizations for workforce allocation, department management, and project tracking.",
    icon: <FaProjectDiagram />,
    technologies: ["Next.js", "React", "Tailwind CSS", "Azure"],
  },
  {
    title: "MyCenta",
    description:
      "Teacher assessment, certification and career-growth platform with dashboards, analytics and reports.",
    icon: <FaChalkboardTeacher />,
    technologies: ["Next.js", "GraphQL", "Hasura", "PostgreSQL"],
  },
  {
    title: "ERP/CRM Platform",
    description:
      "Sales Management modules for lead tracking, quotations and customer workflows for a medical equipment platform.",
    icon: <FaBoxes />,
    technologies: [".NET", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "MERN Geo/JSON Platform",
    description: "Full-stack geojson platform with authentication, maps, and data management.",
    icon: <FaMapMarkedAlt />,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Data Analytics Dashboard",
    description: "Analytics dashboard with data visualization and reporting.",
    icon: <FaChartBar />,
    technologies: ["Python", "Flask", "PostgreSQL", "React"],
  },
  {
    title: "Netflix Clone",
    description: "Netflix UI clone built with modern web technologies and responsive design.",
    icon: <FaFilm />,
    technologies: ["React", "Tailwind", "TMDB API"],
  },
  {
    title: "E-Commerce Platform",
    description: "Complete e-commerce solution with product catalog, cart, and checkout.",
    icon: <FaShoppingCart />,
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Restaurant Website",
    description: "Modern restaurant website with menu, reservations, and online ordering.",
    icon: <FaUtensils />,
    technologies: ["React", "Tailwind", "Firebase"],
  },
];

const achievements = [
  {
    title: "L&T TECHGIUM PROJECT",
    subtitle: "NASSCOM TECK",
    description: "Reached second round in prestigious tech competition",
  },
  {
    title: "TVSTS Virtual Internship",
    subtitle: "Motors & Drives for EV",
    description: "Completed comprehensive training in electric vehicle technologies",
  },
  {
    title: "Executive Member",
    subtitle: "EDC and EEETA Clubs",
    description: "Led initiatives in entrepreneurship and engineering societies",
  },
  {
    title: "Joint Secretary",
    subtitle: "REC Club",
    description: "Organized technical events and workshops for students",
  },
  {
    title: "Solar PV Installation Course",
    subtitle: "Progen Energy Solutions",
    description: "Trained in solar panel installation and maintenance",
  },
  {
    title: "Energy Management Course",
    subtitle: "Econ Energy Concepts",
    description: "Studied energy efficiency and management practices",
  },
];

const education = [
  {
    degree: "BE (Electrical & Electronics Engineering)",
    institution: "Sri Ramakrishna Engineering College, Coimbatore",
    location: "Tamilnadu, India",
    period: "July 2019 - May 2023",
    score: "CGPA: 8.67",
  },
  {
    degree: "HSC",
    institution: "SRSI Matric Hr. Sec. School",
    location: "Coimbatore, Tamilnadu, India",
    period: "June 2018 - March 2019",
    score: "Percentage: 69.3%",
  },
  {
    degree: "SSLC",
    institution: "SRSI Matric Hr. Sec. School",
    location: "Coimbatore, Tamilnadu, India",
    period: "June 2016 - March 2017",
    score: "Percentage: 93%",
  },
];

const workTimeline = [
  {
    company: "AMPCOME Technology",
    location: "Bengaluru, India",
    period: "Mar 2024 – Aug 2024",
    role: "React Developer",
  },
  {
    company: "Magnus Vista Labs",
    location: "Coimbatore, India",
    period: "Nov 2024 – Nov 2025",
    role: "Software Engineer",
  },
  {
    company: "Nithilam Tech",
    location: "Coimbatore, India",
    period: "Nov 2025 – Present",
    role: "Software Engineer",
  },
];

const contactMethods = [
  {
    icon: <MdEmail className="text-3xl text-[#1558C9]" />,
    label: "Email",
    value: "gharniyasramesh@gmail.com",
    link: "mailto:gharniyasramesh@gmail.com",
  },
  {
    icon: <FaPhone className="text-3xl text-[#1558C9]" />,
    label: "Phone",
    value: "+91 8667582487",
    link: "tel:+918667582487",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-[#1558C9]" />,
    label: "Location",
    value: "Coimbatore, Tamil Nadu",
    link: "#",
  },
];

const socialLinks = [
  { name: "GitHub", icon: <FaGithub className="text-2xl" />, url: "https://github.com/gharniyas" },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="text-2xl" />,
    url: "https://www.linkedin.com/in/gharniyas-r-9bbb1a224/",
  },
  { name: "Email", icon: <MdEmail className="text-2xl" />, url: "mailto:gharniyasramesh@gmail.com" },
];

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-12"
  >
    {eyebrow && (
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#D4FF24]">
        {eyebrow}
      </p>
    )}
    <h2 className="mb-4 text-4xl font-extrabold text-slate-100 md:text-5xl">{title}</h2>
    <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#1558C9] to-[#D4FF24]" />
    {subtitle && <p className="max-w-2xl text-lg text-slate-400">{subtitle}</p>}
  </motion.div>
);

const Home = () => {
  return (
    <div className="w-full font-sans text-slate-100">
      {/* ===================== HOME / HERO ===================== */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 py-12 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#D4FF24]/30 bg-[#D4FF24]/10 px-4 py-1.5"
              >
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#D4FF24]"></span>
                <span className="text-sm font-semibold text-[#D4FF24]">
                  Open to Full Stack Roles
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="mb-4 text-5xl font-bold leading-tight text-slate-100 md:text-6xl">
                  Hi, I&apos;m <br />
                  <GradientText as="span">Gharniyas Ramesh</GradientText>
                </h1>
                <h2 className="text-2xl font-semibold text-slate-400 md:text-3xl">
                  <TypingText
                    words={["Software Engineer", "Full-Stack Developer", "React & Next.js Developer"]}
                  />
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-lg text-lg leading-relaxed text-slate-400"
              >
                Dedicated Software Engineer with 2+ years of experience in Front-End and
                Full-Stack Development. Proficient in React, Next.js, TypeScript, .NET,
                PostgreSQL, and MongoDB, with expertise in API integrations and AI-powered
                solutions for building scalable, high-performance applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-6 sm:grid-cols-4"
              >
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-4xl font-bold text-[#3d7dff]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a href="#projects">
                  <button className="group flex items-center gap-2 rounded-lg bg-[#D4FF24] px-8 py-3 font-bold text-[#030407] shadow-lg shadow-[#D4FF24]/20 transition-all duration-300 hover:bg-[#c2ec16]">
                    View My Work <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </a>
                <a href="#contact">
                  <button className="flex items-center gap-2 rounded-lg border-2 border-[#1558C9] px-8 py-3 font-bold text-slate-100 transition-all duration-300 hover:bg-[#1558C9]/10">
                    <MdOutlineEmail /> Contact Me
                  </button>
                </a>
                <div className="flex items-center gap-3 pl-1">
                  <a
                    href="https://github.com/gharniyas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#1b2333] p-3 text-slate-300 transition-colors duration-300 hover:border-[#1558C9] hover:text-[#3d7dff]"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gharniyas-r-9bbb1a224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#1b2333] p-3 text-slate-300 transition-colors duration-300 hover:border-[#1558C9] hover:text-[#3d7dff]"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative pb-24"
            >
              <div className="animate-float">
                <GlowBorder className="shadow-xl" contentClassName="bg-[#0a0e16] p-1">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#0a0e16]">
                    <Image
                      src={profile}
                      alt="Gharniyas Ramesh"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </GlowBorder>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-4 right-4 rounded-xl border border-[#1b2333] bg-[#0a0e16]/95 p-6 shadow-2xl backdrop-blur"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaBriefcase className="text-xl text-[#1558C9]" />
                    <div>
                      <p className="text-xs text-slate-500">Current Role</p>
                      <p className="font-bold text-slate-100">Software Engineer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏢</span>
                    <div>
                      <p className="text-xs text-slate-500">Company</p>
                      <p className="font-bold text-slate-100">Nithilam Tech</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-xl text-[#1558C9]" />
                    <div>
                      <p className="text-xs text-slate-500">Location</p>
                      <p className="font-bold text-slate-100">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 border-t border-[#1b2333] pt-8"
          >
            <p className="mb-6 text-sm font-semibold text-slate-500">Tech Stack</p>
            <Marquee>
              {techStackShowcase.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#1b2333] bg-[#0a0e16] px-4 py-2 shadow-sm"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-semibold text-slate-300">{tech.name}</span>
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Get to know me"
            title={
              <>
                About <GradientText>Me</GradientText>
              </>
            }
            subtitle={
              <>
                I&apos;m <span className="font-semibold text-[#3d7dff]">Gharniyas Ramesh</span>, a
                dedicated Software Engineer with 2+ years of experience in Front-End and
                Full-Stack Development — proficient in React, Next.js, TypeScript, .NET,
                PostgreSQL, and MongoDB.
              </>
            }
          />

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {journeyItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <SpotlightCard className="h-full p-6 shadow-sm hover:shadow-lg">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-1 text-xl font-semibold text-slate-100">{item.title}</h3>
                  <p className="mb-3 text-sm font-semibold text-[#3d7dff]">{item.subtitle}</p>
                  <p className="text-slate-400">{item.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center justify-between rounded-lg border border-[#1b2333] bg-[#0a0e16] p-6 shadow-sm transition-all duration-300 hover:border-[#1558C9]/50 hover:shadow-md"
              >
                <span className="text-lg font-semibold text-slate-100">{item.label}</span>
                <span className="text-lg font-bold text-[#D4FF24]">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section id="skills" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What I work with"
            title={
              <>
                My <GradientText>Skills</GradientText>
              </>
            }
            subtitle="A comprehensive overview of the technologies and tools I work with"
          />

          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 last:mb-0"
            >
              <h3 className="mb-6 text-xl font-bold text-[#3d7dff] md:text-2xl">{group.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {group.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <SpotlightCard className="h-full p-5 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg">
                      <div className="mb-2 flex justify-center text-3xl">{skill.icon}</div>
                      <h4 className="text-sm font-semibold text-slate-200">{skill.name}</h4>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section id="experience" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Where I've worked"
            title={
              <>
                Work <GradientText>Experience</GradientText>
              </>
            }
            subtitle="My professional journey in full-stack development"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[#1b2333] bg-[#0a0e16] p-8 shadow-sm transition-all duration-300 hover:border-[#1558C9]/50 hover:shadow-lg"
              >
                <div className="mb-4 flex flex-wrap justify-between gap-4">
                  <div>
                    <h3 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-slate-100 md:text-3xl">
                      <FaBuilding className="text-[#1558C9]" />
                      {exp.company}
                    </h3>
                    <p className="flex items-center gap-2 text-sm text-slate-500">
                      <FaMapMarkerAlt className="text-[#D4FF24]" />
                      {exp.location}
                    </p>
                  </div>
                  <span className="h-fit rounded-lg bg-[#1558C9]/15 px-4 py-2 text-sm font-semibold text-[#3d7dff]">
                    {exp.period}
                  </span>
                </div>

                <div className="mb-4 border-b border-[#1b2333] pb-4">
                  <p className="mb-2 flex items-center gap-2 font-semibold text-[#3d7dff]">
                    <FaUserTie className="text-[#3d7dff]" />
                    {exp.role}
                  </p>
                  <p className="mb-2 flex items-center gap-2 font-semibold text-slate-100">
                    <FaFolderOpen className="text-[#D4FF24]" />
                    Project: <span className="font-normal text-slate-400">{exp.project}</span>
                  </p>
                  <p className="mb-2 text-sm text-slate-500">{exp.stack}</p>
                  <p className="text-slate-400">{exp.description}</p>
                </div>

                <div>
                  <p className="mb-4 text-lg font-semibold text-slate-100">Key Responsibilities:</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400">
                        <FaCheckCircle className="mt-1 flex-shrink-0 text-[#1558C9]" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { label: "Companies", value: "3", suffix: "" },
              { label: "Experience", value: "2", suffix: "+" },
              { label: "Projects", value: "5", suffix: "+" },
              { label: "Technologies", value: "20", suffix: "+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#1b2333] bg-[#0a0e16] p-6 text-center shadow-sm"
              >
                <p className="mb-2 text-3xl font-bold text-[#D4FF24]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section id="projects" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Things I've built"
            title={
              <>
                My <GradientText>Projects</GradientText>
              </>
            }
            subtitle="A showcase of software projects I've worked on"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {softwareProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <SpotlightCard className="flex h-full flex-col overflow-hidden shadow-sm hover:shadow-xl">
                  <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#1558C9]/15 to-[#D4FF24]/10">
                    <span className="text-5xl text-[#3d7dff] transition-transform duration-300 group-hover:scale-110">
                      {project.icon}
                    </span>
                  </div>
                  <div className="flex flex-grow flex-col p-5">
                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-slate-100">
                      {project.title}
                    </h3>
                    <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded bg-[#1558C9]/15 px-2 py-1 text-xs font-semibold text-[#3d7dff]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ACHIEVEMENTS ===================== */}
      <section id="achievements" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Milestones"
            title={
              <span className="flex items-center gap-3">
                <FaTrophy className="text-[#D4FF24]" />
                <GradientText>Achievements</GradientText>
              </span>
            }
            subtitle="Milestones and accomplishments in my academic and professional journey"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <SpotlightCard className="h-full p-6 shadow-sm hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <FaAward className="mt-1 flex-shrink-0 text-3xl text-[#D4FF24]" />
                    <div className="flex-grow">
                      <h3 className="mb-1 text-xl font-semibold text-slate-100">{achievement.title}</h3>
                      <p className="mb-2 text-sm font-semibold text-[#3d7dff]">{achievement.subtitle}</p>
                      <p className="text-slate-400">{achievement.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TIMELINE ===================== */}
      <section id="timeline" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How I got here"
            title={
              <>
                My <GradientText>Timeline</GradientText>
              </>
            }
            subtitle="Key events in my education and career journey"
          />

          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-slate-100">
                <FaGraduationCap className="text-[#1558C9]" />
                Education
              </h3>
              <div className="relative space-y-6 border-l-2 border-[#1b2333] pl-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative rounded-xl border border-[#1b2333] bg-[#0a0e16] p-6 shadow-sm transition-all duration-300 hover:border-[#1558C9]/50"
                  >
                    <span className="absolute -left-[2.55rem] top-7 h-3 w-3 rounded-full bg-[#1558C9] ring-4 ring-[#1558C9]/20" />
                    <h4 className="mb-3 text-lg font-semibold text-[#3d7dff]">{edu.degree}</h4>
                    <p className="mb-2 font-semibold text-slate-100">{edu.institution}</p>
                    <div className="space-y-2 text-sm text-slate-400">
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#D4FF24]" />
                        {edu.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#D4FF24]" />
                        {edu.period}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaGraduationCap className="text-[#D4FF24]" />
                        {edu.score}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-slate-100">
                <FaBuilding className="text-[#1558C9]" />
                Work Timeline
              </h3>
              <div className="relative space-y-6 border-l-2 border-[#1b2333] pl-8">
                {workTimeline.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative rounded-xl border border-[#1b2333] bg-[#0a0e16] p-6 shadow-sm transition-all duration-300 hover:border-[#1558C9]/50"
                  >
                    <span className="absolute -left-[2.55rem] top-7 h-3 w-3 rounded-full bg-[#D4FF24] ring-4 ring-[#D4FF24]/20" />
                    <h4 className="mb-2 text-lg font-semibold text-[#3d7dff]">{job.role}</h4>
                    <p className="mb-2 font-semibold text-slate-100">{job.company}</p>
                    <div className="space-y-1 text-sm text-slate-400">
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#D4FF24]" />
                        {job.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#D4FF24]" />
                        {job.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Let's connect"
            title={
              <>
                Get In <GradientText>Touch</GradientText>
              </>
            }
            subtitle="Have a project in mind or just want to connect? Feel free to reach out!"
          />

          <div className="mb-16 grid gap-12 md:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="mb-8 text-2xl font-bold text-slate-100">Contact Information</h3>
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.link}
                    className="flex items-start gap-4 rounded-lg border border-[#1b2333] bg-[#0a0e16] p-4 shadow-sm transition-all duration-300 hover:border-[#1558C9]/50 hover:translate-x-1"
                  >
                    <div className="flex-shrink-0">{method.icon}</div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        {method.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-100">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="mb-6 text-xl font-bold text-slate-100">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-[#1b2333] bg-[#0a0e16] p-4 text-slate-300 shadow-sm transition-all duration-300 hover:border-[#1558C9]/50 hover:text-[#3d7dff]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/GharniyasRamesh_CV.pdf"
                download
                className="mt-12 inline-flex items-center gap-2 rounded-lg border-2 border-[#D4FF24] px-6 py-3 font-bold text-[#D4FF24] transition-all duration-300 hover:bg-[#D4FF24]/10"
              >
                <FaDownload /> Download CV
              </a>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="mb-8 text-2xl font-bold text-slate-100">Send Me a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block font-semibold text-slate-200">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-[#1b2333] bg-[#0a0e16] px-4 py-3 text-slate-100 placeholder-slate-500 transition-all duration-300 focus:border-[#1558C9] focus:outline-none focus:ring-2 focus:ring-[#1558C9]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-200">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-[#1b2333] bg-[#0a0e16] px-4 py-3 text-slate-100 placeholder-slate-500 transition-all duration-300 focus:border-[#1558C9] focus:outline-none focus:ring-2 focus:ring-[#1558C9]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-200">Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full rounded-lg border border-[#1b2333] bg-[#0a0e16] px-4 py-3 text-slate-100 placeholder-slate-500 transition-all duration-300 focus:border-[#1558C9] focus:outline-none focus:ring-2 focus:ring-[#1558C9]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-200">Message</label>
                  <textarea
                    placeholder="Your message here..."
                    rows="5"
                    className="w-full resize-none rounded-lg border border-[#1b2333] bg-[#0a0e16] px-4 py-3 text-slate-100 placeholder-slate-500 transition-all duration-300 focus:border-[#1558C9] focus:outline-none focus:ring-2 focus:ring-[#1558C9]/20"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4FF24] px-6 py-3 font-bold text-[#030407] shadow-lg shadow-[#D4FF24]/20 transition-all duration-300 hover:bg-[#c2ec16]"
                >
                  Send Message <FaArrowRight />
                </motion.button>
              </form>
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlowBorder contentClassName="bg-[#0a0e16] px-6 py-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-100 md:text-4xl">
                Let&apos;s build something amazing together 🚀
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                I&apos;m currently open to full-time opportunities. If you have a role or want
                to discuss a project, feel free to reach out.
              </p>
            </GlowBorder>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
