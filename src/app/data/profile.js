// Structured profile data used as the knowledge source for the AI chatbot.
// Keep this in sync with the content shown across the site's pages.

export const PROFILE_TEXT = `
NAME: Gharniyas Ramesh
ROLE: Software Engineer (Front-End & Full-Stack Development)
LOCATION: Coimbatore, Tamil Nadu, India

SUMMARY:
Gharniyas Ramesh is a dedicated Software Engineer with 2+ years of experience in Front-End and Full-Stack Development.
Proficient in React, Next.js, TypeScript, .NET, PostgreSQL, and MongoDB, with expertise in API integrations and
AI-powered solutions for building scalable, high-performance applications.

EDUCATION:
- Bachelor of Engineering, Electrical and Electronics Engineering, Sri Ramakrishna Engineering College, Coimbatore (July 2019 - May 2023), CGPA 8.67
- HSC, SRSI Matric Hr. Sec. School, Coimbatore (June 2018 - March 2019), Percentage: 69.3%
- SSLC, SRSI Matric Hr. Sec. School, Coimbatore (June 2016 - March 2017), Percentage: 93%

WORK EXPERIENCE:

1. Nithilam Tech, Coimbatore, India — Software Engineer (Nov 2025 – Present)
   Project: Police System, Attorney General System & Resource Management System
   Stack: Next.js, React, Tailwind CSS, .NET, REST APIs, PostgreSQL, MongoDB, Azure
   - Contributed to Resource & Project Management solutions for workforce allocation, department management, and project tracking.
   - Designed and implemented interactive graph visualizations using Cytoscape.js, including node/edge relationships and real-time interactions.
   - Integrated SharePoint-based document management and backend services for secure collaboration and data management.
   - Developed advanced graph interactions: zooming, panning, drag-and-drop, real-time graph updates.
   - Improved scalability and UX through reusable architecture, performance optimizations, and AI-powered workflow automation.

2. Magnus Vista Labs, Coimbatore, India — Software Engineer (Nov 2024 – Nov 2025)
   Project: ERP/CRM Platform for Medical Equipment
   Stack: React, TypeScript, Tailwind CSS, Nano Store, .NET, REST APIs, PostgreSQL, Azure
   - Developed scalable frontend applications and reusable component architectures using React, TypeScript, and Tailwind CSS.
   - Designed and optimized PostgreSQL procedures, functions, triggers, and complex queries for ERP/CRM workflows.
   - Built Sales Management modules and integrated REST APIs, SharePoint solutions, and Azure deployment pipelines.
   - Implemented lead tracking, quotations, customer interactions, and workflow automation.
   - Implemented AI-powered Speech-to-Text and workflow automation using external AI APIs.
   - Used GitHub Copilot, Claude AI, ChatGPT, and Antigravity AI to improve development productivity.

3. AMPCOME Technology, Bengaluru, India — React Developer (Mar 2024 – Aug 2024)
   Project: MyCENTA — a platform for teachers focused on assessments, training & development, certification, and career growth
   Stack: Next.js, Tailwind CSS, Zustand, TanStack Query, Node.js, GraphQL, Hasura, PostgreSQL
   - Integrated REST and GraphQL APIs to support core platform functionalities.
   - Implemented infinite scrolling, pagination, custom hooks, and state management.
   - Developed SEO-optimized and responsive Next.js applications from Figma designs.
   - Debugged and resolved critical issues, ensuring platform stability and reliability.

CAREER STATS: 3 companies, 2+ years of experience, 5+ major projects, 20+ technologies used, 15+ total projects completed (across hardware and software domains).

SKILLS:
- Languages: SQL, PL/SQL, JavaScript, TypeScript, C, .NET
- Frontend: React, Next.js, Astro, Tailwind CSS, Nano Store, Zustand, Redux, Shadcn, Mapbox
- Backend & APIs: Node.js, REST API, GraphQL, TanStack Query, Hasura
- Databases: MySQL, MongoDB, PostgreSQL
- Version Control: Git, GitHub, Azure Repos
- Cloud & Collaboration: Azure, SharePoint
- AI & Developer Tools: GitHub Copilot, Claude AI, ChatGPT, Cursor AI, Antigravity AI, Prompt Engineering

PROJECTS:
1. Resource & Project Management System — Interactive Cytoscape.js graph visualizations for workforce allocation, department management, and project tracking. (Next.js, React, Tailwind CSS, Azure)
2. MyCenta — Teacher assessment, certification and career-growth platform with dashboards, analytics and reports. (Next.js, GraphQL, Hasura, PostgreSQL)
3. ERP/CRM Platform — Sales Management modules for lead tracking, quotations and customer workflows for a medical equipment platform. (.NET, React, TypeScript, PostgreSQL)
4. MERN Geo/JSON Platform — Full-stack geojson platform with authentication, maps, and data management. (MongoDB, Express, React, Node.js)
5. Data Analytics Dashboard — Analytics dashboard with data visualization and reporting. (Python, Flask, PostgreSQL, React)
6. Netflix Clone — Netflix UI clone built with modern web technologies and responsive design. (React, Tailwind, TMDB API)
7. E-Commerce Platform — Complete e-commerce solution with product catalog, cart, and checkout. (React, Node.js, MongoDB)
8. Restaurant Website — Modern restaurant website with menu, reservations, and online ordering. (React, Tailwind, Firebase)

ACHIEVEMENTS:
- L&T TECHGIUM PROJECT (NASSCOM TECK) — Reached second round in prestigious tech competition.
- TVSTS Virtual Internship (Motors & Drives for EV) — Completed comprehensive training in electric vehicle technologies.
- Executive Member, EDC and EEETA Clubs — Led initiatives in entrepreneurship and engineering societies.
- Joint Secretary, REC Club — Organized technical events and workshops for students.
- Solar PV Installation Course, Progen Energy Solutions — Trained in solar panel installation and maintenance.
- Energy Management Course, Econ Energy Concepts — Studied energy efficiency and management practices.

CONTACT INFORMATION:
- Email: gharniyasramesh@gmail.com
- Phone: +91 8667582487
- Location: Coimbatore, Tamil Nadu, India
- GitHub: https://github.com/gharniyas
- LinkedIn: https://www.linkedin.com/in/gharniyas-r-9bbb1a224/

AVAILABILITY: Open to freelance opportunities, full-time positions, and collaborations on new projects.
`.trim();

export const SYSTEM_PROMPT = `You are the AI assistant embedded in Gharniyas Ramesh's personal portfolio website.
Answer visitor questions ONLY using the information given below about Gharniyas. Speak about him in the third person,
in a friendly, concise, professional tone. Format with short paragraphs or bullet points when helpful.

Rules:
- If the answer is contained in the profile data below, answer directly and specifically using it.
- If the question asks about something NOT covered in the data (e.g. exact salary expectations, availability on a specific date,
  private details, or anything you're not confident about), do NOT guess or make anything up. Instead, politely tell the
  visitor to reach out directly via email (gharniyasramesh@gmail.com) or the phone number on the Contact page for that information.
- If asked who you are, say you're an AI assistant for this portfolio, here to answer questions about Gharniyas.
- Keep answers focused and not overly long.

PROFILE DATA:
${PROFILE_TEXT}
`;
