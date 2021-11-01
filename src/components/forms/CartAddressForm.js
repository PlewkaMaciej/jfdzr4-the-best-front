import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth, db } from "../../index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useMessageContext } from "../../controllers/MessageContext";
import { useStyles } from "./Form.styled";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const CartAddressForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    fname: "",
    surname: "",
    street: "",
    city: "",
    postcode: "",
    phoneNumber: "",
  });
  const { fname, surname, street, city, postcode, phoneNumber } = formData;

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [fnameError, setfnameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const { setOpen, setMessage, setColor } = useMessageContext();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError(false);
//     setPasswordError(false);
//     setUsernameError(false);
//     if (email === "") {
//       setEmailError(true);
//     }
//     if (password === "") {
//       setPasswordError(true);
//     }
//     if (username === "") {
//       setUsernameError(true);
//     }
//     if (email && password && username) {
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           const userRef = doc(db, "users", userCredential.user.uid);
//           setDoc(userRef, {
//             username,
//             isAvatarDefault: true,
//           });
//         })
//         .then(() => {
//           setMessage("new account successfully created");
//           setColor("success");
//           setOpen(true);
//           setShouldRedirect(true);
//         })
//         .catch((error) => {
//           setMessage(error.message);
//           setColor("error");
//           setOpen(true);
//         });
//     }
//   };

//   if (shouldRedirect) {
//     return <Redirect to="/" />;
//   }

  return (
    <Box sx={{ maxWidth: "75%", margin: "0 auto" }}>
      <form autoComplete="off" className={classes.form} onSubmit={(e) => {e.preventDefault()}}>
        <Typography variant="h4" gutterBottom align="center">
          Post to
        </Typography>
        <TextField
          label="First name"
          variant="outlined"
          color="primary"
          type="text"
          name="fname"
          value={fname}
          fullWidth
          required
          className={classes.field}
          error={fnameError}
          onChange={handleChange}
        />
        <TextField
          label="Surname"
          variant="outlined"
          color="primary"
          type="text"
          name="surname"
          value={surname}
          fullWidth
          required
          className={classes.field}
          error={surnameError}
          onChange={handleChange}
        />
        <TextField
          label="Street"
          variant="outlined"
          color="primary"
          type="text"
          name="street"
          value={street}
          fullWidth
          required
          className={classes.field}
          error={streetError}
          onChange={handleChange}
        />
        <TextField
          label="City"
          variant="outlined"
          color="primary"
          type="text"
          name="city"
          value={city}
          fullWidth
          required
          className={classes.field}
          error={cityError}
          onChange={handleChange}
        />
        <TextField
          label="Postcode"
          variant="outlined"
          color="primary"
          type="text"
          name="postcode"
          value={postcode}
          fullWidth
          required
          className={classes.field}
          error={postcodeError}
          onChange={handleChange}
        />
        <TextField
          label="Phone number"
          variant="outlined"
          color="primary"
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          fullWidth
          required
          className={classes.field}
          error={phoneNumberError}
          onChange={handleChange}
        />
        <Fab
          variant="extended"
          color="primary"
          type="submit"
          aria-label="sign in"
          sx={{ width: "30%", alignSelf: "center" }}
        >
          proceed to checkout
          <SendIcon sx={{ ml: 1, fontSize: "1.2rem" }} />
        </Fab>
      </form>
    </Box>
  );
};

export default CartAddressForm;
