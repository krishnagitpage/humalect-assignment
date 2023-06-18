import ReactPaginate from "react-paginate"

type PaginateProps = {
    limit: number,
    breakLabel?: string,
    nextLabel? : string,
    previousLabel?: string,
    total: number,
    onPageChange: () => void,
    forcePage?: number,

}

export default function Paginate({
    limit,
    nextLabel = "Next >",
    breakLabel = "...",
    total,
    previousLabel = "< Prev",
    onPageChange,
    forcePage = 1,


}: PaginateProps) {
  return (
    <ReactPaginate
            breakLabel = {breakLabel}
            nextLabel = {nextLabel}
            previousLabel = {previousLabel}
            onPageChange={onPageChange}
            pageCount={Math.ceil(total / limit)}
            forcePage={forcePage}

            className="inline-flex items-center -space-x-px"
            activeLinkClassName="px-3 py-2 ml-0 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 bg-blue-50 hover:bg-blue-100"
            previousClassName="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:text-gray-700 hover:bg-gray-100"
            pageLinkClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100"
            nextClassName="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:text-gray-700 hover:bg-gray-100"
          />
  )
}