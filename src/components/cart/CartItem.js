import AmountButtons from "./AmountButtons";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import { ItemDetails, Wrapper } from "./CartItem.styled";

const CartItem = () => {
  const amount = 5;
  const price = 17.99;

  const increase = () => {};
  const decrease = () => {};

  return (
    <Wrapper>
      <ItemDetails>
        <Avatar
          src=""
          alt="title"
          variant="square"
          sx={{ width: 64, height: 64 }}
        />
        <Box>
          <Typography variant="body1">
            title: Kobieta na krańcu świata
          </Typography>
          <Typography variant="body1">author: Martyna Wojciechowska</Typography>
        </Box>
      </ItemDetails>
      <Typography variant="body1">{price} zł</Typography>
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
