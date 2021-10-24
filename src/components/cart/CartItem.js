import AmountButtons from "./AmountButtons";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import { ItemDetails, Wrapper } from "./CartItem.styled";
import { useCartDispatch } from "../../controllers/CartContext";

const CartItem = ({ id, title, author, price, amount, imgUrl, copies }) => {
  const { removeItemFromCart, toggleAmount } = useCartDispatch();

  const increaseAmount = () => {
    toggleAmount(id, "increase");
  };

  const decreaseAmount = () => {
    toggleAmount(id, "decrease");
  };

  return (
    <Wrapper>
      <ItemDetails>
        <Avatar
          src={imgUrl}
          alt={title}
          variant="square"
          sx={{ width: 64, height: 64 }}
        />
        <Box>
          <Typography variant="body1">title: {title}</Typography>
          <Typography variant="body1">author: {author}</Typography>
        </Box>
      </ItemDetails>
      <Typography variant="body1">{price.toFixed(2)} zł</Typography>
      <AmountButtons
        amount={amount}
        copies={copies}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
        id={id}
      />
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        {(price * amount).toFixed(2)} zł
      </Typography>
      <IconButton onClick={() => removeItemFromCart(id)}>
        <DeleteOutlineIcon
          color="warning"
          sx={{ backgroundColor: "transparent" }}
        />
      </IconButton>
    </Wrapper>
  );
};

export default CartItem;
