'use client';

export default function Footer() {
  return (
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
            <span className="hidden sm:inline"> | </span>
            <span>Representative: Kim Jeong-sik</span>
          </div>
          <address className="not-italic">
            48, Hyangsandong-gil, Sangbuk-myeon, Ulju-gun, Ulsan, Korea
          </address>
          <div>
            <span>Tel: +82-52-264-3539</span>
            <span className="hidden sm:inline"> | </span>
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
  );
} 