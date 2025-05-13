import React from "react";

const ContactMap = () => {
    return (
        <div
            className="flex items-center justify-center md:px-40 px-10"
            // style={{ height: "514px", padding: "250px" }}
        >
            <div className="md:h-110 h-50 overflow-hidden rounded-lg bg-white border-cuptime-gray border-2 w-full">
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0695495558813!2d78.13461807490607!3d9.925402190171927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5d869694bad%3A0x63fa87c371d093b3!2sCuptime!5e0!3m2!1sen!2sin!4v1701834058825!5m2!1sen!2sin"
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