import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export default function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "mx-auto max-w-7xl px-6 py-20 sm:py-24",
        className
      )}
      {...props}
    />
  )
}
