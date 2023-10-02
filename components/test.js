"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { useMemo } from "react";

const Table_Display = ({ mData }) => {
  // Check if mData is defined and is an array, otherwise default to an empty array
  const data = useMemo(() => (Array.isArray(mData) ? mData : []), [mData]);

  const columns = [
    {
      header: "ID",
      accessorKey: "ID",
      footer: "ID",
    },
    {
      header: "Name",
      accessorKey: "Name",
      footer: "Name",
    },
    {
      header: "Age",
      accessorKey: "Age",
      footer: "Age",
    },
    {
      header: "EPF Number",
      accessorKey: "EPFNumber",
      footer: "EPF Number",
    },
    {
      header: "Designation",
      accessorKey: "Designation",
      footer: "Designation",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-styles">
      {data.length > 0 ? ( // Check if data is available before rendering the table
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
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
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Table_Display;
  