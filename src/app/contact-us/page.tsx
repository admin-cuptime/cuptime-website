'use client';

import ContactBusinessCard from "@/components/businesscard-contact/contact-businesscard";
import ContactMap from "@/components/contact-map/contact-map";
import GetinTouch from "@/components/contact-section/contact-getintouch";

const ContactPage = () => {
  return (
      <div className="max-w-screen-3xl mx-auto space-y-32">
        <GetinTouch/>
        <ContactBusinessCard/>
        <section>
          <div className="space-y-16 pb-16">
        <ContactMap/>
          </div>
        </section>
      </div>
  );
};
export default ContactPage;