"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/assets/png/images';
import { motion } from 'framer-motion';
import deliveryImage from '@/assets/png/trust-delivery-time.png';

const TrustDelivery = () => {
    const deliveries = [
        {
            icon: images.deliveryimage.trust1.src,
            title: "Real-time Order tracking via our mobile app",
            
        },
        {
            icon: images.deliveryimage.trust2.src,
            title: "Time-slotted Delivery for peak-hours convenience",
            
        },
        {
            icon: images.deliveryimage.trust3.src,
            title: "Quality-packed in insulated flasks for temperature lock",
            
        },
    ];

    return (
        <section className="flex items-center h-full justify-center bg-white sm:px-8 md:px-16 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center">
                {/* Left Content Section */}
                <div className="content-section lg:w-1/2 relative flex flex-col justify-center p-8 gap-4">
                    <h2 className="lg:text-4xl text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Trusted. Timed. Delivered.</h2>
                    
                    <p className="text-base md:text-lg mb-3">
                        We understand that in a busy workplace, time is everything. That’s why we pride ourselves on
                    <span className="font-bold md:text-lg mb-3 p-1">
                         punctual delivery of every cup — hot, fresh, and on schedule.</span>
                    </p>
                    <div className="space-y-6">
                        {deliveries.map((timing, index) => (
                            <motion.div key={index} className="flex items-center gap-2">
                                <Image
                                    src={timing.icon}
                                    alt={timing.title}
                                    width={30}
                                    height={30}
                                    className="mr-4"
                                />
                                <div>
                                    <h3 className="md:text-lg text-base font-bold text-zinc-900">{timing.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="image-section lg:w-1/2 flex items-center justify-between p-8">
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