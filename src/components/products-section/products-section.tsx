import React, { useEffect, useState } from 'react';
import MeasurementFlask from '@/assets/svg/measurement.svg';
import SugarCubes from '@/assets/svg/sugar-cube.svg';
import ServedHot from '@/assets/svg/served-hot.svg';
import NoChemicals from '@/assets/svg/no-chemicals.svg';
import CupWhite from '@/assets/svg/cup-white.svg';
import { GlareCard } from '../ui/glare-card';
import { CardBody, CardContainer } from '../ui/3d-card';
import { fetchProductsData } from '@/app/api/products';

interface Product {
  name: string;
  description: string;
  image: string;
  measurement: string;
  sugar: string;
  isServedHot: boolean;
  isNoChemicals: boolean;
}

const SkeletonCard = () => (
  <CardContainer>
    <CardBody className="flex h-full w-full flex-col items-center gap-3 rounded-lg bg-white p-3 drop-shadow-xl select-none md:h-[300px] lg:w-[560px] md:flex-row md:p-5 animate-pulse">
      <div className="h-[200px] w-full shrink-0 rounded-lg bg-gray-200 flex items-center justify-center md:h-full md:w-[230px] md:bg-cover">
        <CupWhite className="h-16 w-16 md:h-24 md:w-24 text-gray-300 animate-pulse" />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 w-full">
        <div className="flex flex-col gap-2">
          <div className="h-6 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-20 bg-gray-200 rounded" />
          <div className="h-5 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </CardBody>
  </CardContainer>
);

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <CardContainer className="">
      <CardBody className="flex h-full w-full flex-col items-center gap-3 rounded-lg bg-white p-3 drop-shadow-xl transition-all select-none hover:drop-shadow-2xl md:h-[300px] lg:w-[560px] md:flex-row md:p-5">
        <div
          className="h-[200px] w-full shrink-0 rounded-lg bg-contain bg-center bg-no-repeat md:h-full md:w-[230px] md:bg-cover"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-zinc-900 md:text-2xl">
              {product.name}
            </div>
            <div className="line-clamp-3 text-sm">{product.description}</div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold italic md:text-sm">
            <MeasurementFlask className="h-4 w-4 md:h-6 md:w-6" />
            <div>{product.measurement}</div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold italic md:text-sm">
            <SugarCubes className="h-4 w-4 md:h-6 md:w-6" />
            <div>{product.sugar}</div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold md:text-sm">
            {product.isServedHot && (
              <div className="flex items-center gap-1">
                <ServedHot className="h-4 w-4 md:h-5 md:w-5" />
                <div>Served Hot</div>
              </div>
            )}
            {product.isNoChemicals && (
              <div className="flex items-center gap-1">
                <NoChemicals className="h-4 w-4 md:h-5 md:w-5" />
                <div>No Chemicals</div>
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchProductsData();
      if (Array.isArray(data)) {
        setProducts(
          data.map((item) => ({
            ...item,
            isServedHot: item.isServedHot === 'TRUE',
            isNoChemicals: item.isNoChemicals === 'TRUE',
          }))
        );
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="relative mx-auto max-w-[90%] pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-violet-500 to-blue-500 opacity-10 blur-3xl"></div>
        <div className="from-cuptime-orange to-cuptime-red absolute top-1/3 left-1/3 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial opacity-10 blur-3xl"></div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <SkeletonCard />
              </div>
            ))
          : products.map((product, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default ProductsSection;
