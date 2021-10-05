import { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../index';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
    wrapper: {
        maxWidth: 670,
        minHeight: 480,
        margin: '12% auto',
        padding: '20px 40px',
        border: '1px solid #FAFAFA',
        borderRadius: 20,
        boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },   
    btn: {
        marginTop: 10,
        marginBottom: 30,
        width: '25%',
        alignSelf: 'center'
    },
    field: {
        marginTop: 20,
        marginBottom: 20
    },
        link: {
        marginLeft: 15,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#2196f3',
        borderRadius: 5,
        boxShadow: '0 0 2px rgba(0, 0, 0, .1)'
    }
})

const SignInForm = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData;

    const [shouldRedirect, setShouldRedirect] = useState(false); 

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        if (email === '') {
            setEmailError(true);
        } 
        if (password === '') {
            setPasswordError(true);
        }
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    setFormData({
                    email: '',
                    password: ''
                    });
                    setShouldRedirect(true);
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
    }

    if (shouldRedirect) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <div className={classes.wrapper}>
                <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
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
                            Sign in and enjoy!
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
                        error={emailError}
                        onChange={handleChange}
                    />
                    <TextField 
                        label="choose password"
                        variant="outlined"
                        color="primary"
                        type='password'
                        name="password"
                        value={password}
                        fullWidth
                        required
                        className={classes.field}
                        error={passwordError}
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"   
                        endIcon={<SendIcon />} 
                        className={classes.btn} 
                    >
                        SIGN IN
                    </Button>
                </form>
                    <Typography
                        variant="overline"
                        align="right"    
                    >
                        New to Smart Books? 
                        <Link to="/sign-up" className={classes.link}>
                            Create new account
                        </Link>
                    </Typography>
            </div>
        </Container>
    );
}

export default SignInForm;