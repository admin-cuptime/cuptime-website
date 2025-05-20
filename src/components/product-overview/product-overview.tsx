'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowUpRight } from '@tabler/icons-react';
import ServedHot from '@/assets/svg/served-hot.svg';
import ServedCold from '@/assets/svg/served-cold.svg';
import FlaskHand from '@/assets/png/flask-hand.png';
import { fetchProductsData } from '@/app/api/products';

const SkeletonCard = () => (
  <div className="flex h-[300px] w-full animate-pulse flex-col items-center justify-center rounded-xl bg-zinc-800 md:w-[250px]">
    <div className="mb-4 h-[200px] w-[200px] rounded bg-zinc-700" />
    <div className="mb-2 h-6 w-1/2 rounded bg-zinc-700" />
    <div className="h-4 w-3/4 rounded bg-zinc-700" />
  </div>
);

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-cuptime-midnight hover:bg-cuptime-midnight group relative flex h-[300px] w-full flex-col items-center justify-between rounded-xl border-1 border-transparent p-5 transition-all duration-300 hover:border-zinc-300 md:w-[300px] md:bg-transparent">
      {product.isServedHot !== 'N/A' && (
        <>
          {product.isServedHot === 'TRUE' && (
            <div className="absolute top-2 left-2 hidden transition-all duration-300 group-hover:flex">
              <div className="flex items-center gap-1">
                <ServedHot className="h-auto w-4 md:h-auto md:w-5" />
                <div className="text-sm font-semibold text-white">Hot</div>
              </div>
            </div>
          )}
          {product.isServedHot === 'FALSE' && (
            <div className="absolute top-2 left-2 hidden transition-all duration-300 group-hover:flex">
              <div className="flex items-center gap-1">
                <ServedCold className="h-auto w-4 md:h-auto md:w-5" />
                <div className="text-sm font-semibold text-white">Cold</div>
              </div>
            </div>
          )}
        </>
      )}
      <div className="absolute top-2 right-2 hidden transition-all duration-300 group-hover:flex">
        <Link
          href="https://apps.apple.com/in/app/cup-time/id1645852379"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 hidden transition-all duration-300 group-hover:flex"
        >
          <IconArrowUpRight className="h-6 w-6 text-white" />
        </Link>
      </div>
      <div
        className="h-[200px] w-[200px] bg-contain bg-center bg-no-repeat transition-all duration-300 md:group-hover:h-[160px] md:group-hover:w-[160px]"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white/10 p-2 text-white">
        <div className="text-lg font-semibold">{product.name}</div>
        <div className="flex flex-col items-center justify-center overflow-hidden text-center text-xs transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-20 md:group-hover:opacity-100">
          {product.description}
        </div>
      </div>
    </div>
  );
};

const ProductOverview = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchProductsData();
      if (Array.isArray(data)) {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="bg-cuptime-black relative flex flex-col items-center justify-center gap-12 overflow-x-clip py-20">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          damping: 12,
          stiffness: 100,
          delay: 0.4,
        }}
        className="absolute -top-18 right-0 z-10 hidden w-40 transform drop-shadow-xl md:block md:h-60"
      >
        <img src={FlaskHand.src} alt="Delivery Executive" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-violet-500 to-blue-500 opacity-10 blur-3xl md:h-96 md:w-96"></div>
        <div className="from-cuptime-orange to-cuptime-red absolute top-1/3 left-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial opacity-10 blur-3xl"></div>
      </div>
      <div className="flex flex-col gap-4">
        <motion.h2
          className="text-center text-3xl font-bold text-zinc-50 md:text-4xl lg:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Signature Beverages
        </motion.h2>
        <motion.p
          className="flex flex-col items-center justify-between px-0 text-center text-base text-zinc-500 md:px-28 md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Handcrafted with love, using traditional methods and age-old recipes
          passed down through generations.
        </motion.p>
      </div>

      <div className="mx-auto grid w-full grid-cols-1 place-items-center items-center justify-center gap-8 px-2 md:w-[80%] md:grid-cols-2 md:px-0 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
      </div>

      <div>
        <button className="from-cuptime-orange to-cuptime-red cursor-pointer rounded-xl bg-gradient-to-tr px-6 py-2 font-semibold text-white hover:opacity-90">
          <Link href="/our-products">View All Products</Link>
        </button>
      </div>
    </section>
  );
};

export default ProductOverview;
