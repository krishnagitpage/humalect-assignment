import { ProductType } from '@/types/ProductTypes';
import { addCurrencySymbol, calcDiscountPrice } from '@/utils';
import clsx from 'clsx';

import Link from 'next/link';

type ProductsTableProps = {
    data: ProductType[]
}

type ColumnKeys = "id" | "title" | "category" | "formatPrice" | "discountPrice";

type column = { key: ColumnKeys, title: string };

const ProductsTable = ({ data }: ProductsTableProps) => {

  const columns: column[] = [
    { key : "id", title: "Id" },
    { key : "title", title: "Title" },
    { key : "category", title: "Category" },
    { key : "formatPrice", title: "Price" },
    { key : "discountPrice", title: "Discount Price" },
  ];

  const renderTableCell = (key: ColumnKeys, listItem: ProductType) => {
    const { id, price, discountPercentage } = listItem;

    if (key == "title") {
      return <Link href = {`products/${id}`}>{listItem[key]}</Link>
    } else if (key == "formatPrice") {
      return addCurrencySymbol(price);
    } else if (key == "discountPrice") {
      return addCurrencySymbol(calcDiscountPrice(price, discountPercentage))
    } 
    return listItem[key];
  }

  const renderTableRow = (listItem: ProductType, i: number) => {
    return (
      <tr key = {i}>
        {columns.map(({key}) => {
          const classNames = clsx(
            "border p-2 whitespace-nowrap",
            key == "title" ? "hover:cursor-pointer" : ""
          );
          return (
            <td className={classNames} key = {key}>
              {renderTableCell(key, listItem)}
            </td>
          )
        })}
      </tr>
    );
  }

  const renderTableHeaderCell = ({key, title}: {key: string, title: string}) => {
    return <th className="border p-2 whitespace-nowrap" key = {key}>{title}</th>
  }

  return (
    <>
      <div className="w-full">
        <table className="table w-full border">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              {columns.map(renderTableHeaderCell)}
            </tr>
          </thead>
          <tbody>
            {data.map(renderTableRow)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductsTable