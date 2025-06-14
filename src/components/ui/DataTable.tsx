import {
  Table, TableBody, TableCell, TableHead, TableRow,
  Checkbox, IconButton, OutlinedInput, Button, Menu, MenuItem, Paper,
  TableContainer
} from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import MenuIcon from '@mui/icons-material/Menu';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { GridViewColumnIcon } from "@mui/x-data-grid";
import { Import, ListFilter, Printer, Search } from "lucide-react";
import React, { useCallback, useState } from "react";

type DataTableProps = {
  data: unknown[],
  columns: unknown[],
  selectable: boolean,
}

export type TableColumnDef<T> = ColumnDef<T> & {
  flex?: number;
};

export const DataTable = ({ data = [], columns, selectable = false }) => {
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const [columnPinning, setColumnPinning] = useState({ left: [], right: [] });
  const [columnVisibility, setColumnVisibility] = useState({});

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
      columnVisibility
    },
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onColumnPinningChange: setColumnPinning,
    onColumnVisibilityChange: setColumnVisibility
  });

  const TableToolbar = useCallback(() => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Paper
        className="flex justify-end items-center gap-1 py-2 px-2"
        sx={{ border: "none", borderRadius: 0 }}
      >
        <OutlinedInput
          startAdornment={<Search className='mr-0' size={18} />}
          sx={{
            fontSize: 14,
          }}
        />
        <IconButton
          sx={{ p: 1.2 }}
          aria-controls={'visibility-menu'}
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
          onClick={handleOpen}
        >
          <GridViewColumnIcon style={{ fontSize: "18px" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          className="mui-menu"
        >
          {table.getAllColumns().map((column, index: number) => (
            <MenuItem sx={{ py: 1, px: 1, fontSize: 13 }} key={index}>
              <label htmlFor={`visibility-${column.id}`}>
                <Checkbox
                  id={`visibility-${column.id}`}
                  size="small"
                  sx={{ p: 0, mr: 1 }}
                  checked={column.getIsVisible()}
                  disabled={!column.getCanHide()}
                  onChange={column.getToggleVisibilityHandler()}
                  disableRipple
                />
                {column.columnDef.header}
              </label>
            </MenuItem>
          ))}
        </Menu>
        <IconButton sx={{ p: 1.2 }}>
          <Import size={18} />
        </IconButton>
        <IconButton sx={{ p: 1.2 }}>
          <Printer size={18} />
        </IconButton>
        <IconButton sx={{ p: 1.2 }}>
          <ListFilter size={18} />
        </IconButton>
      </Paper>
    )
  }, [columns]);

  const TableHeaderMenu = useCallback(({ header }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handlePinLeft = () => {
      header.column.pin('left');
      handleClose();
    };

    const handlePinRight = () => {
      header.column.pin('right');
      handleClose();
    };

    const handleUnpin = () => {
      header.column.pin(false);
      handleClose();
    };

    return (
      <>
        {/* <Button
          aria-controls={`pin-menu-${header.id}`}
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
          onClick={handleOpen}
          sx={{ minWidth: "auto", opacity: 0, ":hover": { opacity: 1 } }}
        >
          <MenuIcon size={16} />
        </Button> */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          className="mui-menu"
        >
          <MenuItem onClick={handlePinLeft} sx={{ py: 1, px: 2, fontSize: 13 }}>
            Pin Left
          </MenuItem>
          <MenuItem onClick={handlePinRight} sx={{ py: 1, px: 2, fontSize: 13 }}>
            Pin Right
          </MenuItem>
          <MenuItem onClick={handleUnpin} sx={{ py: 1, px: 2, fontSize: 13 }}>
            Unpin
          </MenuItem>
        </Menu>
      </>
    );
  }, []);

  return (
    <div className="">
      <Paper className="mt-1" sx={{ minWidth: 650, width: '100%', border: '1px solid #e0e0e0', borderRadius: 12 }}>
        <TableToolbar />
        <TableContainer component={Paper} sx={{ overflowX: 'auto', maxWidth: "100%" }}>
          <Table sx={{ minWidth: 'max-content', width: '100%', tableLayout: 'auto', display: "auto" }}>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {selectable && (
                    <TableCell sx={{ position: 'sticky', left: 0, zIndex: 2, backgroundColor: '#f5f5f5', minWidth: '48px' }}>
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
                        fontSize: 14,
                        position: header.column.getIsPinned() ? 'sticky' : 'static',
                        left: header.column.getIsPinned() === 'left' ? (selectable ? 48 : 0) : undefined,
                        right: header.column.getIsPinned() === 'right' ? 0 : undefined,
                        zIndex: 1,
                        minWidth: '200px',
                        backgroundColor: '#f5f5f5',
                      }}
                    >
                      <div className="flex justify-between items-center pr-1 table-header">
                        <span className="flex gap-1 items-center">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          <Button
                            startIcon={<PushPinIcon sx={{ fontSize: 14 }} />}
                            onClick={() => header.column.pin(header.column.getIsPinned() ? false : 'left')}
                            sx={{ minWidth: 'auto', opacity: 0, ':hover': { opacity: 1 } }}
                          />
                        </span>
                        <TableHeaderMenu header={header} />
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
                    <TableCell sx={{ position: 'sticky', left: 0, zIndex: 2, backgroundColor: '#ffffff', minWidth: '48px' }}>
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
                        left: cell.column.getIsPinned() === 'left' ? (selectable ? 48 : 0) : undefined,
                        right: cell.column.getIsPinned() === 'right' ? 0 : undefined,
                        zIndex: 1,
                        fontSize: 13,
                        minWidth: '200px',
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};