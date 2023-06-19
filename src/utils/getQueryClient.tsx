import { QueryClient } from "react-query";

const getQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    }
});

export default getQueryClient;