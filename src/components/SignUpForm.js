import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../index';

// komponent odpowiada za zarejestrowanie użytkownika w firebase auth
// formularz po wykonaniu rejestracji użytkownika czyści zmienną formData
// pozostaje do ustalenia: 1. gdzie po zarejetrowaniu użytkownik ma być przekierowany 
// 2.Do zastanowienia się czy nie powinniśmy usatwić globalnego stanu zalogowania bo może on być później potrzebny do warunkowego wyświetlania niektórych elementów na stronie 
//3. W stanie globalnym wydaje mi się że również powineien znajdować się token
//4. Formularz ma wyłączoną walidację bo domyślne działanie przeglądarki jest brzydkie ale za to jest obsługa błędu dla każdego pola jeśli jest puste ale dalej nie chroni to przed wpisaniem błednego maila - do dyskusji W sumie to można wykorzystać walidację przez samego firebase auth (okazuje się że on nie przepuści maila bez @)
//autowypełnianie pól przez przeglądarkę też jest wyłączone


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

const SignUpForm = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData;

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
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                    setFormData({
                    email: '',
                    password: ''
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
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
                    SIGN UP
                </Button>
            </form>
        </Container>
    );
}

export default SignUpForm;