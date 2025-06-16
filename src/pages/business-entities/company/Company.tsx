import React from 'react'
import { DataTable, type TableColumnDef } from '../../../components/ui/DataTable'
import type { GridColDef } from '@mui/x-data-grid'
import { Typography } from '@mui/material';


type CompanyTable = {
  name : string;
  gst : string;
  pan : string;
  owner : string;
  email : string;
  mobile : string;
}

const companyTableData:CompanyTable = [
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
    id: 1,
    name : "ABC Enterprise",
    gst : "231HKV0482KD",
    pan : "HKV0482KD",
    owner : "Ben Stokes",
    email : "benstokes123@gmail.com",
    mobile : "+41 8694562165"
  },
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
    id: 1,
    name : "ABC Enterprise",
    gst : "231HKV0482KD",
    pan : "HKV0482KD",
    owner : "Ben Stokes",
    email : "benstokes123@gmail.com",
    mobile : "+41 8694562165"
  },
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
    id: 1,
    name : "ABC Enterprise",
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
  // {accessorKey : "err", header: "err", width: 150, },
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


const Company: React.FunctionComponent = () => {
  return (
    <React.Fragment>  
      <Typography fontSize={18} fontWeight={700}>Company</Typography>
      <DataTable columns={columns} data={companyTableData} rowSelection={false} selectable/>
    </React.Fragment>
  )
}

export default Company