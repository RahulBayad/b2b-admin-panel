import { Box, Typography } from '@mui/material'
import React from 'react'
import { DataTable } from '../ui/DataTable'
import { Outlet } from 'react-router'
import Header from './Header'

const Layout = () => {
  
  return (
    <div>
      <Header/>
      <div className='p-8'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout