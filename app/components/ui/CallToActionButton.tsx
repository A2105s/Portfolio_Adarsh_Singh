import Image from "next/image"
import profilePhoto from "@/app/images/Adarsh.png"
import clsx from "clsx"
import type { Variants } from "motion"
import { MotionButton, MotionDiv } from "@/app/utils/lazy-ui"
import { SITE_NAP } from "@/config/siteConfig"
import { Icon } from "../Icon"

export const CallToActionButton = () => {
  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      filter: `blur(5px)`,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: 0.7,
      },
    },
    hover: {
      boxShadow: "none",
      y: 4,
      transition: {
        duration: 0.2,
      },
    },
  }

  const youVariants: Variants = {
    initial: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    animate: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    hover: {
      opacity: 1,
      x: 0,
      width: 45,

      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: {
          delay: 0.1,
        },
      },
    },
  }

  return (
    <div className="flex items-center gap-3">
      {/* GitHub CTA */}
      <a href={SITE_NAP.profiles.github} target="_blank" rel="noopener" aria-label="Adarsh Singh's GitHub">
        <MotionButton
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={buttonVariants}
          className="group bubble-hover-cta active relative z-1 inline-flex w-max items-center gap-2 rounded-full bg-black px-3 py-2.5 text-base font-medium tracking-tight text-white shadow-xl shadow-black/20"
        >
          <div className="pointer-events-none absolute inset-0.5 -z-1 rounded-full [background-image:url('/assets/framer-noise.png')] [background-size:164px] bg-repeat opacity-12" />
          <div className="relative flex items-center gap-1">
            {/* Avatar */}
            <div className="relative h-7 w-7 rounded-full">
              <Image src={profilePhoto} alt="Adarsh Singh profile photo" fill sizes="50px" className="rounded-full object-cover ring-2 ring-white/75" />
            </div>

            {/* + You entrance */}
            <MotionDiv variants={youVariants} className={clsx("hidden items-center gap-1 md:flex")}> 
              <span className="text-xl">+</span>
              <Icon
                name="github"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-semibold text-black ring-1 ring-black/50"
              />
            </MotionDiv>
          </div>
          See My Github
        </MotionButton>
      </a>

      {/* Resume CTA (opens PDF to view; downloadable from viewer) */}
      <a href="/Adarsh_Singh_Resume.pdf" target="_blank" rel="noopener" aria-label="View Adarsh Singh's Resume (opens in a new tab)">
        <MotionButton
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={buttonVariants}
          className="group bubble-hover-cta active relative z-1 inline-flex w-max items-center gap-2 rounded-full bg-black px-3 py-2.5 text-base font-medium tracking-tight text-white shadow-xl shadow-black/20"
        >
          <div className="pointer-events-none absolute inset-0.5 -z-1 rounded-full [background-image:url('/assets/framer-noise.png')] [background-size:164px] bg-repeat opacity-12" />
          <div className="relative flex items-center gap-1">
            {/* Avatar */}
            <div className="relative h-7 w-7 rounded-full">
              <Image src={profilePhoto} alt="Adarsh Singh profile photo" fill sizes="50px" className="rounded-full object-cover ring-2 ring-white/75" />
            </div>

            {/* + Page entrance */}
            <MotionDiv variants={youVariants} className={clsx("hidden items-center gap-1 md:flex")}> 
              <span className="text-xl">+</span>
              <Icon
                name="page"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-semibold text-black ring-1 ring-black/50"
              />
            </MotionDiv>
          </div>
          Resume
        </MotionButton>
      </a>
    </div>
  )
}

// === VARIANTS ===
