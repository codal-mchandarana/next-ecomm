import type { JSX } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/data.json';
import type { Product } from '@/lib/types';

const ProductListing: React.FC = (): JSX.Element => {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product): JSX.Element => {
            const p = product as Product;
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
