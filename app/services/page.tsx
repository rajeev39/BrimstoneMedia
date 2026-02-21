export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-darkbg">

      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <span className="inline-block px-4 py-1 text-sm font-medium text-accent border border-accent rounded-full">
          Strategic Expertise
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Comprehensive Political Consulting Services
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          We design, execute, and manage high-impact political campaigns 
          with precision strategy, data intelligence, and powerful messaging 
          tailored to modern electoral dynamics.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10">

          <Service
            title="Social Media Management"
            description="Strategic platform management, narrative building, digital reputation control, influencer alignment, and engagement optimization."
          />

          <Service
            title="Political Branding & Identity Development"
            description="Crafting powerful political identities through positioning strategy, message architecture, visual language, and voter-aligned storytelling."
          />

          <Service
            title="Speech Delivery & Media Training"
            description="Advanced leadership coaching for speeches, televised interviews, press conferences, and high-stakes public appearances."
          />

          <Service
            title="Election Strategy & War Room Planning"
            description="Constituency analytics, booth-level targeting, opposition mapping, voter segmentation, and real-time campaign intelligence."
          />

          <Service
            title="Content Creation & Messaging"
            description="Manifesto drafting, press releases, speechwriting, campaign scripts, digital creatives, and multilingual voter communication."
          />

          <Service
            title="Polling & Public Opinion Analysis"
            description="Scientific survey execution, sentiment tracking, perception management, and actionable strategic insights."
          />

          <Service
            title="Debate Preparation & Public Speaking Coaching"
            description="Mock debates, counter-narrative preparation, rebuttal structuring, and on-camera performance refinement."
          />

          <Service
            title="Campaign Designing & Creative Direction"
            description="High-impact visual campaigns, advertising strategy, political creatives, on-ground branding, and digital ad execution."
          />

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Build a Winning Strategy?
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Partner with a team that understands political dynamics, 
            voter psychology, and modern campaign warfare.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-3 bg-accent text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Get Strategic Consultation
          </a>
        </div>
      </section>

    </main>
  )
}

function Service({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-8 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden">
      
      {/* Gold Accent Line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent opacity-0 group-hover:opacity-100 transition"></div>

      <h3 className="text-xl font-semibold text-primary">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
