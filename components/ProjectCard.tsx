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
    <article className="rounded-lg border border-gray-300 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600">{tagline}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-gray-500">{stack}</p>
      <div className="mt-4 flex gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}