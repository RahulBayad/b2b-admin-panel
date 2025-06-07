import { Box, Typography } from '@mui/material'
import React from 'react'
import { DataTable } from '../ui/DataTable'
import { Outlet } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  
  return (
    <div className='h-screen w-screen overflow-hidden flex'>
      <Sidebar/>
      <div className='h-full w-full'>
        <Header/>
        <main className='p-6 h-[90%] overflow-auto'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout