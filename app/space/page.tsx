import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Our Spaces | Boksoondoga Brewery, Restaurant & Stores',
  description: 'Explore Boksoondoga\'s locations: our traditional brewery in Ulsan, F1963 restaurant in Busan, and nationwide stores. Experience Korean makgeolli culture across South Korea.',
  keywords: 'Boksoondoga brewery Ulsan, F1963 Busan, Korean makgeolli stores, traditional brewery tours, makgeolli restaurant',
  openGraph: {
    title: 'Visit Boksoondoga | Brewery, Restaurant & Stores',
    description: 'Experience traditional Korean makgeolli culture at our locations',
    images: ['/images/space1_bg_img1.jpg'],
  },
};

// Add location structured data
const locationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Boksoondoga",
  "location": [{
    "@type": "Brewery",
    "name": "Boksoondoga Brewery",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Hyangsandong-gil",
      "addressLocality": "Ulju-gun",
      "addressRegion": "Ulsan",
      "addressCountry": "KR"
    },
    "telephone": "1577-6746",
    "image": "/images/space2_br_img1.jpg"
  }]
};

// Add this type definition at the top of the file
type StoreLocation = {
  name: string;
  address: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

// Add store data
const storeLocations: StoreLocation[] = [
  {
    name: "Seoul Store",
    address: "373-8, Cheongpa-ro, Yongsan-gu, Seoul",
    phone: "070-8015-3576",
    coordinates: { lat: 37.5326, lng: 126.9647 }
  },
  {
    name: "Osong Store",
    address: "123-2B, Osong Station Square, Cheongju-si, Chungbuk",
    phone: "070-8015-3179",
    coordinates: { lat: 36.6199, lng: 127.3292 }
  },
  {
    name: "Daejeon Store",
    address: "215-3, Dongdaejeon-ro, Dong-gu, Daejeon",
    phone: "070-8015-9287",
    coordinates: { lat: 36.3504, lng: 127.4347 }
  },
  {
    name: "Dongdaegu Store",
    address: "550, Dongdaegu-ro, Dong-gu, Daegu",
    phone: "070-8015-9247",
    coordinates: { lat: 35.8714, lng: 128.6298 }
  },
  {
    name: "Ulsan Store",
    address: "177-1, Samsan-dong, Nam-gu, Ulsan",
    phone: "070-8015-9048",
    coordinates: { lat: 35.5384, lng: 129.3114 }
  }
];

export default function SpacePage() {
  return (
    <main className={'flex flex-col bg-[#ffffe4]'}>
      {/* Add structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationStructuredData) }}
      />

      {/* Hero Section */}
      <section 
        className="relative w-screen py-64"
        style={{ backgroundImage: "url('/images/space1_bg_img1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-label="Brewery Introduction"
      >
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-8xl items-center font-light tracking-wider">Brewery</h1>
          <div className="absolute top-[50px] text-xl">Brewery</div>
          <div className="absolute bottom-[50px] text-xl">Ulsan</div>
        </div>
      </section>

      {/* Brewery Content */}
      <section className="py-44 flex justify-center text-black" aria-label="Brewery Details">
        <div className="flex flex-col mr-24 max-w-2xl">
          <h2 className="sr-only">About Our Brewery</h2>
          <p className="text-lg leading-relaxed">
            Located in Ulju-gun, Ulsan,<br/>
            our brewery creates new sensibilities by bringing together<br/>
            traditional foundations, natural fermentation culture,<br/>
            and diverse people.<br/><br/>
            
            The brewery is not just a building on the land,<br/>
            but resonates with the land, the passing of time,<br/>
            and the people who walk upon it,<br/>
            expanding its breath across the earth.<br/><br/>

            The maturing alcohol and the brewery that houses it<br/>
            breathe together, becoming a beacon illuminating the land.
          </p>
          <address className="mt-10 text-sm opacity-70 not-italic">
            <div className="font-medium">Tel: <a href="tel:1577-6746" className="hover:underline">1577-6746</a></div>
            <div>50 Hyangsandong-gil, Sangbuk-myeon, Ulju-gun, Ulsan</div>
            <div className="text-sm mt-2">Conveniently located near Ulsan KTX Station and West Ulsan IC.</div>
          </address>
        </div>
        <div className="flex flex-col">
          <Image 
            src="/images/space2_br_img1.jpg" 
            width={600} 
            height={450} 
            alt="Boksoondoga traditional brewery in Ulsan featuring traditional Korean architecture"
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="flex justify-center text-white h-[600px]" aria-label="F1963 Restaurant">
        <div className="relative w-full h-full flex justify-center items-center">
          <h2 className="absolute text-xl text-white pt-10 z-[2] mx-auto top-0">Restaurant</h2>
          <strong className="absolute text-7xl my-auto mx-auto z-[2]">F1963</strong>
          <div className="absolute text-xl text-white bottom-0 pb-10 z-[2] mx-auto"><strong>Busan</strong></div>
          <div
            className="absolute h-full w-full z-1 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('/images/space1_bg_img2.jpg')" }}
            role="img"
            aria-label="F1963 Restaurant in Busan"
          ></div>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-44 flex flex-col items-center text-black" aria-label="Nationwide Stores">
        <div className="flex justify-center w-full mb-20">
          <div className="flex flex-col mr-24 max-w-2xl">
            <h2 className="sr-only">Our Retail Locations</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Boksoondoga combines &apos;都&apos; (city) and &apos;家&apos; (home),<br/>
                expressing our wish to connect urban and rural areas.<br/>
                We operate stores at major train stations across regions.<br/>
                Our station stores are welcoming faces of Boksoondoga,<br/>
                greeting people traveling between cities and countryside.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image 
              src="/images/space4_shop_img1.jpg" 
              width={600} 
              height={450} 
              alt="Boksoondoga retail store showcasing traditional Korean makgeolli products"
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="mt-10 text-sm opacity-70">
              <dl className="grid grid-cols-2 gap-2">
                <dt>Business Days</dt>
                <dd>Open All Year</dd>
                <dt>Hours</dt>
                <dd>Varies by Location</dd>
              </dl>
              <Link 
                href="https://instagram.com/boksoondoga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block col-span-2 text-black hover:opacity-70 transition-opacity mt-4"
                aria-label="Follow Boksoondoga on Instagram"
              >
                instagram @boksoondoga
              </Link>
            </div>
          </div>
        </div>

        {/* New Store Locations List */}
        <div className="w-full max-w-6xl mt-20">
          <h3 className="text-2xl mb-10 text-center">Store Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {storeLocations.map((store, index) => (
                <div key={index} className="border-b pb-4">
                  <h4 className="font-bold mb-2">{store.name}</h4>
                  <p className="text-sm opacity-70">{store.address}</p>
                  <p className="text-sm opacity-70">Tel: {store.phone}</p>
                </div>
              ))}
            </div>
            
            {/* Google Maps Integration */}
            <div className="h-[500px] w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=boksoondoga+stores+in+korea`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}