import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { bespoke } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Adarsh Singh - Projects Bespoke Tint & PPF",
  description: bespoke.hero.description as string,
  keywords: ["Adarsh Singh", "Bespoke Projects", "Tint", "PPF", "React Zero-UI", "Next.js", "React", "TypeScript", "Serbyte", "Gwalior"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.bespoke,
  },
}

const BespokePage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={bespoke} />
    </>
  )
}

export default BespokePage
