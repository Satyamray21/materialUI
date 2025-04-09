import React from 'react'
import { Button } from '@mui/material'

function ButtonDemo() {
  return (
    <>
    <Button variant='contained' color="error">Click me</Button>
    <Button variant='contained' color="success">Click me 2</Button>
    <Button variant='text' 
    onClick = {()=>alert("Button was clicked")}>Click me 3</Button>
       
    </>

  )
}

export default ButtonDemo