import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "@/app/images/amiod_.png"
import bespokePreview from "@/app/images/amicall_.png"
import automedicsPreview from "@/app/images/amievents_1.png"
import zeroPreview from "@/app/images/amiarchive_.png"
import { Link } from "@/app/utils/Link"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "react-zero-ui",
    src: zeroPreview,
    alt: "AmiArchive - Preview",
    color: "#3B06D1",
    type: "Study Materials",
    text: "Visit Web App",
    href: "https://amiarchive.vercel.app",
    dataText: "Visit Web App",
    ariaLabel: "Visit AmiArchive Web App",
    isExternal: true,
  },
  {
    id: "amicall",
    src: bespokePreview,
    alt: "AmiCall Preview",
    color: "#024EFC",
    type: "Offline Attendance",
    text: "View on GitHub",
    href: "https://github.com/A2105s/AmiCall",
    dataText: "View on GitHub",
    ariaLabel: "View AmiCall on GitHub",
    isExternal: true,
  },
  {
    id: "amievents",
    src: automedicsPreview,
    alt: "AmiEvents Preview",
    color: "#000000",
    type: "Event Management",
    text: "Visit Web App",
    href: "https://amievents.vercel.app",
    dataText: "Visit Web App",
    ariaLabel: "Visit AmiEvents Web App",
    isExternal: true,
  },

  {
    id: "amiod",
    src: iaoPreview,
    alt: "AmiOD Preview",
    color: "#13739C",
    type: "Amity OD Automation",
    text: "Visit Web App",
    href: "https://amiod.vercel.app",
    dataText: "Visit Web App",
    ariaLabel: "Visit AmiOD Web App",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
