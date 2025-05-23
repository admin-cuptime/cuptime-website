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
            y: 100, 
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }}
          whileHover={{ 
            y: -6,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              
            }
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1,
            delay: 1.5
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white rounded-full p-3 drop-shadow-xl hover:bg-green-600 transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            <WhatAppIcon className="w-6 md:w-8 h-auto" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloatingButton;