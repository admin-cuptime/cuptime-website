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
  title: 'CupTime Website',
  description: 'CupTime Website',
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
