"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import deliveryImage from '@/assets/png/trust-delivery-time.png';
import trust1 from '@/assets/svg/fi_6046785.svg';
import trust2 from '@/assets/svg/peak-hour.svg';
import trust3 from '@/assets/svg/quality-check.svg';

const TrustDelivery = () => {
    const deliveries = [
        {
            // icon: images.deliveryimage.trust1.src,
            icon: trust1,
            title: "Real-time Order tracking via our mobile app",
            
        },
        {
            icon: trust2,
            title: "Time-slotted Delivery for peak-hours convenience",
            
        },
        {
            icon: trust3,
            title: "Quality-packed in insulated flasks for temperature lock",
            
        },
    ];

    return (
        <section className="flex items-center h-full justify-center bg-white sm:px-8 md:px-16 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-4">
                {/* Left Content Section */}
                <div className="content-section lg:w-1/2 relative flex flex-col justify-center gap-4">
                    <h2 className="lg:text-4xl text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Trusted. Timed. Delivered.</h2>
                    
                    <p className="text-base md:text-lg mb-3">
                        We understand that in a busy workplace, time is everything. That’s why we pride ourselves on
                    <span className="font-bold md:text-lg mb-3 p-1">
                         punctual delivery of every cup — hot, fresh, and on schedule.</span>
                    </p>
                    <div className="space-y-5">
                        {deliveries.map((timing, index) => (
                            <motion.div key={index} className="flex items-center gap-4">
                                {/* Render the icon using the Image component */}
                                <div className="flex-shrink-0">
                                  <timing.icon className="h-auto w-7" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg font-bold text-zinc-800">
                                      {timing.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Right Image Section */}
                <div className="image-section lg:w-1/2 flex items-center justify-between">
                    <Image
                        src={deliveryImage}
                        alt="Delivery Team"
                        className="rounded-lg"
                        width={580}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default TrustDelivery;