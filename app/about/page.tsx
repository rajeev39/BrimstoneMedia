// app/about/page.tsx (server component)
import ClientAbout from "./ClientAbout"

export const metadata = {
  title: "About Us",
  description: "Who we are and how we help political organizations win.",
}

export default function AboutPage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <ClientAbout />
      </div>
    </section>
  )
}
