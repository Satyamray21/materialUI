import React,{useState} from 'react'
import { TextField,Button } from '@mui/material'
function Form() {
    const[name,setName ]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(name,password,email);
        setName('');
        setPassword('');
        setEmail('');
    }
  return (
    <>
    <TextField 
    value={name}
    label='Please Enter you name'
    onChange = {(e)=>setName(e.target.value)}
    variant='outlined'
    sx = {{margin:'20px',width: '200px'}}
    /><br/>
    <TextField 
    value={password}
    label="Please enter your password"
    onChange = {(e)=>setPassword(e.target.value)}
    variant='outlined'
    sx = {{margin:'20px',width: '200px'}}
    /><br/>
    <TextField 
    value={email}
    label='Please Enter you email'
    onChange = {(e)=>setEmail(e.target.value)}
    variant='outlined'
    sx = {{margin:'20px',width: '200px'}}
    /><br/>
    <Button variant='outlined'
    onClick = {handelSubmit} >Submit</Button>
    </>
  )
}

export default Form