import { type JSX } from 'react';
import ProductListing from '@/pages/ProductListing';
import Header from '@/components/Custom/Header';
import data from '@/data/data.json';
import type { Product } from '@/lib/types';

const Home: React.FC = (): JSX.Element => {
  const productData = data.products as Product[];

  return (
    <>
      <Header back={false} />
      <ProductListing data={productData} />
    </>
  );
};

export default Home;
