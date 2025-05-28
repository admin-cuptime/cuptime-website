'use client';

import React, { useEffect, useState } from 'react';
import { Marquee } from '../magicui/marquee';
import { CardContainer, CardItem } from '../ui/3d-card';
import { fetchProductsData } from '@/app/api/products';

const SkeletonCard = () => (
  <CardContainer className="relative flex h-[250px] w-full flex-col items-center rounded-xl p-5 py-2 transition-all duration-300 md:w-[250px] animate-pulse">
    <CardItem translateZ={70}>
      <div className="h-[200px] w-[200px] bg-zinc-200 rounded mb-2" />
    </CardItem>
    <CardItem translateZ={40} className="flex w-full flex-col items-center justify-center rounded-lg bg-amber-800/10 py-2 text-zinc-900">
      <div className="h-6 w-1/2 bg-zinc-200 rounded mb-2" />
      <div className="h-4 w-1/3 bg-zinc-200 rounded" />
    </CardItem>
  </CardContainer>
);

const ProductCard = ({ product }: { product: any }) => {
  return (
    <CardContainer className="relative flex h-[250px] w-full flex-col items-center rounded-xl p-5 py-2 transition-all duration-300 md:w-[250px]">
      <CardItem translateZ={70}>
        <div
          className="h-[200px] w-[200px] bg-contain bg-center bg-no-repeat transition-all duration-300"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
      </CardItem>
      <CardItem translateZ={40} className="flex w-full flex-col items-center justify-center rounded-lg bg-amber-800/10 py-2 text-zinc-900">
        <div className="text-base font-semibold md:text-lg">
          {product.name}
        </div>
        {product.topOrdered && (
          <div className="absolute -bottom-3 rounded-full bg-yellow-400 px-2 py-0.5 text-sm font-semibold italic">
            Top Ordered
          </div>
        )}
      </CardItem>
    </CardContainer>
  );
};

const FamiliarProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchProductsData();
      if (Array.isArray(data)) {
        setProducts(
          data.map((item) => ({
            ...item,
            topOrdered: item.topOrdered === 'TRUE',
          }))
        );
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="max-w-screen-3xl mx-auto py-10">
      <div className="px-4 text-xl font-bold text-zinc-900 md:px-10 md:text-3xl">
        Familiar Products
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          className="mx-auto h-[300px] w-full [--duration:30s]"
          pauseOnHover={true}
        >
          {loading
            ? Array.from({ length: 8 }).map((_, idx) => <SkeletonCard key={idx} />)
            : products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l"></div>
      </div>
    </section>
  );
};

export default FamiliarProducts;
