import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CartSetOrder = () => {

  return (
    <Box sx={{ width: "60%", margin: "0 auto" }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontSize: "2rem", marginTop: "5rem" }}
      >
        Congratulations!
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontSize: "2rem", marginTop: "2rem" }}
      >
        Your products were successfully ordered !
      </Typography>
    </Box>
  );
};

export default CartSetOrder;
