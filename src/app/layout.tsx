import type { Metadata } from 'next';
import { Figtree, Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import WhatsAppFloatingButton from '@/components/whatsapp-floating-button/whatsapp-floating-button';
import CollectChat from '@/components/collect-chat/collect-chat';
import SalesIQ from '@/components/sales-iq/sales-iq';
import Script from 'next/script';


const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

     <head>
       {/* Zoho PageSense */}
       <script src="https://cdn-in.pagesense.io/js/60049847702/aa0c14ad9dcb4c0f97ae69b6ad159f0a.js"></script>
       </head>

      {/* Google Analytics */}
       <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J0120KX6ED"
        strategy="afterInteractive"
       />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-J0120KX6ED');
         `}
      </Script>

      <body className={`${figtree.variable} ${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
        {/* <CollectChat /> */}
        <SalesIQ /> 
      </body>
    </html>
  );
}
