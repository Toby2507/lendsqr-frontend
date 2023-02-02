import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { IoFilter } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { userInterface } from "../../Utils/interfaces";

interface tableInterface {
  columns: ColumnDef<userInterface>[];
  data: userInterface[];
}
const UserTable = ({ columns, data }: tableInterface) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });
  const currentPage = (table.getState().pagination.pageIndex + 1);
  const pages = Array.from({ length: table.getPageCount() - currentPage }, (v, i) => i + currentPage);
  return (
    <>
      <section className="dashboard-table">
        <table>
          <thead className="dashboard-table__header">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    <div className="dashboard-table__header--heading">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      <IoFilter />
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
      <div className="dashboard-navigation">
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
    </>
  );
};

export default UserTable;