import React from "react";
import { DataTable } from "../../../components/ui/DataTable";
import { Avatar, Box, Typography } from "@mui/material";
import { countries } from "../../../countries";

const Countries = () => {
  

  const columns = [
    {
      field: "flag",
      headerName: "Flag",
      headerAlign: "center",
      renderCell: (params) => (
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
            src={params.value}
            alt="flag"
            sx={{ width: 30, height: 22}}
          />
        </Box>
      ),
      sortable: false,
      filterable: false,
    },
    { field: "country", headerName: "Country", flex: 1 },
    { field: "date", headerName: "Date", flex: 1, type: "date" },
    { field: "iso_code", headerName: "ISO Code", flex: 1 },
    { field: "phone_code", headerName: "Phone Code", flex: 1 },
    { field: "continent", headerName: "Continent", flex: 1 },
  ];
  const data = countries;

  return (
    <div>
      <Typography 
        variant="h5" 
        fontWeight={600} 
      >
        Countries
      </Typography>
      <DataTable  columns={columns} data={data} showExport showFilter showImport/>
    </div>
  );
};

export default Countries;
