import styled from "styled-components";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 320px 1fr 1fr 1fr auto;
  gap: 3rem 1rem;
  justify-items: center;
  margin: 2rem 0;
  align-items: center;
`;

export const ItemDetails = styled(Box)`
  height: 100%;
  display: grid;
  grid-template-columns: 64px 256px;
  align-items: center;
  gap: 1rem;
  text-align: left;
`;
