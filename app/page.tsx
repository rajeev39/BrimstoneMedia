"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { siteCopy } from "@/content/siteCopy"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  MessageSquare,
  Zap,
  Users,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react"
import TestimonialsSlider from "@/components/testimoniol-slider"


export default function HomePage() {
  // Dark Mode Toggle
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const strategyIcons = [MessageSquare, Zap, Users, Globe, Shield, TrendingUp]

  // Scroll animation variants
  const revealVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <>
  
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
  {/* Hero Video */}
  <video
    autoPlay
    muted
    loop
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/images/BrimstoneMedia.mp4" type="video/mp4" />
  </video>

  {/* Brand Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/40 via-blue-50/30 to-red-50/40 dark:from-gray-900/70 dark:via-gray-800/60 dark:to-gray-700/80" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center text-center px-6 text-white">
    {/* Badge */}
    <Badge
      variant="outline"
      className="mb-6 border-yellow-400 bg-yellow-50 text-yellow-600"
    >
      {siteCopy.hero.badge}
    </Badge>

    {/* Headline */}
    <motion.h1
      className="mb-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={revealVariant}
    >
      {siteCopy.hero.headline}
    </motion.h1>

    {/* Subheadline */}
    <motion.p
      className="mb-8 text-lg sm:text-xl text-gray-800 dark:text-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={revealVariant}
    >
      {siteCopy.hero.subheadline}
    </motion.p>

    {/* CTAs */}
    <motion.div
  className="flex flex-col gap-4 sm:flex-row justify-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={revealVariant}
>
  <Link href="/services">
    <Button
      size="lg"
      className="px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      Explore Strategies <ArrowRight className="h-4 w-4" />
    </Button>
  </Link>

  <Link href="/contact">
    <Button
      size="lg"
      variant="outline"
      className="px-8 py-4 text-lg font-semibold rounded-full border-yellow-400 text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-600/20 transition-colors duration-300"
    >
      Get in Touch
    </Button>
  </Link>
</motion.div>


    {/* Dark Mode Toggle */}


   
    
  </div>
</section>


   
   {/* ================= POLITICAL SERVICES ================= */}
<section className="py-20 bg-gray-50 dark:bg-gray-900">
  <div className="mx-auto max-w-6xl px-6">
    <div className="mb-12 text-center">
      <h2 className="mb-4 font-serif text-3xl sm:text-4xl font-bold">
        Our Political Services
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
        Comprehensive campaign solutions to amplify your voice, shape perception, and drive results.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Social Media Management",
          description: "Data-driven management of your digital presence to maximize reach and influence.",
          icon: Zap,
        },
        {
          title: "Political Branding & Identity Development",
          description: "Craft a strong, authentic political identity that resonates with voters.",
          icon: Shield,
        },
        {
          title: "Speech Delivery & Media Training",
          description: "Refine your messaging and confidence for interviews, debates, and public appearances.",
          icon: MessageSquare,
        },
        {
          title: "Election Strategy",
          description: "Design evidence-based campaign strategies that convert vision into votes.",
          icon: TrendingUp,
        },
        {
          title: "Content Creation",
          description: "Compelling visuals, videos, and written content to mobilize and engage audiences.",
          icon: Globe,
        },
        {
          title: "Polling & Public Opinion Analysis",
          description: "Gather insights on voter sentiment and make data-backed campaign decisions.",
          icon: Users,
        },
        {
          title: "Debate Preparation & Public Speaking Coaching",
          description: "Build confidence, persuasive skills, and argument clarity for debates and events.",
          icon: Zap,
        },
        {
          title: "Campaign Designing",
          description: "End-to-end campaign visuals, rally branding, and communication materials.",
          icon: Shield,
        },
      ].map((service, idx) => {
        const Icon = service.icon
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        )
      })}
    </div>
  </div>
</section>
    {/* ================= Our Client================= */}
    <section className="py-16 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
      Trusted by Industry Leaders
    </h2>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      We’re proud to partner with top organizations across industries
    </p>

    <div className="mt-10 grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {[
        "/images/INC_logo.jpg",
        "/images/tmc_logo.jpg",
        "/images/ncp.png",
        "/images/Azad-logo.png",
      ].map((src, idx) => (
        <div
          key={idx}
          className="flex justify-center items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 transition hover:shadow-lg"
        >
          <Image
            src={src}
            alt={`Client logo ${idx + 1}`}
            width={120}
            height={80}
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
          />
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ================= ROADMAP TIMELINE ================= */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <motion.h2
              className="mb-4 font-serif text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Political PR Roadmap
            </motion.h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              A structured 8-step framework from strategy to victory.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-2">
            {siteCopy.framework.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="mx-auto max-w-4xl text-center px-6">
          <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
            <CardContent className="p-8 sm:p-12">
              <h2 className="mb-4 font-serif text-3xl sm:text-4xl font-bold">
                {siteCopy.cta.title}
              </h2>
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
                {siteCopy.cta.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Link href="/case-studies">
                  <Button size="lg" className="gap-2 bg-blue-600 hover:bg-red-600">
                    View Case Studies <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* ================= MAJOR CLIENTS & TESTIMONIALS ================= */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
  <TestimonialsSlider />
</section>

    </>
  )
}
