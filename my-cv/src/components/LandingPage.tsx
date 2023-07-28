import React from 'react';
import { Box } from "@mui/material";
import Paper from './Paper';

function LandingPage() {
  return (
    <Box sx={{width:'100%', height:'100%', backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'start', }}>
      <Paper/>
    </Box>
    );
}

export default LandingPage;