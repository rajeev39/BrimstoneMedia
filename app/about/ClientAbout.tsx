// app/about/ClientAbout.tsx
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ClientAbout() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 font-serif text-4xl font-bold">
          About Brimstone Media
        </h1>
        <p className="text-lg text-muted-foreground">
          We don't just manage political communication—we shape public perception and build winning narratives...
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {["Experience", "Integrity", "Impact"].map((value) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 font-semibold">{value}</h3>
                <p className="text-sm text-muted-foreground">
                  We operate in high-stakes environments where trust and results matter.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
