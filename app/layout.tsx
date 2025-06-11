import type { Metadata } from "next";
import { Karla, Hanuman } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from './metadata'
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

// English primary font
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Khmer font
const hanuman = Hanuman({
  variable: "--font-hanuman",
  subsets: ["khmer"],
  weight: ["400", "700"],
});

export const metadata: Metadata = defaultMetadata

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Récupérer la locale et les messages
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Additional meta tags for better sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Social Sharing Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Naga Balm",
              "url": "https://nagabalm.com",
              "logo": "https://nagabalm.com/favicon.png",
              "sameAs": [
                "https://facebook.com/nagabalmkh",
                "https://instagram.com/nagabalm"
              ],
              "description": "Ancient Khmer healing traditions meet modern innovation. Premium balms handcrafted in Cambodia."
            }
          `}
        </script>
      </head>
      <body
        className={`${karla.variable} ${hanuman.variable} antialiased ${locale === 'km' ? 'font-hanuman' : 'font-karla'}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
