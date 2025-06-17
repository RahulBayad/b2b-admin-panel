import React, { useState, type JSX, type ReactElement } from 'react'
import { DataTable, type TableColumnDef } from '../../../components/common/table/DataTable'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormHelperText, FormLabel, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useForm, type ReadFormState, type UseFormProps, type UseFormReturn } from "react-hook-form"
import FilterButton from '../../../components/common/table/FilterButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


type CompanyTable = {
  id?: string | number;
  name: string;
  gst?: string;
  pan?: string;
  owner?: string;
  email: string;
  mobile: string;
}
const companyTableData: CompanyTable[] = [
  {
    id: 1,
    name: "ABC Enterprise",
    gst: "231HKV0482KD",
    pan: "HKV0482KD",
    owner: "Ben Stokes",
    email: "benstokes123@gmail.com",
    mobile: "+41 8694562165"
  },
  {
    id: 2,
    name: "DEF Enterprise",
    gst: "231HKV0482KD",
    pan: "HKV0482KD",
    owner: "Ben Stokes",
    email: "benstokes123@gmail.com",
    mobile: "+41 8694562165"
  },
  {
    id: 1,
    name: "TKA Enterprise",
    gst: "231HKV0482KD",
    pan: "HKV0482KD",
    owner: "Ben Stokes",
    email: "benstokes123@gmail.com",
    mobile: "+41 8694562165"
  },
  {
    id: 4,
    name: "JKL Enterprise",
    gst: "231HKV0482KD",
    pan: "HKV0482KD",
    owner: "Ben Stokes",
    email: "benstokes123@gmail.com",
    mobile: "+41 8694562165"
  },
  {
    id: 5,
    name: "MNO Enterprise",
    gst: "231HKV0482KD",
    pan: "HKV0482KD",
    owner: "Ben Stokes",
    email: "benstokes123@gmail.com",
    mobile: "+41 8694562165"
  },
]

const columns: TableColumnDef<CompanyTable>[] = [
  { accessorKey: "name", header: "Company", width: 150, },
  // {accessorKey : "id", header: "Company ID", width: 150,},
  {
    accessorKey: "gst",
    header: "Legal", width: 150,
    cell: (params) => (
      <div className='flex flex-col'>
        <span><b>GST: </b>{params.row.original.gst}</span>
        <span><b>PAN: </b>{params.row.original.pan}</span>
      </div>
    )
  },
  { accessorKey: "owner", header: "Owner Name", width: 150, },
  { accessorKey: "email", header: "Email", width: 150, },
  { accessorKey: "mobile", header: "Contact", width: 150, },
]

const FilterDialog: JSX.Element = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterSchema = z.object({
    businessType : z.string().optional(),
    status : z.string().optional(),
  })

  const openFilter = () => setIsFilterOpen(true)
  const closeFilter = () => setIsFilterOpen(false)
  const { register , handleSubmit} = useForm<UseFormReturn>()

  const submitHandler = (data)=>{
    console.log("form data", data)
  }
  return (
    <>
      <FilterButton onClick={openFilter} />
      <Dialog open={isFilterOpen} onClose={closeFilter}>
        <DialogTitle sx={{ fontSize: 18 }}>Filter Company</DialogTitle>
        <Divider />
        <form onSubmit={handleSubmit(submitHandler)}>
          <DialogContent sx={{ width: "400px" }}>
            <div className='grid grid-cols-1 gap-5'>
              <FormControl fullWidth>
                <InputLabel size='small'>Business Type</InputLabel>
                <Select
                  label="Business Type"
                  size='small'
                  {...register('businessType')}
                >
                  <MenuItem value="Wholesale">Wholesale</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Private Limited">Private Limited</MenuItem>
                  <MenuItem value="Enterprise">Enterprise</MenuItem>
                  <MenuItem value="B2B">B2B</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel size='small'>Status</InputLabel>
                <Select
                  label="Status"
                  size='small'
                  {...register('status')}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="Disabled">Disabled</MenuItem>
                </Select>
              </FormControl>
            </div>
          </DialogContent>
          <DialogActions sx={{ py: 2, px: 3 }}>
            <Button onClick={closeFilter}>Cancel</Button>
            <Button variant='contained' type='submit'>Apply</Button>
          </DialogActions>
        </form>
      </Dialog>

    </>
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
        FilterDialog={FilterDialog}
      />
    </React.Fragment>
  )
}

export default Company