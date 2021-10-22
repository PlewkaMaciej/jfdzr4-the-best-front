import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Wrapper } from "./AmountButtons.styled";

const AmountButtons = ({
  increaseAmount,
  decreaseAmount,
  amount,
  copies,
}) => {
  return (
    <Wrapper>
      {amount <= 1 ? (
        <IconButton disabled>
          <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: "1rem" }} />
        </IconButton>
      ) : (
        <IconButton onClick={() => decreaseAmount()}>
          <RemoveCircleOutlineOutlinedIcon
            sx={{ fontSize: "1rem" }}
            color="warning"
          />
        </IconButton>
      )}
      <Typography sx={{ fontWeight: 700, fontSize: "1.3rem" }}>
        {amount}
      </Typography>
      {amount >= copies ? (
        <IconButton disabled>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: "1rem" }} />
        </IconButton>
      ) : (
        <IconButton onClick={() => increaseAmount()}>
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
