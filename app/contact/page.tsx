import ContactForm from "@/components/ContactForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Brimstone media",
  description: "Contact Brimstone media for political strategy, technology, and data-driven solutions.",
}

export default function ContactPage() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Brimstone media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <div className="flex flex-col gap-4 h-full">
      
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13814.89584149624!2d77.3073005!3d28.4021697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c72c1e5c9d%3A0x0!2sHSIIDC%20Industrial%20Area%2C%20Sector%2031%2C%20Faridabad%2C%20Haryana%20121003%2C%20India!5e0!3m2!1sen!2sin!4v1725750000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      loading="lazy"
    ></iframe>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            Brimstone media Headquarters<br />
            150 A,HSIIDC<br />
            Industrial Area Faridabad 121003<br />
            Email: info@brimstonemedia.in
          </div>
        </div>
      </div>
    </div>
  )
}
