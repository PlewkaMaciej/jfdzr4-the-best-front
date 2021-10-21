import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Wrapper } from "./AmountButtons.styled";

const AmountButtons = ({ increase, decrease, amount, copies }) => {
  return (
    <Wrapper>
      {amount <= 1 ? (
        <IconButton disabled>
          <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: "1rem" }} />
        </IconButton>
      ) : (
        <IconButton onClick={decrease}>
          <RemoveCircleOutlineOutlinedIcon
            sx={{ fontSize: "1rem" }}
            color="warning"
          />
        </IconButton>
      )}
      <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
        {amount}
      </Typography>
      {amount >= copies ? (
        <IconButton disabled>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: "1rem" }} />
        </IconButton>
      ) : (
        <IconButton onClick={increase}>
          <AddCircleOutlineOutlinedIcon
            sx={{ fontSize: "1rem" }}
            color="primary"
          />
        </IconButton>
      )}
    </Wrapper>
  );
};

export default AmountButtons;
