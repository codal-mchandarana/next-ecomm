import { type JSX } from 'react';
import ProductListing from '@/pages/ProductListing';
import Header from '@/components/Custom/Header';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back={false} />
      <ProductListing />
    </>
  );
};

export default Home;
