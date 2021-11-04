import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { ItemRight, ItemLeft } from "./CartSummary.styled";
import { useCartState } from "../../controllers/CartContext";

const CartCheckout = ({ setActiveStep }) => {
  const { totalAmount, shippingFee, totalItems } = useCartState();
  const handleProceed = () => {
    setActiveStep(3);
  };
  return (
    <Box sx={{ width: "55%", margin: "0 auto", marginTop: "7rem" }}>
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
  );
};

export default CartCheckout;
