// import type { IconType } from "react-icons";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiHtml5,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiPostgresql,
//   SiPrisma,
//   SiGit,
//   SiFigma,
//   SiDocker,
//   SiVercel,
// } from "react-icons/si";
// import { TbApi } from "react-icons/tb";
// import { LuMousePointer2 } from "react-icons/lu";
// import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
// import { LuMail } from "react-icons/lu";

// // Edit only the `data` object below. Everything else updates automatically.
// const data = {
//   name: "Fazliddin Idiev",
//   role: "Frontend Developer",
//   intro:
//     "I build fast, modern web experiences that look great and feel effortless to use. I care about clean interfaces, thoughtful details, and writing code that stays simple, scalable, and easy to maintain.",
//   email: "fazliddinidiev@gmail.com",
//   links: [
//     {
//       label: "GitHub",
//       href: "https://github.com/idieeev",
//       icon: FaGithub,
//     },
//     { label: "Telegram", href: "https://t.me/idieev", icon: FaTelegram },
//     {
//       label: "LinkedIn",
//       href: "https://www.linkedin.com/in/idieev/",
//       icon: FaLinkedin,
//     },
//   ],
//   about: [
//     "Hi, I’m Fazliddin Idiev — a developer who believes great software should look as good as it works.",
//     "My journey started with HTML and CSS, where I discovered a passion for turning ideas into clean, intuitive interfaces. Since then, I’ve grown into building full-scale web applications with React and Next.js, always focusing on performance, usability, and thoughtful design.",
//     "I enjoy solving problems, exploring new technologies, and constantly finding better ways to build things. For me, development is not just about writing code — it’s about creating experiences that feel simple, natural, and memorable.",
//     "Outside of code I enjoy reading, travelling and learning new languages. Add a few lines about yourself here.",
//   ],
//   facts: [
//     { value: "3+", label: "years of experience" },
//     { value: "15", label: "projects shipped" },
//     { value: "3", label: "languages spoken" },
//   ],
//   strengths: [
//     {
//       title: "Attention to detail",
//       text: "I care about the small details that make an interface feel polished and professional.",
//     },
//     {
//       title: "Problem solver",
//       text: "I enjoy breaking complex problems into simple, practical solutions.",
//     },
//     {
//       title: "Always improving",
//       text: "I keep learning new technologies and look for better ways to build things.",
//     },
//   ],
//   skills: [
//     {
//       group: "Frontend",
//       items: [
//         { name: "React", icon: SiReact },
//         { name: "Next.js", icon: SiNextdotjs },
//         { name: "TypeScript", icon: SiTypescript },
//         { name: "HTML & CSS", icon: SiHtml5 },
//         { name: "Tailwind", icon: SiTailwindcss },
//       ],
//     },
//     {
//       group: "Backend",
//       items: [
//         { name: "Node.js", icon: SiNodedotjs },
//         { name: "PostgreSQL", icon: SiPostgresql },
//         { name: "REST API", icon: TbApi },
//         { name: "Prisma", icon: SiPrisma },
//       ],
//     },
//     {
//       group: "Tools",
//       items: [
//         { name: "Git", icon: SiGit },
//         { name: "Figma", icon: SiFigma },
//         { name: "Docker", icon: SiDocker },
//         { name: "Vercel", icon: SiVercel },
//         { name: "Cursor", icon: LuMousePointer2 },
//       ],
//     },
//   ] as { group: string; items: { name: string; icon: IconType }[] }[],
//   services: [
//     {
//       title: "Websites",
//       text: "Landing pages and multi-page sites that load fast and look sharp on any screen.",
//     },
//     {
//       title: "Web apps",
//       text: "Dashboards, tools and full products with React, Next.js and a database.",
//     },
//     {
//       title: "UI to code",
//       text: "I turn Figma designs into pixel-accurate, accessible interfaces.",
//     },
//   ],
//   experience: [
//     {
//       period: "2025 – 2026",
//       title: "Freelance",
//       place: "Self-employed",
//       text: "Made landing pages and small apps for local businesses.",
//     },
//     {
//       period: "2024 – 2025",
//       title: "Frontend Developer",
//       place: "Caravan of Craft",
//       text: "Building the product interface with Next.js and TypeScript, improving page speed and accessibility.",
//     },
//     {
//       period: "2023 – 2024",
//       title: "Junior Developer",
//       place: "Sofclub Academy",
//       text: "Developed client websites, fixed bugs and worked closely with designers.",
//     },
//   ],
//   projects: [
//     {
//       year: "2024",
//       title: "Kavsar Academy Crm",
//       text: "What it is and what problem it solves.",
//       stack: "Next.js, TypeScript",
//       href: "#",
//     },
//     {
//       year: "2026",
//       title: "10+ projects for different businesses",
//       text: "Built more than 10 web projects for different businesses, turning their ideas and needs into modern, functional digital experiences.",
//       stack: "Next.js, React, TypeScript, Prisma",
//       href: "#",
//     },
//   ],
// };

// const nav = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "services", label: "Services" },
//   { id: "skills", label: "Skills" },
//   { id: "experience", label: "Experience" },
//   { id: "projects", label: "Projects" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Home() {
//   return (
//     <>
//       <header className="nav">
//         <a className="logo" href="#home">
//           {data.name}
//         </a>
//         <nav aria-label="Main">
//           {nav.map((n) => (
//             <a key={n.id} href={`#${n.id}`}>
//               {n.label}
//             </a>
//           ))}
//         </nav>
//       </header>

//       <main>
//         <section id="home" className="hero">
//           <p className="badge">Open to work</p>
//           <h1>
//             {data.name}
//             <span>{data.role}</span>
//           </h1>
//           <p className="intro">{data.intro}</p>
//           <a className="btn" href="#contact">
//             Get in touch
//           </a>
//         </section>

//         <section id="about" className="block">
//           <h2>About me</h2>
//           <div className="about">
//             <div>
//               {data.about.map((t) => (
//                 <p key={t}>{t}</p>
//               ))}
//             </div>
//             <dl className="facts">
//               {data.facts.map((f) => (
//                 <div key={f.label}>
//                   <dt>{f.value}</dt>
//                   <dd>{f.label}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//           <div className="strengths">
//             {data.strengths.map((s) => (
//               <div key={s.title}>
//                 <h3>{s.title}</h3>
//                 <p>{s.text}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="services" className="block">
//           <h2>What I do</h2>
//           <div className="strengths">
//             {data.services.map((s) => (
//               <div key={s.title}>
//                 <h3>{s.title}</h3>
//                 <p>{s.text}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="skills" className="block">
//           <h2>Skills</h2>
//           {data.skills.map((g) => (
//             <div className="skill-row" key={g.group}>
//               <h3>{g.group}</h3>
//               <ul>
//                 {g.items.map(({ name, icon: Icon }) => (
//                   <li key={name}>
//                     <Icon aria-hidden="true" />
//                     {name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </section>

//         <section id="experience" className="block">
//           <h2>Experience</h2>
//           <ol className="timeline">
//             {data.experience.map((e) => (
//               <li key={e.title + e.period}>
//                 <span className="period">{e.period}</span>
//                 <div>
//                   <h3>
//                     {e.title}, {e.place}
//                   </h3>
//                   <p>{e.text}</p>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </section>

//         <section id="projects" className="block">
//           <h2>Projects</h2>
//           <ul className="projects">
//             {data.projects.map((p) => (
//               <li key={p.title}>
//                 <a href={p.href}>
//                   <span className="year">{p.year}</span>
//                   <span>
//                     <strong>{p.title}</strong>
//                     <em>{p.text}</em>
//                   </span>
//                   <span className="stack">{p.stack}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <footer id="contact" className="block contact">
//           <h2>Let's work together</h2>
//           <a className="mail" href={`mailto:${data.email}`}>
//             <LuMail aria-hidden="true" />
//             {data.email}
//           </a>
//           <nav aria-label="Social links">
//             {data.links.map(({ label, href, icon: Icon }) => (
//               <a key={label} href={href} target="_blank" rel="noreferrer">
//                 <Icon aria-hidden="true" />
//                 {label}
//               </a>
//             ))}
//           </nav>
//         </footer>
//       </main>
//     </>
//   );
// }

import Image from "next/image";
import Navbar from "./Navbar";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiFigma,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuMousePointer2 } from "react-icons/lu";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

// Edit only the `data` object below. Everything else updates automatically.
const data = {
  name: "Fazliddin Idiev",
  role: "Frontend Developer",
  intro:
    "I build fast, modern web experiences that look great and feel effortless to use. I care about clean interfaces, thoughtful details, and writing code that stays simple, scalable, and easy to maintain.",
  email: "fazliddinidiev@gmail.com",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/idieeev",
      icon: FaGithub,
    },
    { label: "Telegram", href: "https://t.me/idieev", icon: FaTelegram },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/idieev/",
      icon: FaLinkedin,
    },
  ],
  about: [
    "Hi, I’m Fazliddin Idiev — a developer who believes great software should look as good as it works.",
    "My journey started with HTML and CSS, where I discovered a passion for turning ideas into clean, intuitive interfaces. Since then, I’ve grown into building full-scale web applications with React and Next.js, always focusing on performance, usability, and thoughtful design.",
    "I enjoy solving problems, exploring new technologies, and constantly finding better ways to build things. For me, development is not just about writing code — it’s about creating experiences that feel simple, natural, and memorable.",
    "Outside of code I enjoy reading, travelling and learning new languages. Add a few lines about yourself here.",
  ],
  facts: [
    { value: "3+", label: "years of experience" },
    { value: "15", label: "projects shipped" },
    { value: "3", label: "languages spoken" },
  ],
  strengths: [
    {
      title: "Attention to detail",
      text: "I care about the small details that make an interface feel polished and professional.",
    },
    {
      title: "Problem solver",
      text: "I enjoy breaking complex problems into simple, practical solutions.",
    },
    {
      title: "Always improving",
      text: "I keep learning new technologies and look for better ways to build things.",
    },
  ],
  skills: [
    {
      group: "Frontend",
      items: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "HTML & CSS", icon: SiHtml5 },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "REST API", icon: TbApi },
        { name: "Prisma", icon: SiPrisma },
      ],
    },
    {
      group: "Tools",
      items: [
        { name: "Git", icon: SiGit },
        { name: "Figma", icon: SiFigma },
        { name: "Docker", icon: SiDocker },
        { name: "Vercel", icon: SiVercel },
        { name: "Cursor", icon: LuMousePointer2 },
      ],
    },
  ] as { group: string; items: { name: string; icon: IconType }[] }[],
  services: [
    {
      title: "Websites",
      text: "Landing pages and multi-page sites that load fast and look sharp on any screen.",
    },
    {
      title: "Web apps",
      text: "Dashboards, tools and full products with React, Next.js and a database.",
    },
    {
      title: "UI to code",
      text: "I turn Figma designs into pixel-accurate, accessible interfaces.",
    },
  ],
  experience: [
    {
      period: "2025 – 2026",
      title: "Freelance",
      place: "Self-employed",
      text: "Made landing pages and small apps for local businesses.",
    },
    {
      period: "2024 – 2025",
      title: "Frontend Developer",
      place: "Caravan of Craft",
      text: "Building the product interface with Next.js and TypeScript, improving page speed and accessibility.",
    },
    {
      period: "2023 – 2024",
      title: "Junior Developer",
      place: "Sofclub Academy",
      text: "Developed client websites, fixed bugs and worked closely with designers.",
    },
  ],
  projects: [
    {
      year: "2024",
      title: "Kavsar Academy Crm",
      text: "What it is and what problem it solves.",
      stack: "Next.js, TypeScript",
      href: "#",
    },
    {
      year: "2026",
      title: "10+ projects for different businesses",
      text: "Built more than 10 web projects for different businesses, turning their ideas and needs into modern, functional digital experiences.",
      stack: "Next.js, React, TypeScript, Prisma",
      href: "#",
    },
  ],
};

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Navbar name={data.name} items={nav} />

      <main>
        <section
          id="home"
          className="hero"
          style={{
            position: "relative",
            minHeight: "calc(100vh - 70px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: "calc(50% - 50vw)",
              width: "min(55vw, 720px)",
              zIndex: 0,
              pointerEvents: "none",
              filter: "grayscale(1) contrast(1.05)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, #000 45%)",
              maskImage: "linear-gradient(to right, transparent 0%, #000 45%)",
            }}
          >
            <Image
              src="/me.jpg"
              alt=""
              fill
              priority
              sizes="720px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <p className="badge">Open to work</p>
            <h1>
              {data.name}
              <span>{data.role}</span>
            </h1>
            <p className="intro">{data.intro}</p>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="block">
          <h2>About me</h2>
          <div className="about">
            <div>
              {data.about.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <dl className="facts">
              {data.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="strengths">
            {data.strengths.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="block">
          <h2>What I do</h2>
          <div className="strengths">
            {data.services.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="block">
          <h2>Skills</h2>
          {data.skills.map((g) => (
            <div className="skill-row" key={g.group}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <Icon aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="experience" className="block">
          <h2>Experience</h2>
          <ol className="timeline">
            {data.experience.map((e) => (
              <li key={e.title + e.period}>
                <span className="period">{e.period}</span>
                <div>
                  <h3>
                    {e.title}, {e.place}
                  </h3>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="block">
          <h2>Projects</h2>
          <ul className="projects">
            {data.projects.map((p) => (
              <li key={p.title}>
                <a href={p.href}>
                  <span className="year">{p.year}</span>
                  <span>
                    <strong>{p.title}</strong>
                    <em>{p.text}</em>
                  </span>
                  <span className="stack">{p.stack}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer id="contact" className="block contact">
          <h2>Let's work together</h2>
          <a className="mail" href={`mailto:${data.email}`}>
            <LuMail aria-hidden="true" />
            {data.email}
          </a>
          <nav aria-label="Social links">
            {data.links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>
        </footer>
      </main>
    </>
  );
}
