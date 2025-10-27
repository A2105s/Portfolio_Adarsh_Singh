export const BlackButtonLink: React.FC<{ children: React.ReactNode; href: string; target?: string }> = ({ children, href, target }) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="bubble-hover button-shadow flex w-fit items-center gap-1 rounded-full bg-black px-4 py-3 text-sm font-medium whitespace-nowrap text-white hover:translate-y-0.5 hover:shadow-none"
    >
      {children}
    </a>
  )
}
