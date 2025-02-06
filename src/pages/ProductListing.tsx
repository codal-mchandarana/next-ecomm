'use client';
import { useState, type JSX } from 'react';
import { Frown } from 'lucide-react';
import ProductCard from '@/components/Custom/products/ProductCard';
import type { Product } from '@/lib/types';
import Filters from '@/components/Custom/Filters';

const ProductListing: React.FC<{ data: Product[]; selectedTag?: string }> = ({
  data = [],
  selectedTag,
}): JSX.Element => {
  const [products, setProducts] = useState<Product[]>(data);

  return (
    <section
      className={`${products.length <= 0 ? 'h-screen' : ''} mt-12 py-8 antialiased dark:bg-gray-900 md:py-12`}
    >
      <div className="mx-auto h-full px-4 xl:max-w-screen-xl 2xl:max-w-screen-xxl 2xl:px-0">
        <Filters selectedTag={selectedTag} setProducts={setProducts} />
        {products.length > 0 ? (
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product): JSX.Element => {
              const p = product;
              return <ProductCard key={p.id} product={p} />;
            })}
          </div>
        ) : (
          <div className=" flex h-full items-center justify-center">
            <div className="mr-3 text-2xl font-bold">No Product To Display</div>
            <Frown className="text-red-600" size={26} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductListing;
