import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";
import { Wrapper } from "./EmptyCartList.styled";

const EmptyCartList = () => {
  return (
    <Wrapper>
      <Typography fontSize="large">
        Currently Your Smart Books cart is empty 
      </Typography>
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
    </Wrapper>
  );
};

export default EmptyCartList;
