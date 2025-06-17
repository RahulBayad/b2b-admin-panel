import React, { useState, type JSX, type ReactElement } from 'react'
import { DataTable, type TableColumnDef } from '../../../components/ui/DataTable'
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';


type CompanyTable = {
  id? : string | number;
  name : string;
  gst? : string;
  pan? : string;
  owner? : string;
  email : string;
  mobile : string;
}

const companyTableData:CompanyTable[] = [
  {
    id: 1,
    name : "ABC Enterprise",
    gst : "231HKV0482KD",
    pan : "HKV0482KD",
    owner : "Ben Stokes",
    email : "benstokes123@gmail.com",
    mobile : "+41 8694562165"
  },
  {
    id: 2,
    name : "DEF Enterprise",
    gst : "231HKV0482KD",
    pan : "HKV0482KD",
    owner : "Ben Stokes",
    email : "benstokes123@gmail.com",
    mobile : "+41 8694562165"
  },
  {
    id: 1,
    name : "TKA Enterprise",
    gst : "231HKV0482KD",
    pan : "HKV0482KD",
    owner : "Ben Stokes",
    email : "benstokes123@gmail.com",
    mobile : "+41 8694562165"
  },
  {
    id: 4,
    name : "JKL Enterprise",
    gst : "231HKV0482KD",
    pan : "HKV0482KD",
    owner : "Ben Stokes",
    email : "benstokes123@gmail.com",
    mobile : "+41 8694562165"
  },
  {
    id: 5,
    name : "MNO Enterprise",
    gst : "231HKV0482KD",
    pan : "HKV0482KD",
    owner : "Ben Stokes",
    email : "benstokes123@gmail.com",
    mobile : "+41 8694562165"
  },
]

const columns: TableColumnDef<CompanyTable>[] = [
  {accessorKey : "name", header: "Company", width:150, },
  // {accessorKey : "id", header: "Company ID", width: 150,},
  {
    accessorKey : "gst", 
    header: "Legal", width: 150,
    cell : (params)=>(
      <div className='flex flex-col'>
        <span><b>GST: </b>{params.row.original.gst}</span>
        <span><b>PAN: </b>{params.row.original.pan}</span>
      </div>
    ) 
  },
  {accessorKey : "owner", header: "Owner Name", width: 150, },
  {accessorKey : "email", header: "Email", width: 150, },
  {accessorKey : "mobile", header: "Contact", width: 150, },
]

const FilterDialogContent: JSX.Element = () =>{
  return (
    <form>
      <FormControl>
        <InputLabel size='small'>Business Type</InputLabel>
        <Select
          label="Business Type" 
          sx={{py:2}}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
    </form>
  )
}

const Company = () => {
  return (
    <React.Fragment> 
      <div className='flex justify-between items-center mb-2'>
        <Typography fontSize={18} fontWeight={500}>Company</Typography>
        <Button variant='contained' size='small'>Add New</Button>
      </div>
      <DataTable 
        columns={columns} 
        data={companyTableData} 
        selectable
        FilterDialogContent={FilterDialogContent}
      />
    </React.Fragment>
  )
}

export default Company