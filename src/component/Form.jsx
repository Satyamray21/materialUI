import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel ,Radio} from '@mui/material';

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [gender,setGender]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", name, password, email, course);
    setName('');
    setPassword('');
    setEmail('');
    setCourse('');
  };

  return (
    <>
      <TextField
        type='text'
        value={name}
        label='Please enter your name'
        onChange={(e) => setName(e.target.value)}
        variant='outlined'
        sx={{ margin: '20px', width: '200px' }}
      /><br />

      <TextField
        type='password'
        value={password}
        label='Please enter your password'
        onChange={(e) => setPassword(e.target.value)}
        variant='outlined'
        sx={{ margin: '20px', width: '200px' }}
      /><br />

      <TextField
        type='email'
        value={email}
        label='Please enter your email'
        onChange={(e) => setEmail(e.target.value)}
        variant='outlined'
        sx={{ margin: '20px', width: '200px' }}
      /><br />

      <FormControl variant="outlined" sx={{ margin: '20px', width: '200px' }}>
        <InputLabel id="menu">Courses</InputLabel>
        <Select
          labelId="menu"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          label="Courses"
        >
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="Node">Node</MenuItem>
          <MenuItem value="DSA">DSA</MenuItem>
          <MenuItem value="C">C</MenuItem>
        </Select>
      </FormControl><br />
      <FormControl>
        <FormLabel>
            Gender
            </FormLabel>
            <RadioGroup 
            value={gender}
            onChange={(e)=>setGender(e.target.value)}>
            <FormControlLabel
            value={'male'}
            label="Male"
            control = {<Radio />}
            />
              
            <FormControlLabel
            value={'female'}
            label="Female"
            control = {<Radio />} />
            <FormControlLabel
            value={'other'}
            label='Other'
            control = {<Radio />}
            />
            </RadioGroup>
      </FormControl>
    <br/>
      <Button
        variant='outlined'
        onClick={handleSubmit}
        sx={{ margin: '20px' }}
      >
        Submit
      </Button>
    </>
  );
}

export default Form;
