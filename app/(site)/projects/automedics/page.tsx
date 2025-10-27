import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { automedicsKirkland } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Adarsh Singh - Projects AutoMedics Kirkland",
  description: automedicsKirkland.hero.description as string,
  keywords: ["Adarsh Singh", "AutoMedics", "Kirkland", "Auto Repair", "Next.js", "Web Design", "Local SEO", "Serbyte", "Gwalior"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.automedics,
  },
}

const AutomedicsKirklandPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={automedicsKirkland} />
    </>
  )
}

export default AutomedicsKirklandPage
