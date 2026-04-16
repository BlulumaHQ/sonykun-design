import Marquee from "./Marquee";
import { projects } from "@/data/projects";

/**
 * Infinite auto-scrolling strip of recent project thumbnails shown below the hero.
 * Dark-toned aesthetic with slight overlap.
 */
const ProjectMarquee = () => {
  const items = projects
    .filter((p) => p.featured || p.year >= 2025)
    .slice(0, 6);

  return (
    <section className="bg-[hsl(215,47%,12%)] py-10 md:py-14 overflow-hidden">
      <Marquee speed={45}>
        <div className="flex items-center gap-6 pr-6">
          {items.map((p) => (
            <div
              key={p.slug}
              className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5 -ml-4 first:ml-0"
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="font-display text-white text-sm font-semibold truncate">{p.name}</p>
                <p className="text-white/60 text-[11px] truncate">{p.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default ProjectMarquee;
