// import Image from 'next/image';
import type { JSX } from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from '@/components/Custom/CartItem';
import CartSummary from '@/components/Custom/CartSummary';

const CartPage: React.FC = (): JSX.Element => {
  return (
    <section className="mb-32 h-screen py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex items-center justify-center">
          <h1 className="p-4 text-3xl font-bold">YOUR CART </h1>
          <ShoppingCart className='mb-1 text-red-500' size={30} />
        </div>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <CartItem imageUrl="https://cdn.shopify.com/s/files/1/0675/1266/4292/files/HD-01BULLY.jpg?v=1736420995" />
            </div>
            <hr className="my-10 h-0.5 w-full border-t-0 bg-neutral-200 dark:bg-white/10" />
            <div className="space-y-6">
              <CartItem imageUrl="https://cdn.shopify.com/s/files/1/0675/1266/4292/files/TS-02B0.jpg?v=1736420976" />
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
