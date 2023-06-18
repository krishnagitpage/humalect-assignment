import Link from "next/link";

type ProductsGridProp = {
  data: any[]
}

const columns = [
  { key : "id", title: "Id" },
  { key : "title", title: "Title" },
  { key : "category", title: "Category" },
  { key : "price", title: "Price" },
  { key : "discountPrice", title: "Discount Price" },
];

const ProductsGrid = ({data}: ProductsGridProp) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 ">
      {
        data.map((item) => {
          return (
            <div className="shadow-md hover:shadow-lg rounded p-3 border bg-white" key = {item.id}>
              <Link href = {`products/${item.id}`}>
                <div className="space-y-2">
                  {columns.map((column) => {
                      return (
                        <div className="flex justify-between " key = {column.key}>
                          <span className="text-gray-500 text-sm">{column.key}</span>
                          <span>{item[column.key]}</span>
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