'use client';

import { useState } from 'react';

export default function Page() {
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
    <div className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36 min-h-screen'}>
      <div className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h2 className={'text-6xl font-bold'}>Contact Us</h2>
        <p className={'text-2xl'}>
          We'd love to hear from you.<br/>
          Get in touch with us for any inquiries.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-20 mb-32">
        <div className="space-y-12">
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className={'text-2xl font-bold mb-4'}>General Inquiries</h3>
            <p className={'text-lg text-[#666]'}>
              For general questions about our products, services, or company:
              <br/><br/>
              Email: boksoondoga@gmail.com<br/>
              Tel: +82-52-264-3539
            </p>
          </div>

          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className={'text-2xl font-bold mb-4'}>Business Hours</h3>
            <p className={'text-lg text-[#666]'}>
              Monday - Friday: 9:00 AM - 6:00 PM KST<br/>
              Saturday - Sunday: Closed
            </p>
          </div>

          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className={'text-2xl font-bold mb-4'}>Location</h3>
            <p className={'text-lg text-[#666]'}>
              48, Hyangsandong-gil,<br/>
              Sangbuk-myeon, Ulju-gun,<br/>
              Ulsan, Korea
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg">
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
        </div>
      </div>
    </div>
  );
} 