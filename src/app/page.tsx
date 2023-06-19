"use client";

import Container from "@/components/Container";
import ProductsFilterAndList from "@/features/ProductsFilterAndList";

export default function Home() {
  return (
      <Container className = "pt-5">
          <ProductsFilterAndList/>
      </Container>
  )
}
