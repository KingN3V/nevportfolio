import ProjectCard from "@/components/ProjectCard";
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
      <h1 className="text-4xl font-bold">Neville Ken: Backend Software Engineer</h1>
      <p className="mt-4 text-lg text-gray-600">
        I'm a computer science graduate based in Kenya. I build backend systems
        and APIs, and I've shipped tools that businesses use every day.
      </p>
      <a
        href="/Neville_Ken_CV.pdf"
        download
        className="mt-6 inline-block rounded border border-gray-400 px-4 py-2"
      >
        Download CV
      </a>
      <section className="mt-16">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-4 text-gray-600">
          I'm a computer science graduate who got hooked on backend engineering:
          designing APIs, modelling data, and building systems that keep working
          once real people depend on them. I enjoy taking a real business
          problem and turning it into something reliable that's deployed and in
          use.
        </p>
        <p className="mt-4 text-gray-600">
          I know the backend best, but I'm comfortable building the front end
          too, and I'm always learning more.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-400 px-4 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 space-y-6">
          <ProjectCard
            title="Agrovet POS"
            tagline="Flutter app + FastAPI backend, in daily use at a real agrovet"
            points={[
              "Sales automatically deduct stock; restocks and write-offs are logged as stock movements",
              "Credit sales with part-payments and an outstanding-balances report",
              "JWT auth with a REST API documented in Swagger",
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
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">IT Attaché</h3>
          <p className="text-gray-600">
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

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">BSc Computer Science</h3>
          <p className="text-gray-600">Maseno University · 2022 – 2026</p>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-4 text-gray-600">
          Looking for a software engineer? I build backend systems and full
          applications, and I’m open to roles and collaborations. Reach out to
          me anytime.
        </p>
        <div className="mt-6 flex gap-6">
          <a
            href="mailto:nevilleken5@gmail.com"
            className="text-blue-600 underline"
          >
            Email
          </a>
          <a
            href="https://github.com/KingN3V"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/neville-ken-786901262"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
