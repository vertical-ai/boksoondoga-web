import { Metadata } from 'next';
import VimeoPlayer from "@/app/components/VimeoPlayer";
import Image       from "next/image";
import Link        from "next/link";

// Add metadata export
export const metadata: Metadata = {
  title: 'About Boksoondoga | Traditional Korean Makgeolli Brewery',
  description: 'Discover Boksoondoga\'s dedication to traditional Korean makgeolli brewing, our fermentation culture, and architectural philosophy. Learn about our locations in Ulsan, Busan, and nationwide.',
  keywords: 'Boksoondoga brewery, traditional makgeolli, Korean rice wine, fermentation culture, Ulsan brewery, Busan F1963',
  openGraph: {
    title: 'About Boksoondoga | Traditional Korean Makgeolli Brewery',
    description: 'Traditional Korean makgeolli brewing with motherly devotion',
    images: ['/images/about1_bg_img1_edit1.jpg'],
  },
};

// Add organization structured data
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Boksoondoga",
  "description": "Traditional Korean Makgeolli brewery dedicated to crafting premium rice wine using traditional methods.",
  "url": "https://boksoondoga.com",
  "location": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ulsan",
      "addressCountry": "KR"
    }
  }
};

export default function AboutPage() {
  return (
    <main className={'flex flex-col bg-[#ffffe4]'}>
      {/* Add structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />

      <section 
        className={`bg-[url('/images/about1_bg_img1_edit1.jpg')] bg-no-repeat bg-center bg-cover w-screen py-44`}
        aria-label="Company Philosophy">
        <div className={'flex flex-col items-center justify-center'}>
          <h1 className={'text-8xl font-bold text-white tracking-wide'}>
            Crafting with Time and Dedication
          </h1>
          <div className={'text-2xl items-center flex text-white mt-8'}>
            <strong>Creating makgeolli with motherly devotion -<br/>
              this is Boksoondoga&apos;s core belief.<br/><br/>

              Following a mother&apos;s heart to give only the best,<br/>
              we use only Korean-grown rice<br/>
              following traditional methods,<br/>
              brewing in ancient earthenware jars.<br/><br/>

              The natural carbonation created by living yeast<br/>
              is a gift from the patient fermentation process.</strong>
          </div>
        </div>
      </section>

      <section className={'py-44 flex justify-center text-black'} aria-label="Fermentation Culture">
        <div className={'flex flex-col mr-24'}>
          <h2 className={'text-6xl'}>Sustaining<br/>Value,<br/>Fermentation Culture</h2>
          <p className={'mt-auto'}>
            Boksoondoga continuously develops<br/>
            not only premium traditional alcohol but also<br/>
            various content under the theme of fermentation culture,<br/>
            including cosmetics, restaurants, and pubs.<br/>
            Fermentation culture transcends spaces to create<br/>
            new value by harmonizing with diverse fields.
          </p>
        </div>
        <div>
          <Image 
            src={'/images/about1_fc_img2.jpg'} 
            width={600} 
            height={450.23} 
            alt={'Boksoondoga fermentation culture process and products'}
            loading="eager"
          />
        </div>
      </section>

      <section className={'flex justify-center text-black h-[600px]'} aria-label="Our Locations">
        <div className={'relative w-full h-full'}>
          <Link href="/space/ulsan" className={'flex justify-center'} aria-label="Visit our Ulsan Brewery page">
            <h3 className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>Ulsan</h3>
            <strong className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}>Brewery</strong>
            <div 
              className="bg-[url('/images/about2_bg_img1.jpg')] absolute h-full w-full z-1"
              role="img" 
              aria-label="Ulsan Brewery location"
            ></div>
          </Link>
        </div>
        <div className={'relative w-full h-full'}>
          <Link href="/space/busan" className={'flex justify-center'} aria-label="Visit our Busan Brewery page">
            <h3 className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>Busan</h3>
            <strong className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}>F1963</strong>
            <div className="bg-[url('/images/about2_bg_img2.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
        <div className={'relative w-full h-full'}>
          <Link href="/space/domestic" className={'flex justify-center'} aria-label="Visit our Domestic Stores page">
            <h3 className={'absolute text-2xl text-white pt-10 z-[2] mx-auto'}>Domestic</h3>
            <strong className={'absolute text-7xl text-white bottom-0 pb-10 z-[2] mx-auto'}>Stores</strong>
            <div className="bg-[url('/images/about2_bg_img4.jpg')] absolute h-full w-full z-1"></div>
          </Link>
        </div>
      </section>

      <section className={'py-44 flex justify-center text-black'} aria-label="Change and Circulation, Fermentation Architecture">
        <div className={'flex flex-col mr-24'}>
          <h2 className={'text-6xl'}>Change and<br/>Circulation,<br/>Fermentation Architecture</h2>
          <div className={'mt-auto'}>
            <Link href="https://barhyoarch.com/"
                  className={'text-black font-bold border border-black py-4 px-5 font-roboto-condensed'}>Link</Link>
          </div>
        </div>
        <div>
          <p className={'pt-auto'}>
            The brewery&apos;s eldest son, Min-gyu, reinterpreted the concept of fermentation<br/>
            from fermented drinks to architectural spaces, defining fermentation architecture as<br/>
            the process by which spaces become beneficial to humans.<br/><br/>

            Just as rice and yeast transform into traditional alcohol through fermentation,<br/>
            our brewery incorporates Korean materials like soil, rice paddies, straw, and yeast.<br/>
            These elements transcend their primary architectural purpose to harmonize with<br/>
            sound, video, and installation art, creating new performance objects.<br/><br/>

            We created the brewery&apos;s interior and exterior spaces hoping that fermentation architecture<br/>
            would become a grand kiln containing time, matter, and circulation.<br/>
            Going forward, we will continue to capture how the architectural materials<br/>
            and structures within the brewery become increasingly meaningful to people over time.
          </p>
        </div>
      </section>

      <section className={'flex justify-center'} aria-label="Fermentation Architecture">
        <Image src={'/images/about1_fa_img1.jpg'} alt={'Fermentation Architecture'} width={1060} height={600}/>
      </section>

      <section className={'flex justify-center py-20'} aria-label="Vimeo Video">
        <div className={'w-[1060px]'}>
          <VimeoPlayer videoId={'152109556'}/>
        </div>
      </section>
    </main>
  );
}