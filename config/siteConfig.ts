export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Adarsh Singh - Web Developer Portfolio | React & Next.js",
  description: "Portfolio of Adarsh Singh, an AI-driven full stack engineer building intelligent systems and digital experiences. Specializing in AI/ML, React, Next.js, and innovative tech solutions.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Adarsh Singh",
  keywords: ["Adarsh Singh", "Serbyte", "React Zero-UI", "Next.js", "React", "TypeScript", "Full-Stack Engineer", "Gwalior"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Adarsh Singh",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Adarsh Singh",
  contactTitle: "CEO",
  email: "officialadarsh.in@gmail.com",
  phone: "+12066596727",
  formattedPhone: "+1 (206) 659-6727",
  addressLink: "https://www.google.com/maps/search/?api=1&query=serbyte+development",
  street: "12601 NE 124th ST",
  city: "Kirkland",
  state: "WA",
  zipCode: "98034",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/serbytedevelopment/",
    linkedIn: "https://www.linkedin.com/in/adarsh-singh-477079323/",
    yelp: "https://www.yelp.com/biz/serbyte-development-kirkland-3",
    pinterest: "https://www.pinterest.com/serbytedevelopment",
    gbp: "https://g.co/kgs/ay2r1wp",
    github: "https://github.com/A2105s",
    x: "https://x.com/AustinSerb",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about",
  projectLinks: {
    // iao: "/projects/iron-and-oak", // removed: no longer linking to internal case study
    // automedics: "/projects/automedics", // removed: no longer linking to internal case study
    // bespoke: "/projects/bespoke", // removed
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
