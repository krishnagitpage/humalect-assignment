"use client";

import Container from "@/components/Container";
import ProductsFilterAndList from "@/features/ProductsFilterAndList";
import { FilterProvider } from "@/utils/FilterProviderContext";

export default function Home() {

  const limitPerRow = 10;

  return (
      <Container className = "pt-5">
        <FilterProvider>
          <ProductsFilterAndList/>
        </FilterProvider>
      </Container>

  )
}
