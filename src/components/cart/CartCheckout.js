import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { ItemRight, ItemLeft } from "./CartSummary.styled";
import { useCartState } from "../../controllers/CartContext";
import { Typography } from "@mui/material";

const CartCheckout = ({
  setActiveStep,
  fname,
  surname,
  street,
  city,
  postcode,
  phoneNumber,
}) => {
  const { totalAmount, shippingFee, totalItems } = useCartState();
  const handleProceed = () => {
    setActiveStep(3);
  };
  const handleBack = () => {
    setActiveStep(1);
  };
  return (
    <>
      <Box
        sx={{
          width: "75%",
          margin: "0 auto",
        }}
      >
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
          back to address
        </Fab>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "75%",
          margin: "0 auto",
          marginTop: "4rem",
        }}
      >
        <Box
          sx={{
            width: "40%",
          }}
        >
          <Typography
            variant="subtitle1"
            component="h2"
            gutterBottom
            align="left"
            fontWeight="700"
          >
            Address:
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            gutterBottom
            align="left"
          >
            {`${fname} ${surname}`}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            gutterBottom
            align="left"
          >
            {street}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            gutterBottom
            align="left"
          ></Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            gutterBottom
            align="left"
          >
            {`${postcode} ${city}`}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            gutterBottom
            align="left"
          >
            {phoneNumber}
          </Typography>
        </Box>
        <Box sx={{ width: "55%" }}>
          <Grid container rowSpacing={2}>
            <Grid item xs={6}>
              <ItemLeft>
                subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}) :
              </ItemLeft>
            </Grid>
            <Grid item xs={6}>
              <ItemRight>{totalAmount.toFixed(2)} zł</ItemRight>
            </Grid>
            <Grid item xs={6}>
              <ItemLeft>shipping fee :</ItemLeft>
            </Grid>
            <Grid item xs={6}>
              <ItemRight>{shippingFee.toFixed(2)} zł</ItemRight>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <ItemLeft fontSize="1.3rem" fontWeight="700" gutterBottom>
                Order Total :
              </ItemLeft>
            </Grid>
            <Grid item xs={6}>
              <ItemRight gutterBottom fontSize="1.3rem" fontWeight="700">
                {(totalAmount + shippingFee).toFixed(2)} zł
              </ItemRight>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Fab
                variant="extended"
                color="primary"
                type="submit"
                aria-label="proceed to checkout"
                sx={{
                  fontSize: ".8rem",
                  marginTop: "3rem",
                }}
                onClick={handleProceed}
              >
                confirm and pay
                <PaymentOutlinedIcon
                  sx={{
                    ml: 1,
                    fontSize: "1.1rem",
                  }}
                />
              </Fab>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CartCheckout;
