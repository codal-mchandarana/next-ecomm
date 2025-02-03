interface ProductImage {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  src: string;
  width: number;
  height: number;
};

export interface Product{
  id: number;
  title: string;
  handle: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  discount: string;
  price: string;
  product_type: string;
  tags: string[];
  images: ProductImage[];
};
