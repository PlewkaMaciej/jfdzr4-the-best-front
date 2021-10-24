import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const Wrapper = styled(Paper)`
  max-width: 350px;
  padding: 2rem 3.5rem;
  align-self: flex-end;
  border-radius: 10px;
`;

export const ItemRight = styled(Typography)`
  text-align: left;
  margin-left: 25%;
`;
export const ItemLeft = styled(Typography)`
  text-align: left;
`;
