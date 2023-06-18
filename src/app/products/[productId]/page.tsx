"use client";

import Container from '@/components/Container'
import { useParams } from 'next/navigation';

import { useQuery } from "react-query";
import { getOne } from "@/api/products";
import CardImage from '@/components/Skeletons/CardImage';

import ProductCardFull from "@/components/ProductCardFull"
import getQueryClient from '@/utils/getQueryClient';

const page = () => {

  const queryClient = getQueryClient();

  const params = useParams();
  const { productId } = params;
  const {
    isLoading,
    isError,
    data,
  } = useQuery(`products/${productId}`, () => getOne(productId));
  
  if (isLoading) return <Container className='mt-5 '><CardImage /></Container>

  if (isError) return <>"Failed to fetch"</>;

  return (
    <Container className='mt-5 border'>
      <ProductCardFull data = {data} />
    </Container>
  )
}

export default page