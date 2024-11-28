export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Boksoondoga",
          "url": "https://en.boksoondoga.com",
          "logo": "https://en.boksoondoga.com/images/logo.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+82-52-264-3539",
            "contactType": "customer service",
            "email": "boksoondoga@gmail.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "48, Hyangsandong-gil",
            "addressLocality": "Sangbuk-myeon, Ulju-gun",
            "addressRegion": "Ulsan",
            "addressCountry": "KR"
          },
          "sameAs": [
            "https://www.instagram.com/boksoondoga/",
            "https://twitter.com/boksoondoga"
          ]
        })
      }}
    />
  )
} 