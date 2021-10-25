import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth, db } from "../../index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useMessageContext } from "../../controllers/MessageContext";
import { useStyles } from "./Form.styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const SignUpForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = formData;

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

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
    setUsernameError(false);
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (username === "") {
      setUsernameError(true);
    }
    if (email && password && username) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userRef = doc(db, "users", userCredential.user.uid);
          setDoc(userRef, {
            username,
          });
        })
        .then(() => {
          setMessage("new account successfully created");
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
            type="password"
            name="password"
            value={password}
            fullWidth
            required
            className={classes.field}
            error={passwordError}
            onChange={handleChange}
          />
          <TextField
            label="username"
            variant="outlined"
            color="primary"
            type="text"
            name="username"
            value={username}
            fullWidth
            required
            className={classes.field}
            error={usernameError}
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
        <Typography variant="overline" align="right">
          Already have an account?
          <Link to="/sign-in" className={classes.link}>
            Sign in
          </Link>
        </Typography>
      </div>
    </Container>
  );
};

export default SignUpForm;
