"use client"
import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    })

    if (response.ok) {
      setSubmitted(true)
    }

    setLoading(false)
  }

  if (submitted)
    return (
      <div className="p-6 bg-green-100 text-green-800 rounded-lg">
        Thank you! Your message has been sent.
      </div>
    )

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input name="name" type="text" placeholder="Name" required className="border rounded px-4 py-2 w-full" />
      <input name="email" type="email" placeholder="Email" required className="border rounded px-4 py-2 w-full" />
      <textarea name="message" placeholder="Message" rows={5} required className="border rounded px-4 py-2 w-full" />
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
