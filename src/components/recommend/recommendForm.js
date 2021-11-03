import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




export default function RecommendedCheckbox() {
  return (
    <FormGroup sx={{ width: '10%', textAlign: 'center' }}>
    <FormControlLabel control={<Checkbox default />} label="Fantastic" />
    <FormControlLabel control={<Checkbox default />} label="Detective story" />
    <FormControlLabel control={<Checkbox default />} label="Travels" />
    <FormControlLabel control={<Checkbox default />} label="Love story" />
    <FormControlLabel control={<Checkbox default />} label="Drama" />
    <FormControlLabel control={<Checkbox default />} label="Horror" />
  </FormGroup>
  );
}

