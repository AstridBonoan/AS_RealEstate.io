import { useState, type FormEvent } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-sand-50 py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-500">Contact</p>
            <h2
              id="contact-heading"
              className="font-display mt-2 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl"
            >
              Tell us what you are planning
            </h2>
            <p className="mt-4 text-brand-700">
              Share a short note and we will follow up. Replace the details below with your live phone,
              email, and office address when you go live.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-brand-950">Phone</dt>
                <dd>
                  <a href="tel:+15555550100" className="text-brand-700 underline-offset-2 hover:underline">
                    (555) 555-0100
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-950">Email</dt>
                <dd>
                  <a
                    href="mailto:hello@asenterprises.example"
                    className="text-brand-700 underline-offset-2 hover:underline"
                  >
                    hello@asenterprises.example
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-950">Office</dt>
                <dd className="text-brand-700">Your street, City, ST 00000</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-brand-800/10 bg-white p-6 shadow-sm sm:p-8">
            {sent ? (
              <p className="text-brand-800" role="status">
                Thanks—this demo form does not send mail yet. Wire it to your backend or a form
                service when you are ready.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-950">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1 w-full rounded-lg border border-brand-800/15 bg-sand-50 px-3 py-2 text-sm text-brand-950 outline-none ring-brand-950/20 focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-950">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1 w-full rounded-lg border border-brand-800/15 bg-sand-50 px-3 py-2 text-sm text-brand-950 outline-none ring-brand-950/20 focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-950">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-1 w-full rounded-lg border border-brand-800/15 bg-sand-50 px-3 py-2 text-sm text-brand-950 outline-none ring-brand-950/20 focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brand-950">
                    Service category
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 w-full rounded-lg border border-brand-800/15 bg-sand-50 px-3 py-2 text-sm text-brand-950 outline-none ring-brand-950/20 focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="construction">Construction / renovation</option>
                    <option value="real-estate">Real estate</option>
                    <option value="both">Both / not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-950">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 w-full resize-y rounded-lg border border-brand-800/15 bg-sand-50 px-3 py-2 text-sm text-brand-950 outline-none ring-brand-950/20 focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-950 py-3 text-sm font-semibold text-sand-50 transition hover:bg-brand-800 sm:w-auto sm:px-8"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
