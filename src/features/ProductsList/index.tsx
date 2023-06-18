import ProductsGrid from "./ProductsGrid";
import ProductsTable from "./ProductsTable";

import { dehydrate, useQuery } from "react-query";
import { getAll } from "@/api/products";
import { calcDiscountPrice } from "@/utils";

import CardList from "@/components/Skeletons/CardList";

import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/HydrateClient";

type ProductsListProps = {
    layoutType: "table" | "grid",
}

const ProductsList = async ({layoutType}: ProductsListProps) => {
  
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(["posts"], () => getAll());

  const dehydratedState = dehydrate(queryClient);

  const {
    isLoading,
    isError,
    data,
    isFetching,
    isPreviousData
  } = useQuery("products", () => getAll());

  if (isLoading || isFetching) return <CardList cards={6}/>

  if (isError) return <div>Error while fetching</div>

  const formatData = (data: any[]) => {
    return data.map(item => {
      const {price , discountPercentage} = item;
      
      return {
        ...item,
        ...{
          discountPrice: calcDiscountPrice(price, discountPercentage)
        }
      }
    });
  }

  return (
    <>
      <Hydrate state={dehydratedState}>
        {
            layoutType == "table" ? 
            <ProductsTable data = {formatData(data.products)} /> :
            <ProductsGrid data = {formatData(data.products)} />
        }
        </Hydrate>
    </>

  )
}

export default ProductsList;