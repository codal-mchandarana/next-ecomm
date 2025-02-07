'use client';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useContext, type JSX } from 'react';
import { calculatePrice } from '@/lib/utility';
import { type Product } from '@/lib/types';
import { CartContext } from '@/Context/CartContextProvider';

const CartItem: React.FC<{ cartItem: Product }> = ({
  cartItem,
}): JSX.Element => {
  const { DeleteCartItems } = useContext(CartContext);
  return (
    <div className="rounded-lg bg-white p-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="w-3/4 space-y-4 md:flex md:items-center md:gap-12 md:space-y-0">
        <a href="#!" className="shrink-0 md:order-1">
          <Image
            className="size-52 dark:hidden"
            src={cartItem.images[0].src}
            alt="imac image"
            width={500}
            height={500}
          />
        </a>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <div className="flex justify-between">
            <div>
              <div className="mb-6 text-xl font-bold">
                <h1>{cartItem.title}</h1>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <div>
                  <span className="mr-1 text-gray-500">Color</span>:
                  <span className="mx-1 font-bold">Black</span>
                </div>
                <div>
                  <span className="mr-1 text-gray-500">Size</span>:
                  <span className="mx-1 font-bold">L</span>
                </div>
                <div>
                  <span className="mr-1 text-gray-500">Material</span>:
                  <span className="mx-1 font-bold">Cotton</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg font-extrabold text-[#1F7F66]">
                $
                {calculatePrice(
                  cartItem.price,
                  cartItem.discount,
                ).toLocaleString()}
              </div>
              <div className="text-lg font-extrabold text-gray-900 line-through">
                ${cartItem.price}
              </div>
            </div>
          </div>

          <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />

          <div className="flex justify-between">
            <div className="flex w-full  items-center">
              <div className="flex size-10 h-[2.1rem] cursor-pointer items-center justify-center rounded-l border border-gray-300 font-bold">
                <Minus size={14} />
              </div>
              <div className="flex h-[2.1rem] w-[14%] items-center justify-center border-y border-gray-300 text-center outline-none">
                <span className="text-lg">{cartItem.qty}</span>
              </div>
              <div className="flex size-10 h-[2.1rem] cursor-pointer items-center justify-center rounded-r border border-gray-300 font-bold">
                <Plus size={14} />
              </div>
            </div>

            <div className="flex aspect-square w-10 items-center justify-center rounded border border-gray-300">
              <Trash2
                onClick={() => {
                  DeleteCartItems(cartItem.id);
                }}
                className="cursor-pointer text-red-500"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
