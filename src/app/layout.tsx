import type { Metadata } from 'next';
import { Figtree, Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import WhatsAppFloatingButton from '@/components/whatsapp-floating-button/whatsapp-floating-button';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'CupTime - Tea and Coffee Delivery',
    template: '%s | CupTime',
  },
  description:
    'CupTime is a dedicated Filter Coffee & Tea service, bringing rich tradition straight to your workspace. Rooted in the authentic flavors of Madurai, we honor the cultural ritual of enjoying Filter Coffee and Tea during work. With every flask we deliver, we bring not just a brew—but a moment of warmth, aroma, and renewed focus. CupTime bridges tradition and productivity, energizing your workday, one cup at a time.',
  keywords: [
    'coffee',
    'tea',
    'coffee delivery',
    'coffee delivery app',
    'tea delivery app',
    'tea delivery',
    'filter coffee',
    'office coffee',
    'filter coffee delivery',
    'tea delivery service',
    'office coffee service',
    'traditional filter coffee',
    'Madurai filter coffee',
    'workspace tea and coffee',
    'hot coffee flask delivery',
    'South Indian filter coffee',
    'corporate tea coffee supplier',
    'fresh coffee for offices',
    'employee refreshment services',
  ],
  authors: [{ name: 'CupTime' }],
  creator: 'CupTime',
  publisher: 'CupTime',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cuptime.com',
    siteName: 'CupTime',
    title: 'CupTime - Coffee and Tea Delivery',
    description:
      'CupTime is a dedicated Filter Coffee & Tea service, bringing rich tradition straight to your workspace. Rooted in the authentic flavors of Madurai, we honor the cultural ritual of enjoying Filter Coffee and Tea during work. With every flask we deliver, we bring not just a brew—but a moment of warmth, aroma, and renewed focus. CupTime bridges tradition and productivity, energizing your workday, one cup at a time.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
