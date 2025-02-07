'use client';
import { useState, type JSX } from 'react';
import { useRouter } from 'next/navigation';
import data from '@/data/data.json';
import type { FilterInterface, Product } from '@/lib/types';
import SearchBar from '../elements/SearchBar';
import MultiDropDown from '../elements/MultiDropDown';
import DropDown from '../elements/DropDown';
import { Button } from '../ui/button';

interface PropsInterface {
  selectedTag?: string;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Filters: React.FC<PropsInterface> = ({
  setProducts,
  selectedTag,
}): JSX.Element => {
  const [filters, setFilters] = useState<FilterInterface>({
    search: '',
    tags: [],
    stock: 0,
  });
  const [stockVal, setStockVal] = useState<string>('Select');
  const [searchVal, setSearchVal] = useState<string>('');
  const [tagVal, setTagVal] = useState<string[]>([]);
  const router = useRouter();

  const handleFilters = (
    inputText: string,
    inputTags: string[],
    stockValue: number,
  ): void => {
    const filteredProducts = data.products.filter((item) => {
      const title: string = item.title.toLowerCase();
      const matchesSearch =
        inputText !== '' ? title.includes(inputText.toLowerCase()) : true;

      const matchesTags = inputTags.every((inputTag) =>
        item.tags.includes(inputTag),
      );

      const { available } = item;

      let matchesStock = true;
      if (stockValue === 1) {
        matchesStock = available > 0;
      } else if (stockValue === 2) {
        matchesStock = available === 0;
      }

      return matchesSearch && matchesTags && matchesStock;
    });

    setFilters({
      search: inputText,
      tags: inputTags,
      stock: stockValue,
    });

    setProducts(filteredProducts as Product[]);
  };

  const items = data.products.map((item) => item.tags).flat();
  const uniqueTags = [...new Set(items)];

  return (
    <div className="mb-6 flex justify-between">
      <SearchBar
        filters={filters}
        selectedTag={selectedTag}
        handleFilters={handleFilters}
        fieldvalue={searchVal}
        setFieldValue={setSearchVal}
      />
      <div className="flex gap-8">
        <MultiDropDown
          filters={filters}
          Tags={uniqueTags}
          selectedTag={selectedTag}
          handleFilters={handleFilters}
          fieldvalue={tagVal}
          setFieldValue={setTagVal}
        />
        <DropDown
          filters={filters}
          selectedTag={selectedTag}
          handleFilters={handleFilters}
          fieldvalue={stockVal}
          setFieldValue={setStockVal}
        />
        <Button
          onClick={() => {
            setStockVal('Select');
            setSearchVal('');
            setTagVal([]);
            setFilters({
              search: '',
              tags: [],
              stock: 0,
            });
            handleFilters('', [], 0);
            router.push('/');
          }}
          className="h-full rounded-none bg-white font-semibold text-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-gray-100"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filters;
