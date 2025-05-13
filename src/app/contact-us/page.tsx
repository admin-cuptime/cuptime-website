'use client';

import ContactBusinessCard from '@/components/contact-businesscard/contact-businesscard';
import ContactMap from '@/components/contact-map/contact-map';
import GetinTouch from '@/components/contact-section/contact-getintouch';
import FamiliarProducts from '@/components/familiar-products/familiar-products';

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
