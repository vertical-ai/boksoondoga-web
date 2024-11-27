'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-screen px-4 sm:px-[60px] py-[30px] box-border z-[100]">
      <div className="relative flex items-center">
        <div className="absolute right-0 top-[-20px] flex gap-2">
          <a 
            href="https://boksoondoga.com" 
            className="text-sm text-black hover:opacity-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            KR
          </a>
        </div>
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              height={40}
              width={238}
              alt="Boksoondoga"
              priority
            />
          </Link>
        </div>
        <nav className="flex gap-4 items-center mx-auto">
          <Link href="/about" className="text-xl text-black">About</Link>
          <Link href="/space" className="text-xl text-black">Space</Link>
          <Link href="/faq" className="text-xl text-black">FAQ</Link>
          <Link href="/contact" className="text-xl text-black">Contact</Link>
        </nav>
      </div>
    </header>
  );
} 