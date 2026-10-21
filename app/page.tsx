import ProjectCard from "@/components/ProjectCard";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
const skills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
  "JWT auth",
  "Flutter",
  "Next.js",
  "Git & GitHub",
  "Render",
  "Neon",
  "HTML/CSS",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <nav className="sticky top-0 z-10 flex flex-wrap gap-x-8 gap-y-2 border-b border-foreground/15 bg-background py-6 text-xs uppercase tracking-widest text-muted">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <h1 className="mt-24 text-5xl font-medium leading-tight sm:text-6xl">
        Neville Ken: Software Engineer
      </h1>
      <p className="mt-4 text-xs uppercase tracking-widest text-accent">
        Backend systems and APIs
      </p>
      <p className="mt-4 text-lg text-muted">
        I'm a computer science graduate based in Kenya. I build backend systems
        and APIs, and I've shipped tools that businesses use every day.
      </p>
      <a
        href="/Neville_Ken_CV.pdf"
        download
        className="mt-6 inline-block rounded border border-foreground/30 px-4 py-2"
      >
        Download CV
      </a>
      <section id="about" className="mt-24 scroll-mt-24">
        <p className="text-xs uppercase tracking-widest text-accent">
          Who I am
        </p>
        <h2 className="mt-2 text-4xl font-medium">About</h2>
        <p className="mt-4 text-muted">
          I'm a computer science graduate who got hooked on backend engineering:
          designing APIs, modelling data, and building systems that keep working
          once real people depend on them. I enjoy taking a real business
          problem and turning it into something reliable that's deployed and in
          use.
        </p>
        <p className="mt-4 text-muted">
          I like owning a project from the first idea to deployment: designing
          the database and API, building the web or mobile interface on top, and
          shipping it where people can use it.
        </p>
      </section>
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-accent">Toolbox</p>
        <h2 className="mt-2 text-4xl font-medium">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/30 px-4 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mt-24 scroll-mt-24">
        <p className="text-xs uppercase tracking-widest text-accent">
          What I've built
        </p>
        <h2 className="mt-2 text-4xl font-medium">Projects</h2>
        <div className="mt-6 space-y-6">
          <ProjectCard
            title="Agrovet POS"
            tagline="Flutter app + FastAPI backend, in daily use at a real agrovet"
            points={[
              "Every stock change is logged as a movement (sale, restock, cancellation, expired, damaged), and stock can never go negative",
              "Locks product rows while stock is checked and deducted; the order, its items, the stock change and its movement records commit in a single transaction",
              "Price and cost are snapshotted on each order item, so later price changes never rewrite past sales or profit",
              "Credit sales with part-payments and an outstanding-balances report; JWT auth, API documented in Swagger",
            ]}
            stack="Flutter · FastAPI · PostgreSQL · Render · Neon"
            links={[
              {
                label: "API docs",
                href: "https://pointofsale-api.onrender.com/docs",
              },
              {
                label: "Backend repo",
                href: "https://github.com/KingN3V/PointOfSale",
              },
              {
                label: "Mobile app repo",
                href: "https://github.com/KingN3V/pos_frontend",
              },
            ]}
          />
          <ProjectCard
            title="Kicks JJ"
            tagline="Online shoe store with its own admin dashboard, built for a real client"
            points={[
              "Admin dashboard where the owner adds, edits and removes shoes, protected by JWT login",
              "Filtering by brand, category, size and price",
              "Orders go to the seller on WhatsApp with the shoe and size pre-filled",
            ]}
            stack="Next.js · FastAPI · PostgreSQL · Cloudinary · Render · Neon · Netlify"
            links={[
              { label: "Live site", href: "https://kicksjj.netlify.app" },
              {
                label: "Repo",
                href: "https://github.com/KingN3V/kicks",
              },
            ]}
          />
        </div>
      </section>
      <section id="experience" className="mt-24 scroll-mt-24">
        <p className="text-xs uppercase tracking-widest text-accent">
          Where I've worked
        </p>
        <h2 className="mt-2 text-4xl font-medium">Experience</h2>
        <div className="mt-6">
          <h3 className="text-2xl font-medium">IT Attachee</h3>
          <p className="text-muted">
            Kenya Power and Lighting Company (KPLC), Kisii · May 2025 – July
            2025
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Contributed to the FastAPI backend of a team-built application
              that tracks computers entering and leaving the office
            </li>
            <li>Helped resolve IT support tickets from staff</li>
            <li>
              Diagnosed and resolved network connectivity issues using ping and
              related troubleshooting, supporting a stable enterprise network
            </li>
            <li>
              Assisted with the daily operation and maintenance of the regional
              server room
            </li>
            <li>
              Took part in the physical installation and deployment of fiber
              optic network infrastructure
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-accent">
          Background
        </p>
        <h2 className="mt-2 text-4xl font-medium">Education</h2>
        <div className="mt-6">
          <h3 className="text-2xl font-medium">BSc Computer Science</h3>
          <p className="text-muted">Maseno University · 2022 – 2026</p>
        </div>
      </section>
      <section
        id="contact"
        className="mt-24 scroll-mt-24 rounded-lg bg-accent p-8 text-background sm:p-12"
      >
        <p className="text-sm font-medium uppercase tracking-widest">
          Get in touch
        </p>
        <h2 className="mt-2 text-4xl font-medium">Contact</h2>
        <p className="mt-4">
          Looking for a software engineer? I build backend systems and full
          applications, and I’m open to roles and collaborations. Reach out to
          me anytime using the links below.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <a
            href="mailto:nevilleken5@gmail.com"
            className="inline-flex items-center gap-2 underline underline-offset-4 hover:opacity-70"
          >
            <FaEnvelope aria-hidden="true" />
            Email
          </a>
          <a
            href="https://github.com/KingN3V"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 underline underline-offset-4 hover:opacity-70"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/neville-ken-786901262"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 underline underline-offset-4 hover:opacity-70"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </section>
      <footer className="mt-20 border-t border-foreground/15 py-8 text-sm text-muted">
        © 2026 Neville Ken. All rights reserved.
      </footer>
    </main>
  );
}
