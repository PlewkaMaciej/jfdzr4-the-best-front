import Typography from "@mui/material/Typography";
import { Content, Span } from "./CartCategories.styled";

const CartCategories = () => {
  return (
    <>
      <Content>
        <Typography variant="h6" gutterBottom>
          product
        </Typography>
        <Typography variant="h6" gutterBottom>
          price
        </Typography>
        <Typography variant="h6" gutterBottom>
          quantity
        </Typography>
        <Typography variant="h6" gutterBottom>
          subtotal
        </Typography>
        <Span />
      </Content>
    </>
  );
};

export default CartCategories;
