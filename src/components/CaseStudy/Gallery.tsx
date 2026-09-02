import { ProjectImage } from "@/lib/types";
import { PlaceholderImage } from "../PlaceholderImage";
import { Reveal } from "../Reveal";

export function Gallery({ id, images }: { id: string; images: ProjectImage[] }) {
  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-24">
      <div className="container-grid">
        <Reveal className="col-span-4 md:col-span-12 mb-10">
          <p className="font-mono text-[12px] tracking-[0.1em] text-[var(--color-muted)]">
            GALLERY
          </p>
        </Reveal>
      </div>
      <div className="container-grid gap-y-10 md:gap-y-16">
        {images.map((image, i) => (
          <div
            key={i}
            className={
              image.aspect === "portrait" || image.aspect === "square"
                ? "col-span-4 md:col-span-6"
                : "col-span-4 md:col-span-12"
            }
          >
            <PlaceholderImage {...image} />
          </div>
        ))}
      </div>
    </section>
  );
}
