import React, { useState } from "react";
import { DataTable } from "../../../components/ui/DataTable";
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { countries } from "../../../countries";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

const Countries = () => {
  

  // const columns: GridColDef[] = [
  //   {
  //     field: "flag",
  //     headerName: "Flag",
  //     headerAlign: "center",
  //     renderCell: (params) => (
  //       <Box
  //         sx={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           width: "100%",
  //           height: "100%",
  //         }}
  //       >
  //         <Avatar
  //           variant="square"
  //           src={params.value}
  //           alt="flag"
  //           sx={{ width: 30, height: 22}}
  //         />
  //       </Box>
  //     ),
  //     sortable: false,
  //     filterable: false,
  //   },
  //   { field: "country", headerName: "Country", flex: 1 },
  //   { field: "date", headerName: "Date", flex: 1, type: "date" },
  //   { field: "iso_code", headerName: "ISO Code", flex: 1 },
  //   { field: "phone_code", headerName: "Phone Code", flex: 1 },
  //   { field: "continent", headerName: "Continent", flex: 1 },
  // ];
  const columns = [
    {
      accessorKey: "flag",
      header: "Flag",
      cell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Avatar
            variant="square"
            src={params.getValue()}
            alt="flag"
            sx={{ width: 30, height: 22}}
          />
        </Box>
      ),
    },
    { accessorKey: "country", header: "Country" },
    { accessorKey: "date", header: "Date", type: "date" },
    { accessorKey: "iso_code", header: "ISO Code" },
    { accessorKey: "phone_code", header: "Phone Code" },
    { accessorKey: "continent", header: "Continent" },
  ];
  const data = countries;

  const addDialog = () => {
    const [ isDialogOpen , setIsDialogOpen ] = useState<boolean>(true) 
    const handleOpen = () : void => setIsDialogOpen(true)
    const handleClose = () : void => setIsDialogOpen(false)

    return (
      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
      >
        <DialogTitle>Add New Country</DialogTitle>
        <DialogContent>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    )
  }

  return (
    <div>
      <div className="flex justify-between mb-3">
        <Typography variant="h5" fontWeight={600} >Countries</Typography>
        <Button variant="contained" id="myButton">New</Button>
      </div>
      <DataTable columns={columns} data={data} selectable/>
    </div>
  );
};

export default Countries;
