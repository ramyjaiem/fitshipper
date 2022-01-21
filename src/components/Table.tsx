import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, Column, usePagination } from "react-table";
import { AddressesContext } from "../contexts/addresses.context";
import { Address } from "../utils/modules";

interface Props {
  columns: Column<Address>[];
  data: Address[];
  openModal: Function;
}

const Table = ({ columns, data, openModal }: Props) => {
  const { deleteAddress } = useContext(AddressesContext);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const navigate = useNavigate();
  return (
    <>
      <table className="table-auto w-full " {...getTableProps()}>
        <thead className="py-4 font-semibold uppercase text-gray-500 bg-gray-50 ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="p-2 whitespace-nowrap text-left"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span className="font-semibold text-left">
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
              <th></th>
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody
          className="text-sm divide-y divide-gray-100"
          {...getTableBodyProps()}
        >
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="px-2 py-3 whitespace-nowrap"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td className="p-2 whitespace-nowrap">
                  <button
                    className="text-indigo-400 hover:text-indigo-600"
                    onClick={() => {
                      navigate(`/addresses/edit/${row.original.id}`);
                    }}
                  >
                    Edit
                  </button>
                </td>

                <td className="p-2 whitespace-nowrap">
                  <button
                    className="text-red-400 hover:text-red-600"
                    onClick={() => deleteAddress(row.original?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className="pagination flex justify-center mt-5">
        <ul className="inline-flex -space-x-px ">
          <li>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="bg-white w-24 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3"
            >
              Previous
            </button>
          </li>
          <li>
            <button className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 ">
              {pageIndex + 1} of {pageOptions.length}
            </button>
          </li>
          <li>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="bg-white w-24 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3"
            >
              Next
            </button>
          </li>
        </ul>
      </div>

      <select
        className="float-right mb-2 mr-4"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 25].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </>
  );
};

export default Table;
