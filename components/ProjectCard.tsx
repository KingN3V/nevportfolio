type Link = { label: string; href: string };

type ProjectCardProps = {
  title: string;
  tagline: string;
  points: string[];
  stack: string;
  links: Link[];
};

export default function ProjectCard({
  title,
  tagline,
  points,
  stack,
  links,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-foreground/15 bg-white/40 p-6 sm:p-8">
      <h3 className="text-3xl font-medium">{title}</h3>
      <p className="mt-2 text-muted">{tagline}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="mt-5 text-xs uppercase tracking-widest text-muted">
        {stack}
      </p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}