import {
  Checkbox, IconButton, OutlinedInput, Button, Menu, MenuItem, Paper,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Dialog,
  DialogContent,
  DialogActions
} from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnPinningState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import { GridArrowDownwardIcon, GridArrowUpwardIcon, GridViewColumnIcon } from "@mui/x-data-grid";
import { EllipsisVertical, Import, ListFilter, Printer, Search } from "lucide-react";
import React, { useCallback, useState, type JSX, type ReactElement } from "react";

type DataTableProps = {
  data: unknown[];
  columns: unknown[];
  selectable?: boolean;
  FilterDialog?: JSX.Element;
  showToolbar?: boolean;
  enableFilter?: boolean;
  enableExport?: boolean;
  enableImport?: boolean;
  enableSearch?: boolean;
}

export type TableColumnDef<T> = ColumnDef<T> & {
  flex?: number;
  width?: number;
};

export const DataTable = ({ data = [], columns, selectable = false, FilterDialog }: DataTableProps) => {
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({ left: [], right: [] });
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [sorting, setSorting] = useState<SortingState>([]);


  const table = useReactTable({
    data,
    columns,
    enableRowSelection: selectable,
    enablePinning: true,
    state: {
      rowSelection,
      pagination,
      columnPinning,
      columnVisibility,
      sorting
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onColumnPinningChange: setColumnPinning,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel()
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
          size="small"
          startAdornment={<Search className='mr-2' size={14} />}
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
        {
          FilterDialog && <FilterDialog />
        }
        
      </Paper>
    )
  }, [columns]);

  const TableHeaderMenu = useCallback(({ header }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

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

    const sortASC = (columnID: string) => {
      table.setSorting((prev) => {
        const filteredCols = prev.filter(col => col.id !== columnID)
        return [...filteredCols, { id: columnID, desc: false }]
      })
      handleClose()
    }
    const sortDESC = (columnID: string) => {
      table.setSorting((prev) => {
        const filteredCols = prev.filter(col => col.id !== columnID)
        return [...filteredCols, { id: columnID, desc: true }]
      })
      handleClose()
    }
    const unSort = (columnID: string) => {
      table.setSorting(prev => prev.filter(col => col.id !== columnID))
      handleClose()
    }

    return (
      <>
        <Button
          aria-controls={`pin-menu-${header.id}`}
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
          onClick={handleOpen}
          sx={{ minWidth: "auto", opacity: 1, p: 1, ":hover": { opacity: 1 } }}
        >
          <EllipsisVertical size={13} />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          slotProps={{
            paper: {
              sx: {
                borderRadius: "5px"
              }
            }
          }}
        >
          <ListItemButton onClick={() => sortASC(header.column.columnDef.accessorKey)}>
            <ListItemIcon sx={{ width: "30px", minWidth: "auto" }}>
              <GridArrowUpwardIcon sx={{ width: "19px", p: 0 }} />
            </ListItemIcon>
            <ListItemText primary="Sort ASC"></ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => sortDESC(header.column.columnDef.accessorKey)}>
            <ListItemIcon sx={{ width: "30px", minWidth: "auto" }}>
              <GridArrowDownwardIcon sx={{ width: "19px", p: 0 }} />
            </ListItemIcon>
            <ListItemText primary="Sort DESC"></ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={handlePinLeft}>
            <ListItemIcon sx={{ width: "30px", minWidth: "auto" }}><PushPinIcon sx={{ width: "19px", p: 0, transform: "rotate(30deg)" }} /> </ListItemIcon>
            <ListItemText primary="Pin Left"></ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handlePinRight}>
            <ListItemIcon sx={{ width: "30px", minWidth: "auto" }}><PushPinIcon sx={{ width: "19px", p: 0, transform: "rotate(-30deg)" }} /> </ListItemIcon>
            <ListItemText primary="Pin Right"></ListItemText>
          </ListItemButton>
          {/* <ListItemButton onClick={handleUnpin}>    
            <ListItemIcon sx={{width: "30px", minWidth: "auto"}}><PushPinIcon sx={{width: "19px", p: 0,}}/> </ListItemIcon>
            <ListItemText primary="Unpin"></ListItemText>
          </ListItemButton> */}
        </Menu>
      </>
    );
  }, []);



  return (
    <Paper className="mt-1"
      sx={{
        display: "grid",
        overflow: "hidden"
      }}
    >
      <TableToolbar />
      <Paper sx={{ overflowX: "auto", border: "none", borderRadius: 0 }}>
        <table className="w-full whitespace-nowrap" >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {selectable && (
                  <td className="sticky left-0 z-10">
                    <Checkbox
                      size="small"
                      checked={table.getIsAllRowsSelected()}
                      onChange={table.getToggleAllRowsSelectedHandler()}
                    />
                  </td>
                )}
                {headerGroup.headers.map((header) => (
                  <td
                    key={header.id}
                    style={{
                      position: header.column.getIsPinned() ? 'sticky' : 'static',
                      left: header.column.getIsPinned() === 'left' ? (selectable ? 54 : 0) : undefined,
                      right: header.column.getIsPinned() === 'right' ? 0 : undefined,
                      zIndex: 2,
                      minWidth: "200px",
                    }}
                  >
                    <div className="flex justify-between items-center pr-1 table-header">
                      <span className="flex gap-1 items-center">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <Button
                          onClick={() => header.column.pin(header.column.getIsPinned() ? false : 'left')}
                          sx={{ minWidth: 'auto', p: 0, height: "30px", width: "30px", borderRadius: "1000px", display: header.column.getIsPinned() ? "initial" : "none" }}
                        >
                          <PushPinIcon sx={{ width: "16px", height: "16px", color: "gray", p: 0, mr: 0, minWidth: "auto" }} />
                        </Button>
                        {
                          header.column.getIsSorted() === "asc" ?
                            <Button
                              sx={{ minWidth: 'auto', p: 0, height: "30px", width: "30px", borderRadius: "1000px" }}
                              // onClick={() => table.setSorting(prev => prev.filter(col => col.id !== header.column.columnDef?.accessorKey))}
                              onClick={() => header.column.toggleSorting()}
                            >
                              <GridArrowUpwardIcon sx={{ width: "16px", p: 0, color: "gray" }} />
                            </Button> :
                            header.column.getIsSorted() === "desc" ?
                              <Button
                                sx={{ minWidth: 'auto', p: 0, height: "30px", width: "30px", borderRadius: "1000px" }}
                                onClick={() => header.column.toggleSorting()}
                              >
                                <GridArrowDownwardIcon sx={{ width: "16px", p: 0, color: "gray" }} />
                              </Button> : ""
                        }
                      </span>
                      <TableHeaderMenu header={header} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getPaginationRowModel().rows.map((row) => (
              <tr key={row.id}>
                {selectable && (
                  <td className="sticky left-0 z-10 p-0">
                    <Checkbox
                      size="small"
                      checked={row.getIsSelected()}
                      onChange={row.getToggleSelectedHandler()}
                    />
                  </td>
                )}
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{
                      position: cell.column.getIsPinned() ? 'sticky' : 'static',
                      left: cell.column.getIsPinned() === 'left' ? (selectable ? 54 : 0) : undefined,
                      right: cell.column.getIsPinned() === 'right' ? 0 : undefined,
                      zIndex: 10,
                      fontSize: 13,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </Paper>
  );
};