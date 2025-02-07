import { useContext, type JSX } from 'react';
import { CartContext } from '@/Context/CartContextProvider';

const CartSummary: React.FC = (): JSX.Element => {
  const { TotalPrice } = useContext(CartContext);
  return (
    <div className="sticky top-16 mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <p className="text-xl font-semibold text-red-500 dark:text-white">
        Order summary
      </p>
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Subtotal:
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                ${TotalPrice.toLocaleString()}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Delivery:
              </dt>
              <dd className="text-base  font-bold">-$0</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax:
              </dt>
              <dd className="text-base  font-bold  text-gray-900 dark:text-white">
                $0
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-normal text-gray-500 dark:text-white">
              Total:
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              ${TotalPrice.toLocaleString()}
            </dd>
          </dl>
        </div>
      </div>

      <div className="w-full">
        <button
          type="button"
          className="mb-2 me-2 w-full rounded-lg bg-[#1F7F66] px-5 py-2.5 text-sm font-bold text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
