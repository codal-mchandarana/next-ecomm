import type { JSX } from 'react';
import ProductCard from '@/components/Custom/products/ProductCard';
import type { Product } from '@/lib/types';
import Filters from '@/components/Custom/Filters';

const ProductListing: React.FC<{ data: Product[]; selectedTag?: string }> = ({
  data = [],
  selectedTag,
}): JSX.Element => {
  return (
    <section className="mt-12 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto px-4 xl:max-w-screen-xl 2xl:max-w-screen-xxl 2xl:px-0">
        <Filters SelectedTag={selectedTag} />
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((product): JSX.Element => {
            const p = product;
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
