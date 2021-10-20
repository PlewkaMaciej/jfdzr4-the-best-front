import { Link } from "react-router-dom";
import CartCategories from "./CartCategories";
import CartSummary from "./CartSummary";
import { Wrapper } from "./Cart.styled";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CartItem from "./CartItem";
import Fab from "@mui/material/Fab";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EmptyCartList from "./EmptyCartList";
import { useCartState } from "../../controllers/CartContext";

const Cart = () => {
  const cartState = useCartState();
  console.log(cartState)
  const { cartItems } = cartState;

  return (
    <Wrapper
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {cartItems.length > 0 ? (
        <>
          <CartCategories />
          <Divider />
          {cartItems.map(item => {
            return <CartItem key={item.id} {...item} />
          })}
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "3rem",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Fab
                // onClick={handleBack}
                variant="extended"
                color="primary"
                aria-label="continue shopping"
                sx={{
                  fontSize: ".8rem",
                }}
              >
                <AddShoppingCartIcon
                  sx={{
                    fontSize: "1rem",
                    mr: 1,
                  }}
                />
                continue shopping
              </Fab>
            </Link>
            <Fab
              // onClick={handleBack}
              variant="extended"
              aria-label="clear cart"
              sx={{
                fontSize: ".8rem",
              }}
            >
              <DeleteOutlineIcon
                sx={{
                  fontSize: "1rem",
                  mr: 1,
                }}
              />
              clear shopping cart
            </Fab>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CartSummary />
          </Box>
        </>
      ) : (
        <EmptyCartList />
      )}
    </Wrapper>
  );
};

export default Cart;
