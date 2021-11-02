import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import { Wrapper, ItemRight, ItemLeft } from "./CartSummary.styled";
import { useCartState } from "../../controllers/CartContext";

const CartSummary = ({ setActiveStep }) => {
  const { totalAmount, shippingFee } = useCartState();
  const handleProceed = () => {
    setActiveStep(1);
  };
  return (
    <Wrapper>
      <Grid container rowSpacing={2}>
        <Grid item xs={6}>
          <ItemLeft>subtotal :</ItemLeft>
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
              mt: 2,
            }}
            onClick={handleProceed}
          >
            proceed to address
            <SendIcon
              sx={{
                ml: 1,
                fontSize: "1rem",
              }}
            />
          </Fab>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CartSummary;
