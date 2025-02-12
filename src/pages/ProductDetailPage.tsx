'use client';
import React, { type JSX, useContext, useState } from 'react';
import { Heart, Minus, Plus, Star, StarHalf, Check } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import data from '@/data/data.json';
import { calculatePrice } from '@/lib/utility';
import { CartContext } from '@/context/CartContextProvider';
import { type Product } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const ProductDetailPage: React.FC = (): JSX.Element => {
  const params = useParams<{ id?: string }>();
  const { AddToCartQty } = useContext(CartContext);
  const id = params?.id ?? '';
  const productData = data.products.find((item) => String(item.id) === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Slate');
  const [selectedTag, setSelectedTag] = useState('Casual');
  const [selectedImage, setSelectedImage] = useState(0);
  const { toast } = useToast();

  const product = {
    rating: 4.5,
    reviews: 128,
    description:
      'Experience ultimate comfort with our Premium Cotton Crew Neck T-Shirt. Crafted from 100% organic cotton, this versatile piece features a classic fit, reinforced seams, and a soft touch finish that gets better with every wash. Perfect for daily wear or casual outings.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Slate', hex: '#64748b' },
      { name: 'Navy', hex: '#1e3a8a' },
      { name: 'Forest', hex: '#064e3b' },
      { name: 'Ruby', hex: '#9f1239' },
      { name: 'Sand', hex: '#c2b280' },
    ],
  };

  const handleQuantityChange = (type: 'increment' | 'decrement'): void => {
    if (type === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-10 h-screen overflow-auto bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
              <Image
                src={productData?.images[selectedImage].src ?? ''}
                alt="Product"
                className="size-full object-cover"
                width={productData?.images[0].width}
                height={productData?.images[0].height}
              />
            </div>
            {/* Thumbnail Grid */}
            <div className="flex justify-center gap-4">
              {productData?.images.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                  className={`aspect-square overflow-hidden rounded-md ${
                    selectedImage === index
                      ? 'ring-2 ring-gray-900'
                      : 'ring-1 ring-gray-200'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Product view ${(index + 1).toString()}`}
                    className="size-28 object-cover transition-opacity hover:opacity-75"
                    width={image.width}
                    height={image.height}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {productData?.title}
              </h1>
              <div className="mt-4 flex items-center space-x-4">
                <span className="mr-2 text-2xl font-bold text-red-500">
                  $
                  {calculatePrice(
                    productData?.price,
                    productData?.discount,
                  ).toLocaleString()}
                </span>
                <span className="text-2xl font-semibold text-gray-900 line-through">
                  ${productData?.price}
                </span>
              </div>
              <div className="mt-5 flex items-center">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 4 }, (_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                  <StarHalf size={20} fill="currentColor" />
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Tags Dropdown */}
            <div className="w-1/4 min-w-fit">
              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-700"
              >
                Tags
              </label>
              <select
                id="tag"
                value={selectedTag}
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                }}
                className="mt-1 block w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 text-base shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {productData?.tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Selection */}
            {productData?.options[0]?.name.toLowerCase() === 'size' && (
              <div>
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-gray-700"
                >
                  Size
                </label>
                <div id="size" className="mt-2 flex flex-wrap gap-2">
                  {productData.options[0].values.map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                      className={`rounded-md px-4 py-2 text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700"
              >
                Color
              </label>
              <div id="color" className="mt-2 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    type="button"
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color.name);
                    }}
                    className="group relative"
                    title={color.name}
                  >
                    <div
                      className={`size-8 rounded-full border-2 ${
                        selectedColor === color.name
                          ? 'border-gray-900'
                          : 'border-transparent hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.name && (
                        <Check
                          size={16}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white "
                        />
                      )}
                    </div>
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label
                htmlFor="quantity"
                className="text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <div
                id="quantity"
                className="flex items-center rounded-md border border-gray-300"
              >
                <button
                  type="button"
                  onClick={() => {
                    handleQuantityChange('decrement');
                  }}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus
                    size={20}
                    className={
                      quantity <= 1 ? 'text-gray-300' : 'text-gray-600'
                    }
                  />
                </button>
                <span className="px-4 py-2 text-gray-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => {
                    handleQuantityChange('increment');
                  }}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 ">
              <button
                type="button"
                className="flex-1 rounded-md bg-gray-900 px-6 py-3 text-white transition-all hover:bg-black/90 active:scale-90"
                onClick={() => {
                  const dummyProductData = { ...productData, qty: quantity };
                  toast({
                    title: `${productData?.title ?? 'Product'} added to cart`,
                    className: 'bg-green-500 text-white',
                    duration: 2000,
                  });
                  AddToCartQty(dummyProductData as Product);
                }}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="rounded-md border border-gray-300 p-3 transition-colors hover:bg-gray-50"
              >
                <Heart size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
