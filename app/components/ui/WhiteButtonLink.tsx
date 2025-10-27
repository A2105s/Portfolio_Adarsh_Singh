export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string; target?: string }> = ({ children, href, className, target }) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={
        "bubble-hover flex w-fit items-center gap-1 rounded-full border border-gray-300! bg-white px-4 py-3 text-sm font-medium whitespace-nowrap text-black shadow-lg transition-all duration-300 hover:translate-y-0.5 hover:shadow-none " +
        className
      }
    >
      {children}
    </a>
  )
}
