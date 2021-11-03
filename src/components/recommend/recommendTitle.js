import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function RecommendHeader() {
    return (
      <Box sx={{ width: '100%', textAlign: 'start' }}>
        <Typography variant="h4" gutterBottom component="div">
        Choose something for yourself:
        </Typography>
      </Box>
    );
  }
  