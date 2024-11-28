'use client';

import { useState } from 'react';

// Add contact structured data
const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Boksoondoga Contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Boksoondoga",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-52-264-3539",
      "email": "boksoondoga@gmail.com",
      "contactType": "customer service",
      "availableLanguage": ["en", "ko"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48, Hyangsandong-gil",
      "addressLocality": "Ulju-gun",
      "addressRegion": "Ulsan",
      "addressCountry": "KR"
    }
  }
};

export default function ContactPage() {
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36 min-h-screen'}>
      {/* Add structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />

      <header className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h1 className={'text-6xl font-bold'}>Contact Us</h1>
        <p className={'text-2xl'}>
          We'd love to hear from you.<br/>
          Get in touch with us for any inquiries.
        </p>
      </header>

      <div className="mt-20 grid grid-cols-2 gap-20 mb-32">
        <aside className="space-y-12">
          <section className="bg-white/50 p-8 rounded-lg backdrop-blur-sm" aria-labelledby="general-inquiries">
            <h2 id="general-inquiries" className={'text-2xl font-bold mb-4'}>General Inquiries</h2>
            <address className={'text-lg text-[#666] not-italic'}>
              For general questions about our products, services, or company:
              <br/><br/>
              Email: <a href="mailto:boksoondoga@gmail.com" className="hover:underline">boksoondoga@gmail.com</a><br/>
              Tel: <a href="tel:+82522643539" className="hover:underline">+82-52-264-3539</a>
            </address>
          </section>

          <section className="bg-white/50 p-8 rounded-lg backdrop-blur-sm" aria-labelledby="business-hours">
            <h2 id="business-hours" className={'text-2xl font-bold mb-4'}>Business Hours</h2>
            <dl className={'text-lg text-[#666]'}>
              <dt>Monday - Friday</dt>
              <dd>9:00 AM - 6:00 PM KST</dd>
              <dt>Saturday - Sunday</dt>
              <dd>Closed</dd>
            </dl>
          </section>

          <section className="bg-white/50 p-8 rounded-lg backdrop-blur-sm" aria-labelledby="location">
            <h2 id="location" className={'text-2xl font-bold mb-4'}>Location</h2>
            <address className={'text-lg text-[#666] not-italic'}>
              48, Hyangsandong-gil,<br/>
              Sangbuk-myeon, Ulju-gun,<br/>
              Ulsan, Korea
            </address>
          </section>
        </aside>

        <section className="bg-white p-10 rounded-lg shadow-lg" aria-labelledby="contact-form">
          <h2 id="contact-form" className="sr-only">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="access_key" 
              value="f9daca4b-87cc-4d0a-8024-41f5df7e7428"
            />

            {status.message && (
              <div 
                className={`p-4 rounded-md ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black/5 focus:border-black transition-colors"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-black text-white py-3 px-6 rounded-md transition-all
                ${isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-800 hover:shadow-md active:transform active:scale-[0.99]'
                }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
} 