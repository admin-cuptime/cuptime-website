'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { images } from '@/assets/png/images';
import { IconArrowUpRight } from '@tabler/icons-react';
import FlaskHand from '@/assets/png/flask-hand.png';

const products = [
  {
    title: 'Tea',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productTea,
  },
  {
    title: 'Coffee',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productCoffee,
  },
  {
    title: 'Hot Chocolate',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productRose,
  },
  {
    title: 'Matcha Latte',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productBerry,
  },
  {
    title: 'Chai',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productSukku,
  },
  {
    title: 'Herbal Infusion',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productCane,
  },
  {
    title: 'Tea',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productTea,
  },
  {
    title: 'Hot Chocolate',
    description: '350ml, 500ml & 1000ml Flask With/Without Sugar',
    image: images.product.productRose,
  },
];

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-cuptime-midnight hover:bg-cuptime-midnight group relative flex h-[300px] w-full flex-col items-center justify-between rounded-xl border-1 border-transparent p-5 transition-all duration-300 hover:border-zinc-300 md:w-[250px] md:bg-transparent">
      <div className="absolute top-2 right-2 hidden transition-all duration-300 group-hover:flex">
        <IconArrowUpRight className="h-6 w-6 text-white" />
      </div>
      <div
        className="h-[200px] w-[200px] bg-contain bg-center bg-no-repeat transition-all duration-300 md:group-hover:h-[160px] md:group-hover:w-[160px]"
        style={{ backgroundImage: `url(${product.image.src})` }}
      ></div>
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white/10 p-2 text-white">
        <div className="text-lg font-semibold">{product.title}</div>
        <div className="flex flex-col items-center justify-center overflow-hidden text-center text-xs transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-20 md:group-hover:opacity-100">
          {product.description}
        </div>
      </div>
    </div>
  );
};

const ProductOverview = () => {
  return (
    <section className="bg-cuptime-black relative flex flex-col items-center justify-center gap-12 py-20 overflow-x-clip">
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
        className="hidden md:block absolute -top-18 right-0 z-10 w-40 transform drop-shadow-xl md:h-60"
      >
        <img
          src={FlaskHand.src}
          alt="Delivery Executive"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-full w-full md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-violet-500 to-blue-500 opacity-10 blur-3xl"></div>
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
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div>
        <button className="from-cuptime-orange to-cuptime-red cursor-pointer rounded-xl bg-gradient-to-tr px-6 py-2 font-semibold text-white hover:opacity-90">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductOverview;
