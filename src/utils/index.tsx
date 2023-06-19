import { CurrencySymbol } from "@/globals";

export const generateId = (label: string = "ecomm") => {return `${label}-${Math.random().toString(36).substr(2, 9)}`;};

export const calcDiscountPrice = (price: number, discountPercentage: number, fixed:number = 2): number => {
    const discountPrice = price - (price * (discountPercentage / 100));
    return Number(discountPrice.toFixed(fixed));
} 

export const addCurrencySymbol= (price: number) => {
    return CurrencySymbol + " " + price;
}
