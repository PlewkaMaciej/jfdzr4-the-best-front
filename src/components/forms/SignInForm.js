import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../index";
import { useStyles } from "./Form.styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useMessageContext } from "../../controllers/MessageContext";

const SignInForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

    const { setOpen, setMessage, setColor } = useMessageContext();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setMessage("user successfully signed in");
          setColor("success");
          setOpen(true);
          setShouldRedirect(true);
        })
        .catch((error) => {
          setMessage(error.message);
          setColor("error");
          setOpen(true);
        });
    }
  };

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <div className={classes.wrapper}>
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <div>
            <Typography variant="h5" component="h2" gutterBottom align="center">
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
            type="password"
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
        <Typography variant="overline" align="right">
          New to Smart Books?
          <Link to="/sign-up" className={classes.link}>
            Create new account
          </Link>
        </Typography>
      </div>
    </Container>
  );
};

export default SignInForm;
