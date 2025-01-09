'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.linkya07.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.linkya07.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Cuantoto : Daftar Slot Online Dan Slot Online Terpercaya",
            "reviewBody": "Cuantoto : Daftar Slot Online Dan Slot Online Terpercaya, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Cuantoto : Daftar Slot Online Dan Slot Online Terpercaya</title>
        <meta name="description" content="Cuantoto hadir sebagai salah satu platform terbaik untuk Anda yang mencari pengalaman bermain slot online berkualitas dan terpercaya. Dengan berbagai pilihan permainan slot yang lengkap dan menarik, Cuantoto memastikan setiap pemain dapat menikmati sensasi permainan yang seru dan menguntungkan" />
        <meta name="keywords" content="Cuantoto, Daftar Slot Online, Slot Gacor Terbaru 2025, Slot Dana 5000, Deposit Pulsa Tanpa Potongan, Slot RTP Tertinggi Hari Ini, Olympus Slot, Situs Slot Deposit Via E Wallet, Slot Deposit Pulsa, Slot Tanpa Deposit, Situs Deposit 5000, Slot Deposit 1000 Via Dana, Slot Online Terpercaya" />
        <meta name="google-site-verification" content="eBm286QQ_HqmyMdEDlV-ShjbP5ni04j8yJ_kMekrslo" />
        <meta name="application-name" content="cuantoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="cuantoto" />
        <meta name="publisher" content="cuantoto" />
        <meta name="copyright" content="cuantoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Cuantoto : Daftar Slot Online Dan Slot Online Terpercaya" />
        <meta property="og:description" content="Cuantoto : Daftar Slot Online Dan Slot Online Terpercaya, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="cuantoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="cuantoto" />
        <meta name="twitter:title" content="Cuantoto : Daftar Slot Online Dan Slot Online Terpercaya" />
        <meta name="twitter:description" content="Cuantoto : Daftar Slot Online Dan Slot Online Terpercaya, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
