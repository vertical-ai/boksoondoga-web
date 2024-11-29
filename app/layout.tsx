import type {Metadata} from "next";
import "./globals.css";
import Image           from "next/image";
import Link            from "next/link";
import JsonLd from './components/JsonLd';

export const metadata: Metadata = {
  title: "Boksoondoga | Traditional Korean Alcohol with Modern Sensibility",
  description: "Experience the authentic taste of Korean traditional alcohol. Boksoondoga crafts premium makgeolli using time-honored methods and the finest Korean ingredients.",
  keywords: ["Boksoondoga", "Korean alcohol", "Makgeolli", "Traditional brewing", "Korean rice wine", "Ulsan brewery"],
  openGraph: {
    title: 'Boksoondoga',
    description: 'Traditional Korean Alcohol with Modern Sensibility',
    url: 'https://en.boksoondoga.com',
    siteName: 'Boksoondoga',
    images: [
      {
        url: 'https://en.boksoondoga.com/boksoondoga-og-image2.jpeg?v=1',
        width: 1200,
        height: 630,
        alt: 'Traditional Korean Alcohol with Modern Sensibility - Boksoondoga',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boksoondoga',
    description: 'Traditional Korean Alcohol with Modern Sensibility',
    images: ['https://en.boksoondoga.com/boksoondoga-og-image2.jpeg'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: 'QwbjsdzN-ilx8gxlqaL',
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`overflow-y-scroll overflow-x-hidden h-full bg-white`}
      >

      <header className="fixed left-0 top-0 w-screen px-[60px] py-[30px] box-border z-[100]">
        <div className="relative flex items-center">
          <div className="absolute right-0 top-[-20px] flex gap-2">
            <a 
              href="https://boksoondoga.com" 
              className={'text-sm text-black hover:opacity-75'}
              target="_blank"
              rel="noopener noreferrer"
            >
              KR
            </a>
            {/* <span className="text-sm text-black">|</span> */}
            {/* <a 
              href="https://jp.boksoondoga.com" 
              className={'text-sm text-black hover:opacity-75'}
              target="_blank"
              rel="noopener noreferrer"
            >
              JP
            </a> */}
          </div>
          <div className="header-logo">
            <Link href="/">
              <Image
                src={"/images/logo.jpg"}
                height={40}
                width={238}
                alt="Boksoondoga"/>
            </Link>
          </div>
          <nav className="flex gap-4 items-center mx-auto">
            <Link href={'/about'} className={'text-xl text-black'}>About</Link>
            <Link href={'/blog'} className={'text-xl text-black'}>Blog</Link>
            <Link href={'/space'} className={'text-xl text-black'}>Space</Link>
            <Link href={'/faq'} className={'text-xl text-black'}>FAQ</Link>
            <Link href={'/contact'} className={'text-xl text-black'}>Contact</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="flex py-10 text-black opacity-50 text-sm">
        <div className="mx-auto items-center flex flex-col">
          <div className="flex gap-4 mb-6">
            <a
              href="https://www.instagram.com/boksoondoga/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              Instagram
            </a>
            <a
              href="http://twitter.com/boksoondoga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-col text-center gap-2">
            <div>
              <span className="font-bold">Boksoondoga Co., Ltd.</span>
              <span> | Representative: Kim Jeong-sik</span>
            </div>
            <address className="not-italic">
              48, Hyangsandong-gil, Sangbuk-myeon, Ulju-gun, Ulsan, Korea
            </address>
            <div>
              <span>Tel: +82-52-264-3539</span>
              <span> | </span>
              <a href="mailto:boksoondoga@gmail.com" className="hover:underline">
                boksoondoga@gmail.com
              </a>
            </div>
            <div className="mt-2">
              © 2020 <strong>Boksoondoga</strong>. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
