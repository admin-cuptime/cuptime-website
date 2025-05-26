import React, { useEffect, useState } from 'react';
import MeasurementFlask from '@/assets/svg/measurement.svg';
import SugarCubes from '@/assets/svg/sugar-cube.svg';
import ServedHot from '@/assets/svg/served-hot.svg';
import NoChemicals from '@/assets/svg/no-chemicals.svg';
import CupWhite from '@/assets/svg/cup-white.svg';
import { GlareCard } from '../ui/glare-card';
import { CardBody, CardContainer } from '../ui/3d-card';
import { fetchProductsData } from '@/app/api/products';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Product {
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  measurement: string;
  sugar: string;
  isServedHot: boolean;
  isNoChemicals: boolean;
}

const SkeletonCard = () => (
  <div className="flex h-full w-full animate-pulse flex-col items-center gap-3 rounded-lg bg-white p-3 drop-shadow-xl select-none md:h-[300px] md:flex-row md:p-5 lg:w-[560px]">
    <div className="flex h-[200px] w-full shrink-0 items-center justify-center rounded-lg bg-gray-200 md:h-full md:w-[230px] md:bg-cover">
      <CupWhite className="h-28 w-28 animate-pulse text-gray-300 md:h-24 md:w-24" />
    </div>
    <div className="flex w-full flex-col gap-2 md:gap-4">
      <div className="flex flex-col gap-2">
        <div className="h-6 w-1/2 rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded bg-gray-200" />
        <div className="h-4 w-24 rounded bg-gray-200" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded bg-gray-200" />
        <div className="h-4 w-24 rounded bg-gray-200" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-5 w-20 rounded bg-gray-200" />
        <div className="h-5 w-20 rounded bg-gray-200" />
      </div>
    </div>
  </div>
);

const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <CardContainer>
        <CardBody className="flex h-full w-full flex-col items-center gap-3 rounded-lg bg-white p-5 drop-shadow-xl transition-all select-none hover:drop-shadow-2xl md:h-[300px] md:flex-row md:p-5 lg:w-[560px] hover:border-cuptime-red border-2 border-transparent hover:border-2 transition-all">
          <div
            className="h-[200px] w-full shrink-0 rounded-lg bg-contain bg-center bg-no-repeat md:h-full md:w-[230px] md:bg-cover"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex flex-col">
              <div className="text-lg font-bold text-zinc-900 md:text-2xl">
                {product.name}
              </div>
              <div className="line-clamp-4 text-sm">
                {product.shortDescription}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold italic md:text-sm">
              <MeasurementFlask className="h-auto w-4 md:h-auto md:w-6" />
              <div>{product.measurement}</div>
            </div>
            {product.sugar && (
            <div className="flex items-center gap-2 text-xs font-semibold italic md:text-sm">
              <SugarCubes className="h-auto w-4 md:h-auto md:w-6" />
              <div>{product.sugar}</div>
            </div>)}
            <div className="flex items-center gap-2 text-xs font-bold md:text-sm">
              {product.isServedHot && (
                <div className="flex items-center gap-1">
                  <ServedHot className="h-auto w-4 md:h-auto md:w-5" />
                  <div>Served Hot</div>
                </div>
              )}
              {product.isNoChemicals && (
                <div className="flex items-center gap-1">
                  <NoChemicals className="h-auto w-4 md:h-auto md:w-5" />
                  <div>No Chemicals</div>
                </div>
              )}
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

const ProductModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!product) return null;

  const formattedDescription = product.description.replace(/\\n/g, '\n');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-screen w-screen overflow-y-scroll md:min-w-2xl p-3 md:p-6">
        <DialogHeader>
          <DialogTitle className='text-lg md:text-2xl text-zinc-900 font-semibold'>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="flex flex-col gap-4 self-center">
            <div className="flex flex-col gap-2">
              {formattedDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
              <div
                key={idx}
                className={`flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                <SkeletonCard />
              </div>
            ))
          : products.map((product, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                <ProductCard
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </div>
            ))}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductsSection;
