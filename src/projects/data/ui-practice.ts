// src/projects/data/ui-practice.ts

const project = {
  slug: "ui-practice",
  title: "UI Practice",
  date: "2025-04-01",
  description:
    "A platform for developers to practice building real UI components competitively.",
  tech: ["React", "TypeScript", "Node", "Tailwind", "Supabase"],
  thumbnail: "/images/ui-practice-thumb.png", // use a real path or mock
  hasCaseStudy: true,
  content: `
    <p>UI Practice is a fun, competitive platform for developers to improve their frontend skills through real UI challenges.</p>
    <p>Gamified experience, weekly challenges, and peer review features built in.</p>
  `,
  caseStudyContent: `
    <h2>Motivation</h2>
    <p>I created UI Practice because I was tired of tutorial hell and wanted a gamified way to practice UI components.</p>

    <h2>Tech Decisions</h2>
    <p>I chose React + TS for frontend flexibility, Supabase for ease of DB + Auth, and Tailwind for quick UI building.</p>

    <h2>What I Learned</h2>
    <p>Designing a system where devs can code in-browser and still submit challenges was tough but rewarding.</p>
  `,
  repo: "https://github.com/selormdev/ui-practice",
  live: "https://uipractice.dev",
};

export default project;
