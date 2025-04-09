import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

function TabBarDEmo() {
    const[value,setValue]=useState(0);
  return (
    <>
    <AppBar>
    <Toolbar>
        <Typography variant='h4'>Logo</Typography>
    <Tabs sx={{marginLeft:'auto'}} textColor='inherit' indicatorColor='secondary'
    value={value}
    onChange={(e,newValue)=>setValue(newValue)}
    >
      <Tab label ='Home' />
      <Tab label='About'/>
      <Tab label='Contact' />
    </Tabs>
     </Toolbar>
    </AppBar>
   
    </>
  )
}

export default TabBarDEmo