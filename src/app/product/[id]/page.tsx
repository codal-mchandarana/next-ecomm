import type { JSX } from 'react';
import Header from '@/components/Custom/Header';
import ProductDetailPage from '@/pages/ProductDetailPage';

const ProductDetail: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <ProductDetailPage />
    </>
  );
};

export default ProductDetail;
