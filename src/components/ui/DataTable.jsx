import { ColumnsPanelTrigger, DataGrid, GridViewColumnIcon, Toolbar, ToolbarButton, useGridApiContext } from "@mui/x-data-grid";
import { countries } from "../../countries";
import {
  Avatar,
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Download, ListFilter, Printer, RefreshCcw, Search } from "lucide-react";

export const DataTable = ({ data: rows, columns, showToolbar = true, showExport, showImport, showFilter  }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = Math.ceil(rows.length / pageSize);

  const handlePageChange = (_, value) => {
    setPage(value - 1);
  };
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(0); // reset to first page when page size changes
  };

  const MyToolbar = () => {
    const apiRef = useGridApiContext();
    const handleExport = () => {
      apiRef.current.exportDataAsCsv(); // you can also use exportDataAsPrint()
    };
    return (
      <Toolbar sx={{pb:2 }}>
        <OutlinedInput
          size="small"
          fullWidth
          sx={{ height: "35px", mr: 1, borderRadius: 9999 }}
          startAdornment={<Search size={16} className="mr-2" />}
        />
        <div>
          <Button
            title="Reload Table Data"
            size="medium"         
            sx={{
              borderRadius : "9999px",
              width: "40px",
              height: "40px", 
              minWidth: "auto",
              padding: "0px",
            }}
          >
            <RefreshCcw size={16} />
          </Button>
        </div>
        <div>
          <ColumnsPanelTrigger render={<ToolbarButton />}>
            <GridViewColumnIcon fontSize="small" />
          </ColumnsPanelTrigger>
        </div>
        {
          showFilter && 
          <div>
            <Button
              title="Filter"
              size="medium"
              sx={{
                borderRadius : "9999px",
                width: "40px",
                height: "40px",
                minWidth: "auto",
                padding: "0px",
              }}
            >
              <ListFilter className="!w-4 !h-4 p-0" />
            </Button>
          </div>
        }
        {
          showImport &&
          <div>
            <Button
              title="Import"
              size="medium"
              sx={{
                borderRadius : "9999px",
                width: "40px",
                height: "40px",
                minWidth: "auto",
                padding: "0px",
              }}
            >
              <Download size={16} />
            </Button>
          </div>
        }
        {
          showExport && 
          <div>
            <Button
              title="Export"
              size="medium"
              sx={{
                borderRadius : "9999px",
                width: "40px",
                height: "40px",
                minWidth: "auto",
                padding: "0px",
              }}
              onClick={() => handleExport()}
            >
              <Printer size={16} />
            </Button>
          </div>
        }
      </Toolbar>
    );
  };

  return (
    <Paper sx={{ p:1 }}>
      <DataGrid
        slots={{ toolbar: MyToolbar }}
        columns={columns}
        rows={rows.slice(page * pageSize, (page + 1) * pageSize)}
        pageSize={pageSize}
        checkboxSelection
        sx={{ border: 0, width: "100%", backgroundColor: "inherit" }}
        // disableColumnMenu
        disableColumnSorting
        hideFooterPagination
        showToolbar={showToolbar}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={0}
        spacing={2}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Rows per page:</Typography>
          <Select value={pageSize} onChange={handlePageSizeChange} size="small">
            {[5, 10, 25, 50, 100].map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Stack>
    </Paper>
  );
};
