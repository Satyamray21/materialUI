import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function AppBarDemo() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Logo</Typography>
        <Button variant="contained" color="success" sx={{ marginLeft: 'auto' }}>
          Signin
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarDemo;
