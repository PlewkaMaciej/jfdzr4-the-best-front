import AmountButtons from "./AmountButtons";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import { ItemDetails, Wrapper } from "./CartItem.styled";

const CartItem = ({id, title, author, price, amount, imgUrl}) => {

  const increase = () => {};
  const decrease = () => {};

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
          <Typography variant="body1">
            title: {title}
          </Typography>
          <Typography variant="body1">author: {author}</Typography>
        </Box>
      </ItemDetails>
      <Typography variant="body1">{price.toFixed(2)} zł</Typography>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        {(price * amount).toFixed(2)} zł
      </Typography>
      <IconButton
      // onClick={() => removeItem(id)}
      >
        <DeleteOutlineIcon
          color="warning"
          sx={{ backgroundColor: "transparent" }}
        />
      </IconButton>
    </Wrapper>
  );
};

export default CartItem;
