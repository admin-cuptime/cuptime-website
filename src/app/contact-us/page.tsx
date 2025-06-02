
import ContactBusinessCard from '@/components/contact-businesscard/contact-businesscard';
import ContactMap from '@/components/contact-map/contact-map';
import GetinTouch from '@/components/contact-section/contact-getintouch';
import FamiliarProducts from '@/components/familiar-products/familiar-products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Contact Us | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'Contact Cup Time for any inquiries or support. We are here to help you with your beverage needs.',
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
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
};

const ContactPage = () => {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto space-y-20">
        <GetinTouch />
        <div className="mx-auto h-full w-full px-4 md:h-48 md:w-[80%] md:px-0">
          <ContactBusinessCard />
        </div>
        <ContactMap />
      </div>
      <FamiliarProducts />
    </>
  );
};
export default ContactPage;
