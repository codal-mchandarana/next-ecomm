'use client';
import { type JSX } from 'react';
import data from '@/data/data.json';
import SearchBar from '../elements/SearchBar';
import MultiDropDown from '../elements/MultiDropDown';
import DropDown from '../elements/DropDown';

const Filters: React.FC<{SelectedTag?:string}> = ({SelectedTag}): JSX.Element => {
  const items = data.products.map((item) => item.tags).flat();
  const uniqueTags = [...new Set(items)];

  return (
    <div className="mb-6 flex justify-between">
      <SearchBar />
      <div className="flex gap-8">
        <MultiDropDown Tags={uniqueTags} SelectedTag={SelectedTag} />
        <DropDown />
      </div>
    </div>
  );
};

export default Filters;
