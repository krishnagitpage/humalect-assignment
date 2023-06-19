import { ProductType } from "@/types/ProductTypes";
import Link from "next/link";
import { addCurrencySymbol, calcDiscountPrice } from "@/utils";

type ProductsGridProp = {
  data: ProductType[]
}

type ColumnKeys = "id" | "title" | "category" | "formatPrice" | "discountPrice";

type column = { key: ColumnKeys, title: string };

const columns: column[] = [
  { key : "id", title: "Id" },
  { key : "title", title: "Title" },
  { key : "category", title: "Category" },
  { key : "formatPrice", title: "Price" },
  { key : "discountPrice", title: "Discount Price" },
];

const ProductsGrid = ({ data }: ProductsGridProp ) => {

  const renderValue = (key: ColumnKeys, listItem: ProductType) => {
    const { id, price, discountPercentage } = listItem;

    if (key == "formatPrice") {
      return addCurrencySymbol(price);
    } else if (key == "discountPrice") {
      return addCurrencySymbol(calcDiscountPrice(price, discountPercentage))
    } 
    return listItem[key];
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 ">
      {
        data.map((item) => {
          const { id } = item;
          return (
            <div className="shadow-md hover:shadow-lg rounded p-3 border bg-white" key = {id}>
              <Link href = {`products/${id}`}>
                <div className="space-y-2">
                  {columns.map((column) => {
                      return (
                        <div className="flex justify-between space-x-5" key = {column.key}>
                          <span className="text-gray-500 text-sm">{column.key}</span>
                          <span>{renderValue(column.key, item)}</span>
                        </div>
                      )
                  })}
                </div>
              </Link>
            </div>
          )
        })
      }
             
    </section>
  )
}



export default ProductsGrid