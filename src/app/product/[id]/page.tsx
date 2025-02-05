import type { JSX } from 'react';
import ProductDetailPage from '@/pages/ProductDetailPage';
import Header from '@/components/Custom/Header';

const ProductDetail: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <ProductDetailPage />
    </>
  );
};

export default ProductDetail;
