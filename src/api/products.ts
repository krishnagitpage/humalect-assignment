import { ProductType } from "@/types/ProductTypes";
import axios from "axios";

const base = axios.create({
    baseURL: "https://dummyjson.com"
})

export const getAll = async (limit?: number, skip?: number) => {
    let url = "products"
    url += limit ? `?limit=${limit}` : '';
    url += skip ? `?skip=${skip}` : '';
    const response = await base.get(url);
    return response.data;
}

export const getOne = async (productId: string) => {
    let url = `products/${productId}`;

    const response = await base.get(url);
    return response.data;
}