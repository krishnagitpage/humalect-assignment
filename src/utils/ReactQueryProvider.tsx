"use client";

import React from "react";

import { QueryClientProvider } from "react-query";
import getQueryClient from "./getQueryClient";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(() => getQueryClient());
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;