import React from 'react'
import { AppContextProvider } from '@/components/contexts/appContext'
import { Box } from '@mui/material'
import { Header } from '@/components/ui/nav/header'
import { Sidebar } from '@/components/ui/nav/sidebar'

/**
 * AdminLayout provides a layout consisting of a Header, Sidebar, and Main area
 * @param param0
 * @returns
 */
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContextProvider>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
        <Box component='main' sx={{ flexGrow: 1, pl: 4, pt: 10 }}>
          {children}
        </Box>
      </Box>
    </AppContextProvider>
  )
}

export default AdminLayout
