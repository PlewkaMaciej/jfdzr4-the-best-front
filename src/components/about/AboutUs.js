import AboutImageLists from './AboutImages';
import AboutUsAccordions from './AboutAccordion';
import AboutHeader from './AboutHeader';
import Box from "@mui/material/Box";

function About() {
    return (
        <Box sx={{maxWidth: '1200px', margin: '0 auto'}}>
        <AboutHeader />
        <AboutImageLists />
        <AboutUsAccordions />
        </Box>
    )
  }
  
  export default About;