import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold">Neville: Software Engineer</h1>
      <p className="mt-4 text-lg text-gray-600">
        I'm a computer science graduate based in Kenya. I build backend systems
        and APIs, and I've shipped tools that businesses use every day.
      </p>

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
    </main>
  );
}
