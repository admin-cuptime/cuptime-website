import React from 'react';
import MeasurementFlask from '@/assets/svg/measurement.svg';
import SugarCubes from '@/assets/svg/sugar-cube.svg';
import ServedHot from '@/assets/svg/served-hot.svg';
import NoChemicals from '@/assets/svg/no-chemicals.svg';
import { images } from '@/assets/png/images';
import { GlareCard } from '../ui/glare-card';
import { CardBody, CardContainer } from '../ui/3d-card';

interface Product {
  name: string;
  description: string;
  image: any;
  measurement: string;
  sugar: string;
  isServedHot: boolean;
  isNoChemicals: boolean;
}

const products: Product[] = [
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productTea,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productCoffee,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productBerry,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productCane,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productRose,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productSukku,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productTea,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
  {
    name: 'Karupatti Sukku Kaapi',
    description:
      'A traditional herbal decoction brewed with palm jaggery and dry ginger — perfect for boosting immunity.',
    image: images.product.productCoffee,
    measurement: '350ml, 500ml & 1000ml Flask',
    sugar: 'With/Without Sugar',
    isServedHot: true,
    isNoChemicals: true,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <CardContainer className="">
      <CardBody className="flex h-full w-full flex-col items-center gap-3 rounded-lg bg-white p-3 drop-shadow-xl transition-all select-none hover:drop-shadow-2xl md:h-[300px] lg:w-[560px] md:flex-row md:p-5">
        <div
          className="h-[200px] w-full shrink-0 rounded-lg bg-contain bg-center bg-no-repeat md:h-full md:w-[230px] md:bg-cover"
          style={{ backgroundImage: `url(${product.image.src})` }}
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
  return (
    <section className="relative mx-auto max-w-[90%] pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-violet-500 to-blue-500 opacity-10 blur-3xl"></div>
        <div className="from-cuptime-orange to-cuptime-red absolute top-1/3 left-1/3 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial opacity-10 blur-3xl"></div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {products.map((product, index) => (
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
