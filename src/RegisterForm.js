import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
    container: {
        padding: '20px 0'
    },
    form: {
        maxWidth: 670,
        minHeight: 480,
        margin: '20px auto',
        padding: '20px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        border: '1px solid #FAFAFA',
        borderRadius: 20,
        boxShadow: '0 0 10px rgba(0, 0, 0, .1)'
    },   
    btn: {
        marginTop: 20,
        width: '25%',
        alignSelf: 'center'
    },
    field: {
        marginTop: 20,
        marginBottom: 20
    }
})

const RegisterForm = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted', email, password);
    }

    return (
        <Container className={classes.container}>
            <form noValidate autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                <div>
                <Typography 
                    variant="h5"
                    component="h2"
                    gutterBottom
                    align="center"
                >
                    Welcome!
                </Typography>
                <Typography 
                    variant="subtitle1"
                    component="h2"
                    gutterBottom
                    align="center"
                >
                    Do not wait register now and join our community!
                </Typography>
                </div>
                <TextField 
                    label="email address"
                    variant="outlined"
                    color="primary"
                    type="email"
                    name="email"
                    value={email}
                    fullWidth
                    required
                    className={classes.field}
                    onChange={handleChange}
                />
                <TextField 
                    label="password"
                    variant="outlined"
                    color="primary"
                    type='password'
                    name="password"
                    value={password}
                    fullWidth
                    required
                    className={classes.field}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"   
                    endIcon={<SendIcon />} 
                    className={classes.btn} 
                >
                    REGISTER
                </Button>
            </form>
        </Container>
    );
}

export default RegisterForm;