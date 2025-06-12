import {
  Table, TableBody, TableCell, TableHead, TableRow,
  Checkbox, Pagination, Select, MenuItem, Stack, Typography,
  Button
} from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export const DataTable = ({ data = [], columns, selectable = false }) => {
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const [columnPinning, setColumnPinning] = useState({ left: [], right: [] });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: selectable,
    enablePinning: true,
    state: {
      rowSelection,
      pagination,
      columnPinning,
    },
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onColumnPinningChange: setColumnPinning,
  });

  return (
    <div style={{ overflowX: "auto" }}>
      <div className="w-full overflow-scroll">
        <Table sx={{width: "auto", minWidth : "1800px", background: 'white',}}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {selectable && (
                  <TableCell>
                    <Checkbox
                      checked={table.getIsAllRowsSelected()}
                      onChange={table.getToggleAllRowsSelectedHandler()}
                    />
                  </TableCell>
                )}
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    sx={{
                      position: header.column.getIsPinned() ? 'sticky' : 'static',
                      left: header.column.getIsPinned() === 'left' ? 0 : undefined,
                      right: header.column.getIsPinned() === 'right' ? 0 : undefined,
                      background: 'white',
                      zIndex: 1,
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {/* Pinning buttons (example) */}
                    <div>
                      <Button onClick={() => header.column.pin('left')}>Left</Button>
                      <Button onClick={() => header.column.pin(false)}>❌</Button>
                      <Button onClick={() => header.column.pin('right')}>Right</Button>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getPaginationRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {selectable && (
                  <TableCell>
                    <Checkbox
                      checked={row.getIsSelected()}
                      onChange={row.getToggleSelectedHandler()}
                    />
                  </TableCell>
                )}
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    sx={{
                      position: cell.column.getIsPinned() ? 'sticky' : 'static',
                      left: cell.column.getIsPinned() === 'left' ? 0 : undefined,
                      right: cell.column.getIsPinned() === 'right' ? 0 : undefined,
                      background: 'white',
                      zIndex: 1,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </div>
  );
};
