'use client';
import { useParams } from 'next/navigation';
import { useState, type JSX } from 'react';
import Image from 'next/image';
import data from '@/data/data.json';

const ProductDetailPage: React.FC = (): JSX.Element => {
  const params = useParams<{ id?: string }>();
  const id = params?.id ?? '';
  const productData = data.products.find((item) => String(item.id) === id);
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);

  const calculatePrice = (
    price: string | undefined,
    discount: string | undefined,
  ): number => {
    const numPrice = Number(price?.replace(/,/g, ''));
    const numDiscount = Number(discount);

    const newPrice = numPrice - numPrice * (numDiscount / 100);
    return newPrice;
  };

  return (
    <div className="mt-12 flex h-screen items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-4 my-8 flex items-center">
          <div className="flex w-full flex-col items-center px-4 md:w-1/2">
            <Image
              src={productData?.images[mainImageIndex].src ?? ''}
              alt="Product"
              className="mb-4 w-3/4 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
              id="mainImage"
              width={productData?.images[0].width}
              height={productData?.images[0].height}
              loading="eager"
              fetchPriority="high"
            />
            <div className="flex justify-center gap-4 overflow-x-auto py-4">
              {productData?.images.map((item, index) => {
                return (
                  <Image
                    key={item.id}
                    onClick={() => {
                      setMainImageIndex(index);
                    }}
                    src={item.src}
                    alt="Thumbnail 1"
                    className={`size-16 cursor-pointer rounded-md object-cover ${mainImageIndex !== index ? 'opacity-60' : ''} shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition duration-300 hover:opacity-100 sm:size-20`}
                    width={item.width}
                    height={item.height}
                  />
                );
              })}
            </div>
          </div>

          <div className="mb-20 w-full px-4 md:w-1/2">
            <h2 className="mb-2 text-3xl font-bold">{productData?.title}</h2>
            <p className="mb-4 text-gray-600">SKU: {productData?.id}</p>
            <div className="mb-4">
              <span className="mr-2 text-2xl font-bold text-red-500">
                ${calculatePrice(productData?.price, productData?.discount)}
              </span>
              <span className="text-gray-500 line-through">
                ${productData?.price}
              </span>
            </div>
            <div className="mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="mb-6 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              iusto eaque, officiis dolores architecto reprehenderit. Obcaecati
              animi consequatur, itaque minima molestiae, corrupti vitae
              incidunt maiores eveniet asperiores, labore quidem expedita soluta
              explicabo!
            </p>

            <div className="flex gap-16">
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold">Tags:</h3>
                <div className="relative w-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                  <select className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                    {productData?.tags.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item.toUpperCase()}
                        </option>
                      );
                    })}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25 12 15.75l-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {productData?.options[0]?.name === 'Size' && (
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold">Sizes:</h3>
                  <div className="relative w-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <select className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                      {productData.options[0].values.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item.toUpperCase()}
                          </option>
                        );
                      })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25 12 15.75l-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6 flex space-x-4">
              <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
              <button className="flex items-center gap-2 rounded-md  bg-gray-200 px-6 py-2 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
