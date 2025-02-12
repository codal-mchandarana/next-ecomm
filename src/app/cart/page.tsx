import { type JSX } from 'react';
import Header from '@/components/custom/Header';
import CartPage from '@/pages/CartPage';

const Cart: React.FC = (): JSX.Element => {
  return (
    <>
      <Header back />
      <CartPage />
    </>
  );
};

export default Cart;
