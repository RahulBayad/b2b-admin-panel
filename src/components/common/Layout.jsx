import { Box, Typography } from '@mui/material'
import React from 'react'
import { DataTable } from '../ui/DataTable'
import { Outlet } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Header/>
      <div className='border h-full'>
        <Sidebar/>
        {/* <Outlet/> */}
      </div>
    </div>
  )
}

export default Layout