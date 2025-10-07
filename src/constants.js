import CV from "../src/assets/Kundan_CV.pdf";
import {
  Github,
  Linkedin,
  X,
  Code2,
  ServerCog,
  Database,
  Cpu,
  TerminalSquare,
  Layers,
  Keyboard,
  Radio,
  Send,
  Mail,
} from "lucide-react";

export const DATA = {
  // --- Identity
  name: "Kundan",
  title: "Backend Dev",
  tagline:
    "I design, build, and scale web apps end‑to‑end. 3+ years across Node.js, Laravel, Python, MongoDB, MySQL.",
  location: "Chandigarh, India (IST)",
  email: "kundanpune220@gmail.com",
  socials: [
    { label: "Mail", href: "mailto:kundanpune220@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/kunndnn", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kunndnn",
      icon: Linkedin,
    },
    { label: "X / Twitter", href: "https://x.com/kunndnn", icon: X },
  ],
  // --- Skills (grouped)
  skills: [
    {
      group: "Core",
      items: [
        { name: "HTML / CSS", icon: Code2 },
        { name: "JavaScript", icon: Code2 },
        { name: "Python", icon: TerminalSquare },
      ],
    },
    {
      group: "Backend & Data",
      items: [
        { name: "Node.js", icon: ServerCog },
        { name: "Laravel", icon: Layers },
        { name: "MongoDB / Mongoose", icon: Database },
        { name: "MySQL", icon: Database },
      ],
    },
    {
      group: "Frameworks & Libraries",
      items: [
        { name: "Express.js", icon: ServerCog },
        { name: "Socket.io", icon: Radio },
        { name: "JQuery", icon: Code2 },
      ],
    },
    {
      group: "Ops & Tooling",
      items: [
        { name: "Docker", icon: Cpu },
        { name: "Vite", icon: Code2 },
        { name: "Postman", icon: Send },
      ],
    },
    {
      group: "Other Skills",
      items: [{ name: "40+ WPM Typing speed", icon: Keyboard }],
    },
  ],
  // --- Experience (descending)
  experience: [
    {
      company: "Canws technologies, SAS Nagar Mohali, Punjab",
      role: "Backend Developer",
      period: "June 2024 – August 2025",
      bullets: [
        "Developed real-time APIs and chat modules using Node.js, Express.js, and Socket.io, integrated with MongoDB, AWS S3 for file storage, and Twilio API for SMS notifications",
        "Built multi-tenant admin panels using Laravel for the admin interface, role-based access control with MySQL, AWS S3 for file storage & Twilio API for SMS notifications.",
        "Developed Python desktop automation app for internal operations using PyAutoGUI and OpenCV.",
        "Deployed a Flask + Selenium solution in Docker to automate logins and extract structured web data.",
        "Built web scraping scripts using BeautifulSoup4 to extract vehicle metadata.",
        "Created voice AI agent for calendar booking using VAPI and n8n workflows.",
      ],
    },
    {
      company: "Authenticode, SAS Nagar Mohali, Punjab",
      role: "Backend Developer",
      period: "August 2022 – May 2024",
      bullets: [
        "Architected and shipped real‑time chat platform (Socket.io, MySQL).",
        "Created multi‑tenant admin/business panels & APIs with Laravel + MySQL + jQuery/AJAX.",
        "Created admin/business panels & APIs with Node.js + Express.js + MongoDB + ejs/hbs + jQuery/AJAX/fetch/axios.",
      ],
    },
    {
      company: "Recraft Relic, SAS Nagar Mohali, Punjab",
      role: "Node.js Developer Intern",
      period: "May 2022 - June 2022",
      bullets: [
        "Worked on Node.js runtime environment, Frameworks like Express, Mongoose & NoSQL MongoDB Database",
      ],
    },
  ],
  // --- Projects
  projects: [
    {
      name: "NPM package",
      description:
        "An npm package providing utility functions such as summing numbers, multiplying numbers, extracting unique array values, and converting strings to arrays.",
      tags: ["Javascript", "Node.js"],
      links: [
        {
          label: "Demo",
          href: "https://www.npmjs.com/package/rawfx",
        },
        {
          label: "Code",
          href: "https://github.com/kunndnn/myPackage",
        },
      ],
    },
    {
      name: "Utility tools",
      description:
        "Tools for generating QR/Barcodes, checking weather information, creating secure passwords, converting files and buffers, transforming image formats, and previewing HTML live.",
      tags: [
        "React.js",
        "gh-pages",
        "google/generative-ai",
        "react-toastify",
        "axios",
      ],
      links: [
        { label: "Demo", href: "https://kunndnn.github.io/tools" },
        { label: "Code", href: "https://github.com/kunndnn/tools" },
      ],
    },
    {
      name: "Desktop automation application software",
      description:
        "An automation tool that switches between application tabs, scrolls pages, and moves the cursor at regular intervals, simulating user activity once activated.",
      tags: ["Python", "tkinter", "pyautogui", "Pillow"],
      links: [
        {
          label: "Demo",
          href: "https://github.com/kunndnn/py_scripts/tree/application",
        },
        {
          label: "Code",
          href: "https://github.com/kunndnn/py_scripts/blob/wiggler/wiggler.py",
        },
      ],
    },
    {
      name: "Realtime Chat Suite",
      description:
        "Production‑ready chat with rooms, and file uploads. Node.js, Socket.io, MongoDB;",
      tags: ["Node.js", "Socket.io", "MongoDB"],
      links: [
        {
          label: "Code",
          href: "https://github.com/kunndnn/backendTemplate/tree/features",
        },
      ],
    },
  ],
  // --- Writing
  posts: [
    {
      title: "Host react web app with github.",
      date: "Aug 2025",
      href: "https://kunndnn.github.io/blogs/#/post/host-react-app-with-github",
    },
    {
      title: "Node.js project structure.",
      date: "Sept 2025",
      href: "https://kunndnn.github.io/blogs/#/post/node-js-project-structure",
    },
    {
      title: "Basics of docker.",
      date: "Sept 2025",
      href: "https://kunndnn.github.io/blogs/#/post/docker-basics",
    },
  ],
  // --- CTA assets
  resumeUrl: CV,
};
