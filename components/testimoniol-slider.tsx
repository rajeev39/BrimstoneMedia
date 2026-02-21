"use client"

import { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { motion } from "framer-motion"

export default function TestimonialsSlider() {
  const testimonials = [
    {
      quote: "Brimstone transformed our campaign outreach and voter engagement.",
      author: "Campaign Manager, INC",
    },
    {
      quote: "Strategic guidance and messaging precision helped us win key constituencies.",
      author: "Political Advisor, TMC",
    },
    {
      quote: "The team’s insight into public sentiment and social media impact is unparalleled.",
      author: "Spokesperson, NCP",
    },
    {
      quote: "Brimstone’s strategies helped us connect authentically with voters.",
      author: "Campaign Lead, ASP",
    },
  ]

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  })

  // Autoplay every 5s
  useEffect(() => {
    const timer = setInterval(() => slider?.current?.next(), 5000)
    return () => clearInterval(timer)
  }, [slider])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            What Leaders Say
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative mt-12">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="keen-slider__slide flex justify-center"
              >
                <motion.div
                  className="mb-8 rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <p className="text-lg italic text-gray-800 dark:text-gray-100 mb-4">
                    “{t.quote}”
                  </p>
                  <p className="font-semibold text-gray-600 dark:text-gray-300">
                    — {t.author}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider?.current?.moveToIdx(idx)}
                className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
