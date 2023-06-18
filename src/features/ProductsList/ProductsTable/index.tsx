import clsx from 'clsx';

import Link from 'next/link';

type ProductsTableProps = {
    data: any[]
}

const ProductsTable = ({ data }: ProductsTableProps) => {

  const columns = [
    { key : "id", title: "Id" },
    { key : "title", title: "Title" },
    { key : "category", title: "Category" },
    { key : "price", title: "Price" },
    { key : "discountPrice", title: "Discount Price" },
    
  ];

  const renderTableCell = (key: string, listItem: any) => {
    const { id } = listItem;

    if (key == "title") {
      return <Link href = {`products/${id}`}>{listItem[key]}</Link>
    }

    return listItem[key];
  }

  const renderTableRow = (listItem: any, i: number) => {
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