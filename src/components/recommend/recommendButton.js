import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function RecommendButton() {
  return (
    <Stack spacing={2} direction="row" paddingTop="20px">
      <Button variant="contained">Search</Button>
    </Stack>
  );
}