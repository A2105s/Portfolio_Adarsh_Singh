import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/Adarsh.png"
import signature from "../images/Adarsh_eSign.png"
import { Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Adarsh Singh
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Adarsh Singh" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h2 className="mb-1 text-base font-medium leading-snug tracking-tight text-slate-900 md:text-lg">
                Adarsh Singh
              </h2>
              <p className="text-sm text-gray-500">Full-Stack Engineer (Next.js + TypeScript)</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I&apos;m not defined by a single domain.</strong> I explore everything that challenges my mind and expands what&apos;s possible — from engineering and AI to design, systems, and beyond. My curiosity moves freely across disciplines, guided by a desire to create things that are intelligent, functional, and deeply human.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">I build ideas into systems and experiences</strong> that merge logic with emotion. Whether it&apos;s developing modern web architectures, designing intuitive interfaces, or experimenting with AI-driven automation, I see technology as a medium for meaning — not just mechanics.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">My work is driven by clarity and intent.</strong> I observe, refine, and simplify until only what matters remains. I don&apos;t chase trends; I chase understanding — and I build to bring that understanding to life.
            </p>

            {/* signature */}
            <Image src={signature} alt="Adarsh Singh Signature" className="relative mt-6 -ml-3 h-12 w-auto" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
