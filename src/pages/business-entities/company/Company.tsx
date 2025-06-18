import React, { useState, type JSX, type ReactElement } from 'react'
import { DataTable, type TableColumnDef } from '../../../components/common/table/DataTable'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormHelperText, FormLabel, IconButton, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { Controller, useForm, type ReadFormState, type SubmitHandler, type UseFormProps, type UseFormReturn } from "react-hook-form"
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
    businessType : z.array(z.string()).nullable().optional(),
    status : z.array(z.string()).optional(),
    companyType : z.array(z.string()).optional(),
    continent : z.array(z.string()).optional(),
    country : z.array(z.string()).optional(),
    state : z.array(z.string()).optional(),
    city : z.array(z.string()).optional(),
    interested : z.array(z.string()).optional(),
    brand : z.array(z.string()).optional(),
    category : z.array(z.string()).optional(),
    kyc_verified : z.array(z.string()).optional(),
    enable_billing : z.array(z.string()).optional(),
    created_date : z.date().nullable().optional(),
  })
  type FilterFormData = z.infer<typeof filterSchema>;

  const openFilter = () => setIsFilterOpen(true)
  const closeFilter = () => {
    setIsFilterOpen(false)
    reset() 
  }
  const { control, handleSubmit, reset } = useForm<FilterFormData>({
    resolver : zodResolver(filterSchema),
    defaultValues : {
      status : [],
      businessType : [],
      companyType : [],
      continent : [],
      country : [],
      state : [],
      city : [],
      interested : [],
      brand : [],
      category : [],
      kyc_verified : [],
      enable_billing : [],
      created_date : null,
    }
  })

  const submitHandler: SubmitHandler<FilterFormData> = (data)=>{
    console.log("form data", data)
    closeFilter()
  }
  return (
    <>
      <FilterButton onClick={openFilter} />
      <Dialog open={isFilterOpen} onClose={closeFilter} maxWidth="xl">
        <DialogTitle sx={{ fontSize: 18 }}>Filter Company</DialogTitle>
        <Divider />
        <form onSubmit={handleSubmit(submitHandler)}>
          <DialogContent sx={{width: "800px"}}>
            <div className='grid grid-cols-3 gap-4'>
              <Controller 
                name='status'
                control={control}
                render={({field})=>(
                  <FormControl>
                    <InputLabel size='small'>Status</InputLabel>
                    <Select
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                      label="Status"
                      size='small'
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                      <MenuItem value="Disabled">Disabled</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='businessType'
                control={control}
                
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Business Type</InputLabel>
                    <Select
                      multiple
                      label="Business Type"
                      size='small'
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='companyType'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Company Type</InputLabel>
                    <Select
                      label="Company Type"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='continent'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Continent</InputLabel>
                    <Select
                      label="Continent"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='country'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Country</InputLabel>
                    <Select
                      label="Country"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='state'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>State</InputLabel>
                    <Select
                      label="State"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='city'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>City</InputLabel>
                    <Select
                      label="City"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='interested'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Interested In</InputLabel>
                    <Select
                      label="Interested In"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='brand'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Brand</InputLabel>
                    <Select
                      label="Brand"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='category'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Category</InputLabel>
                    <Select
                      label="Category"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="Wholesale">Wholesale</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Private Limited">Private Limited</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="B2B">B2B</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='kyc_verified'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>KYC Verified</InputLabel>
                    <Select
                      label="KYC Verified"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      {/* <MenuItem value="">None</MenuItem> */}
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller 
                name='enable_billing'
                control={control}
                render={({field})=>(
                  <FormControl fullWidth>
                    <InputLabel size='small'>Enable Billing</InputLabel>
                    <Select
                      label="Enable Billing"
                      size='small'
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                    >
                      {/* <MenuItem value="">None</MenuItem> */}
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
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