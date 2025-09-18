'use client';

import WhatAppIcon from '@/assets/svg/whatsapp.svg';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const WhatsAppFloatingButton = () => {
  const whatsappNumber = '919169166660';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const nearBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100;

      setIsVisible(scrollingUp || !nearBottom);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ 
            y: 70, 
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1,
          }}
          className="fixed bottom-18 right-2.5 z-40"
        >
          <Link 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white rounded-full p-3 drop-shadow-xl transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            <WhatAppIcon className="w-8 h-auto" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloatingButton;