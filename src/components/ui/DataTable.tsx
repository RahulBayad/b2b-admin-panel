import {
  Table, TableBody, TableCell, TableHead, TableRow,
  Checkbox, Pagination, Select, MenuItem, Stack, Typography,
  Button,
  Menu
} from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MenuIcon, Pin } from "lucide-react";
import { useState } from "react";
import "../../App.css"

export const DataTable = ({ data = [], columns, selectable = false }) => {
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const [columnPinning, setColumnPinning] = useState({ left: [], right: [] });
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuHeader, setMenuHeader] = useState(null);

  const handleOpen = (event, header) => {
    setAnchorEl(event.currentTarget);
    setMenuHeader(header)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pinToLeft: ()=> void = () => {
    menuHeader?.column?.pin('left')
    handleClose()
  }
  const pinToRight = () => {
    menuHeader?.column?.pin('right')
    handleClose()
  }
  const unpin = () => {
    menuHeader?.column?.pin(false)
    handleClose()
  }

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
        <table sx={{ background: 'white', }}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {selectable && (
                  <th>
                    <Checkbox
                      checked={table.getIsAllRowsSelected()}
                      onChange={table.getToggleAllRowsSelectedHandler()}
                    />
                  </th>
                )}
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    sx={{
                      position: header.column.getIsPinned() ? 'sticky' : 'static',
                      left: header.column.getIsPinned() === 'left' ? 0 : undefined,
                      right: header.column.getIsPinned() === 'right' ? 0 : undefined,
                      background: 'white',
                      zIndex: 1,
                    }}
                  >
                    <div className="flex justify-between items-center pr-1 table-header">
                      <span className="flex gap-1 items-center">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <Button startIcon={<PushPinIcon sx={{fontSize:14}}/>} sx={{minWidth: "auto", opacity: 0, ":hover" : {opacity: 1}}}>

                        </Button>
                          
                        
                      </span>
                      <Button
                        aria-controls={'basic-menu'}
                        aria-haspopup="true"
                        aria-expanded={Boolean(anchorEl)}
                        onClick={(e) => handleOpen(e, header)}
                        sx={{minWidth: "auto", opacity: 0, ":hover" : {opacity: 1}}}
                      >
                        <MenuIcon size={16}/>
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        sx={{ padding: 0, boxShadow: "none" }}
                        className="mui-menu"
                      >
                        <MenuItem onClick={pinToLeft} sx={{py:1, px:2, fontSize: 13 }}>Pin Left</MenuItem>
                        <MenuItem onClick={unpin} sx={{py:1, px:2, fontSize: 13 }}>Unpin</MenuItem>
                        <MenuItem onClick={pinToRight} sx={{py:1, px:2, fontSize: 13 }}>Pin Right</MenuItem>
                      </Menu>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getPaginationRowModel().rows.map((row) => (
              <tr key={row.id}>
                {selectable && (
                  <td>
                    <Checkbox
                      checked={row.getIsSelected()}
                      onChange={row.getToggleSelectedHandler()}
                    />
                  </td>
                )}
                {row.getVisibleCells().map((cell) => (
                  <td
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
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};
