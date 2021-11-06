import { useState } from "react";
import { useStyles } from "./Form.styled";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const CartAddressForm = ({ setActiveStep, address, setAddress }) => {
  const classes = useStyles();

  const { fname, surname, street, city, postcode, phoneNumber } = address;

  const [fnameError, setFnameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handleBack = () => {
    setActiveStep(0);
  };

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFnameError(false);
    setSurnameError(false);
    setStreetError(false);
    setCityError(false);
    setPostcodeError(false);
    setPhoneNumberError(false);

    if (fname === "") {
      setFnameError(true);
    }

    if (surname === "") {
      setSurnameError(true);
    }

    if (street === "") {
      setStreetError(true);
    }

    if (city === "") {
      setStreetError(true);
    }

    if (postcode === "") {
      setStreetError(true);
    }

    if (phoneNumber === "") {
      setStreetError(true);
    }

    setActiveStep(2);
  };

  return (
    <Box sx={{ maxWidth: "75%", margin: "0 auto" }}>
      <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
        <Fab
          onClick={handleBack}
          variant="extended"
          aria-label="go back"
          sx={{
            alignSelf: "flex-start",
            mb: 1,
            fontSize: ".8rem",
            lineHeight: 2,
          }}
        >
          <ArrowBackOutlinedIcon sx={{ mr: 1, fontSize: "1.3rem" }} />
          back to cart
        </Fab>
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
