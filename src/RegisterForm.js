import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';

const RegisterForm = () => {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <form>
            <Typography 
                variant="h5"
                component="h2"
                gutterBottom
            >
                Welcome! Do not wait register now and join our community
            </Typography>
            <Button
                variant="contained"
                color="primary"
                type="submit"   
                endIcon={<SendIcon />}  
            >
                REGISTER
            </Button>
        </form>
        </Container>
    );
}
 
export default RegisterForm;