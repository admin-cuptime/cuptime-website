import React from 'react';

const ContactMap = () => {
  return (
    <div className="flex items-center justify-center w-full md:w-[80%] mx-auto px-4 md:px-0">
      <div className="border-cuptime-gray h-50 w-full overflow-hidden rounded-lg border-2 bg-white md:h-110">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.10632417623!2d78.09677686443828!3d9.931744173347335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf633d31d6f5%3A0x55317bec2230d715!2sCup%20Time%20-%20Delivering%20Coffee%20%26%20Tea%20in%20Madurai!5e0!3m2!1sen!2sin!4v1747494577899!5m2!1sen!2sin"
          className="h-full w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
