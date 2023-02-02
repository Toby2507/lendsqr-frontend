import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { memo, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { userInterface } from "../../Utils/interfaces";
import TableFilter from "./TableFilter";
import { fuzzyFilter } from "./helperFuncs";

interface tableInterface {
  columns: ColumnDef<userInterface>[];
  data: userInterface[];
}
const UserTable = ({ columns, data }: tableInterface) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filterTable, setFilterTable] = useState<boolean>(false);
  const [resetTable, setResetTable] = useState<boolean>(false);
  const [showFilterBox, setShowFilterBox] = useState<boolean>(false);
  const filterBoxProps = {
    reset: resetTable,
    filter: filterTable,
    setReset: setResetTable,
    setFilter: setFilterTable,
    setShowBox: setShowFilterBox
  };
  const table = useReactTable({
    data,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });

  const filterColumns = table.getHeaderGroups().map(headerGroup => (
    headerGroup.headers.filter(header => header.column.getCanFilter()).map(header => header.column)
  ));
  const currentPage = (table.getState().pagination.pageIndex + 1);
  const pages = Array.from({ length: table.getPageCount() + 1 - currentPage }, (v, i) => i + currentPage);

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }]);
      }
    }
  }, [table]);
  return (
    <div className="dashboard-wrapper">
      <section className="dashboard-table">
        {/* FILTER BOX */}
        {showFilterBox && (
          <div className="table-filter">
            {filterColumns[0].map((column, i) => <TableFilter key={i} column={column} {...filterBoxProps} />)}
            <div className="table-filter__action">
              <button className="table-filter__action--reset" onClick={() => setResetTable(true)}>reset</button>
              <button className="table-filter__action--filter" onClick={() => setFilterTable(true)}>filter</button>
            </div>
          </div>
        )}
        {/* DATA TABLE */}
        <table>
          <thead className="dashboard-table__header">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    <div className="dashboard-table__header--heading" onClick={() => setShowFilterBox(!showFilterBox)}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      {!header.isPlaceholder && < IoFilter />}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="dashboard-table__body">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* NAVIGATION */}
      <div className="dashboard-navigation">
        {/* ALTER PAGE SIZE */}
        <div className="dashboard-navigation__size">
          <p>Showing</p>
          <select
            value={table.getState().pagination.pageSize}
            onChange={e => { table.setPageSize(Number(e.target.value)); }}
          >
            {[10, 20, 25, 50].map(pageSize => <option key={pageSize} value={pageSize}>{pageSize}</option>)}
          </select>
          <p>out of {data.length}</p>
        </div>
        {/* NAVIGATE PAGES */}
        <div className="dashboard-navigation__page">
          <button
            className="dashboard-navigation__page--btn"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          ><FaAngleLeft /></button>
          {
            pages.map((page, idx) => {
              if (pages.length <= 5) return <p key={idx}>{page}</p>;
              if ([0, 1, 2].includes(idx)) return <p key={idx}>{page}</p>;
              if (idx === 4) return <p key={idx}>...</p>;
              if ([pages.length - 1, pages.length - 2].includes(idx)) return <p key={idx}>{page}</p>;
              return null;
            })
          }
          <button
            className="dashboard-navigation__page--btn"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          ><FaAngleRight /></button>
        </div>
      </div>
    </div>
  );
};

export default memo(UserTable);