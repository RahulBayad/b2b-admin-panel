import React from 'react'
import { DataTable } from '../../../components/ui/DataTable'
import type { GridColDef } from '@mui/x-data-grid'


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

// const columns: GridColDef<CompanyTable>[] = [
//   {field : "name", headerName: "Company", flex:1 },
//   {field : "id", headerName: "Company ID", flex:1 },
//   {
//     field : "gst", 
//     headerName: "Legal",
//     flex:1,
//     renderCell : (params)=>(
//       <div className='flex flex-col'>
//         <span><b>GST: </b>{params.row.gst}</span>
//         <span><b>PAN: </b>{params.row.pan}</span>
//       </div>
//     ) 
//   },
//   {field : "owner", headerName: "Owner Name", flex:1 },
//   {field : "email", headerName: "Email", flex:1 },
//   {field : "mobile", headerName: "Contact", flex:1 },
// ]
const columns = [
  {accessorKey : "name", header: "Company", flex:1 },
  {accessorKey : "id", header: "Company ID", flex:1 },
  {
    accessorKey : "gst", 
    header: "Legal",
    flex:1,
    cell : (params)=>(
      <div className='flex flex-col'>
        <span><b>GST: </b>{params.row.gst}</span>
        <span><b>PAN: </b>{params.row.pan}</span>
      </div>
    ) 
  },
  {accessorKey : "owner", header: "Owner Name", flex:1 },
  {accessorKey : "email", header: "Email", flex:1 },
  {accessorKey : "mobile", header: "Contact", flex:1 },
]


const Company: React.FunctionComponent = () => {
  return (
    <React.Fragment>  
      <DataTable columns={columns} data={companyTableData} rowSelection={false} selectable/>
    </React.Fragment>
  )
}

export default Company