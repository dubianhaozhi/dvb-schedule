import React from "react";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { ColumnDef, flexRender, Table } from "@tanstack/react-table";

interface Props<TData, TValue> {
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
}
export function DataTableBody<TData, TValue>({
  table,
  columns,
}: Props<TData, TValue>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
