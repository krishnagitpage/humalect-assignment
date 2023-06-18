export const generateId = (label: string = "ecomm") => {return `${label}-${Math.random().toString(36).substr(2, 9)}`;};

export const calcDiscountPrice = (price: number, discountPercentage: number) => price - (price * (discountPercentage / 100)) 
