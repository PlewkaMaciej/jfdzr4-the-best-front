import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AboutHeader() {
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom component="div">
        About SMART BOOKS.com
      </Typography>
       <Typography variant="subtitle1" gutterBottom component="div">
       Smart Books.com offers online customers the Web's premier destination for books, eBooks, magazines and related products and services
      </Typography>
    </Box>
  );
}
