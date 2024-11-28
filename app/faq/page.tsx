import { Metadata } from 'next';

// Add metadata export
export const metadata: Metadata = {
  title: 'FAQ & Support | Boksoondoga Makgeolli',
  description: 'Find answers about Boksoondoga Makgeolli shipping, returns, storage, and serving instructions. Get support for orders and learn how to best enjoy our traditional Korean rice wine.',
  keywords: 'Boksoondoga FAQ, Makgeolli shipping, returns policy, storage instructions, how to serve Makgeolli',
};

// Add FAQ structured data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the shipping schedule?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For same-day shipping, orders must be placed and paid by 2 PM. Orders placed after 2 PM Friday through weekend will be shipped the following Monday."
    }
  },
  // ... add other FAQ items
  ]
};

export default function FAQPage() {
  return (
    <main className={'flex flex-col bg-[#ffffe4] pt-48 text-black px-36'}>
      {/* Add structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <header className={'flex flex-col gap-7 text-center border-b border-black pb-7 mb-7'}>
        <h1 className={'text-6xl font-bold'}>Support</h1>
        <p className={'text-2xl'}>
          For general inquiries and <strong>bulk orders (corporate gifts)</strong><br/>
          Please call us for immediate assistance.
        </p>
      </header>

      <article className="mt-36">
        <section className={'mb-20'} aria-labelledby="shipping-schedule">
          <h2 id="shipping-schedule" className={'pb-4 border-b border-black mb-4'}>Shipping Schedule</h2>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              For same-day shipping, please place your order and complete payment by 2 PM. Orders placed after 2 PM on Friday through weekend (Sat/Sun) will be shipped sequentially on the following Monday.
            </p>
            <p>
              If you need delivery on a specific date, please request it through the delivery message option.
            </p>
            <p>
              During high-volume periods, orders are processed sequentially. Shipping may be delayed depending on stock availability. Please consider potential schedule changes before placing your order.
            </p>
          </div>
        </section>

        <section className={'mb-20'} aria-labelledby="returns-policy">
          <h2 id="returns-policy" className={'pb-4 border-b border-black mb-4'}>Returns / Exchanges / Refunds</h2>
          <div className={'grid grid-cols-3 gap-4 text-[#666]'}>
            <p>
              Exchanges and returns are possible within 7 days of receiving the product. For exchange or return requests, please contact our customer service (070.4144.4620) or send a message through our inquiry menu for prompt and accurate processing.
            </p>
            <p>
              For returns due to change of mind, customers must cover shipping costs (round-trip shipping for free delivery items). Exchanges and refunds are not possible if the product has been opened or damaged/deteriorated.
            </p>
            <p>
              For products with a shelf life of less than one month, please order carefully as contents may deteriorate.
            </p>
          </div>
        </section>

        <div className={'grid grid-cols-3'}>
          <section className={'mb-20'} aria-labelledby="packaging-storage">
            <h2 id="packaging-storage" className={'pb-4 border-b border-black mb-4'}>Packaging and Storage</h2>
            <div className={'text-[#666] pr-4'}>
              <p>
                Boksoondoga products are safely delivered in styrofoam boxes with ice packs to maintain freshness. Please refrigerate immediately upon receipt!
              </p>
            </div>
          </section>

          <section className={'mb-20'} aria-labelledby="opening-instructions">
            <h2 id="opening-instructions" className={'pb-4 border-b border-black mb-4'}>How to Open Boksoondoga Makgeolli</h2>
            <div className={'text-[#666] pr-4'}>
              <ol className="list-decimal pl-5">
                <li>Turn the bottle upside down and shake well to mix the sediment, then place in freezer for 10 minutes.</li>
                <li>Tilt almost horizontally and slowly open/close the cap 3-5 times.</li>
                <li>After confirming the carbonation has been released, enjoy your drink.</li>
              </ol>
            </div>
          </section>

          <section className={'mb-20'} aria-labelledby="best-enjoyment">
            <h2 id="best-enjoyment" className={'pb-4 border-b border-black mb-4'}>How to Best Enjoy</h2>
            <div className={'text-[#666]'}>
              <p>
                Boksoondoga traditional alcohol offers various flavors depending on storage method and duration. Particularly, Boksoondoga Makgeolli becomes more refreshing at lower temperatures.<br/>
                At higher temperatures, the refreshing quality decreases and acidity increases, so adjust the temperature according to your preference!
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}