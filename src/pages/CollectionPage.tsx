'use client';
import type { JSX } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Custom/Header';
import data from '@/data/data.json';
import { type Product } from '@/lib/types';
import ProductListing from './ProductListing';

const CollectionPage: React.FC = (): JSX.Element => {
  const params = useParams<{ tag?: string }>();
  const productData = data.products as Product[];
  const customTag: string = params?.tag ?? '';

  const filteredProducts = productData.filter((product) =>
    product.tags.includes(customTag.toLowerCase()),
  );

  return (
    <>
      <Header back />
      <ProductListing data={filteredProducts} selectedTag={customTag} />
    </>
  );
};

export default CollectionPage;
