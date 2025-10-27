import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { iao } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Adarsh Singh - Projects Iron & Oak Seattle",
  description: iao.hero.description as string,
  keywords: ["Adarsh Singh", "Iron & Oak", "Seattle", "Private Security", "Next.js", "Web Design", "Storytelling", "Serbyte", "Gwalior"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.iao,
  },
}

const IaoPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={iao} />
    </>
  )
}

export default IaoPage
