import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nagabalm.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Naga Balm | Ancient Khmer Healing Traditions',
    template: '%s | Naga Balm'
  },
  description: 'Ancient Khmer healing traditions meet modern innovation. Premium balms handcrafted in Cambodia, bringing traditional wellness to the modern world.',
  keywords: ['Naga Balm', 'Khmer healing', 'traditional medicine', 'Cambodia', 'natural remedies', 'pain relief', 'wellness'],
  authors: [{ name: 'Naga Balm' }],
  creator: 'Naga Balm',
  publisher: 'Naga Balm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Naga Balm',
    title: 'Naga Balm | Ancient Khmer Healing Traditions',
    description: 'Ancient Khmer healing traditions meet modern innovation. Premium balms handcrafted in Cambodia.',
    images: [
      {
        url: '/images/Naga Balm__SecondaryLogomark_Primary.png',
        width: 1200,
        height: 630,
        alt: 'Naga Balm Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naga Balm | Ancient Khmer Healing Traditions',
    description: 'Ancient Khmer healing traditions meet modern innovation. Premium balms handcrafted in Cambodia.',
    creator: '@nagabalm',
    images: [{
      url: '/images/Naga Balm__SecondaryLogomark_Primary.png',
      width: 1200,
      height: 630,
      alt: 'Naga Balm Logo',
      type: 'image/png',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    }
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': '/en-US',
      'km-KH': '/km-KH',
    },
  },
  other: {
    'theme-color': '#F9461C',
    'msapplication-TileColor': '#F9461C',
    'msapplication-config': '/browserconfig.xml',
  }
} 
