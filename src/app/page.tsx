import { HeroAbout } from "@/components/HeroAbout";
import { TextReveal } from "@/components/TextReveal";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { Confidential } from "@/components/Confidential";
import { Contact } from "@/components/Contact";
import { statement } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HeroAbout />
      <TextReveal text={statement} />
      <Services />
      <FeaturedProjects />
      <Experience />
      <Confidential limit={2} />
      <Contact />
    </>
  );
}
