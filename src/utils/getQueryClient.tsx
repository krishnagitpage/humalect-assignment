import { QueryClient } from "react-query";

import { cache } from "react";

const getQueryClient = cache(() => new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    }
}));

export default getQueryClient;