/* eslint-disable import/no-anonymous-default-export */
import { ProductType } from '@/@types/products';
import { mockProduct } from '@/mock/product';

const getProducts = (slug: string): ProductType | null => {
  const products = mockProduct.find((product) => product.slug === slug);

  return products || null;
};

export { getProducts };
