import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { DropdownMenu } from "./DropdownMenu";
import {
  LogoWrapper,
  ButtonsWrapper,
  ContentWrapper,
} from "./Navigation.styled";
import { useCartState } from "../../controllers/CartContext";
import "./Navigation.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import SearchField from "./SearchField";

const Navigation = () => {
  const { totalItems } = useCartState();
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <ContentWrapper>
          <LogoWrapper>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Avatar alt="logo" src={logo} />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  p: 1,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                }}
              >
                Smart Books
              </Typography>
            </Link>
          </LogoWrapper>
          <SearchField />
        </ContentWrapper>
        <ButtonsWrapper>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className={splitLocation[1] === "about" ? "active--light" : ""}
          >
            <Button
              variant="text"
              sx={{
                mr: 1,
                p: 1,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1c54b2",
                  boxShadow: "0 0 5px #1c54b2",
                },
              }}
              startIcon={<AccountBalanceOutlinedIcon />}
            >
              About
            </Button>
          </Link>
          <Link
            to="/forum"
            style={{ textDecoration: "none" }}
            className={splitLocation[1] === "forum" ? "active--light" : ""}
          >
            <Button
              variant="text"
              sx={{
                mr: 1,
                p: 1,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1c54b2",
                  boxShadow: "0 0 5px #1c54b2",
                },
              }}
              startIcon={<AccountBalanceOutlinedIcon />}
            >
              Forum
            </Button>
          </Link>
          <Link
            to="/recommend"
            style={{ textDecoration: "none" }}
            className={splitLocation[1] === "recommend" ? "active--light" : ""}
          >
            <Button
              variant="text"
              sx={{
                mr: 1,
                p: 1,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1c54b2",
                  boxShadow: "0 0 5px #1c54b2",
                },
              }}
              startIcon={<RecommendOutlinedIcon />}
            >
              Recommend
            </Button>
          </Link>
          <Link
            to="/cart"
            style={{ textDecoration: "none" }}
            className={splitLocation[1] === "cart" ? "active--light" : ""}
          >
            <Button
              variant="text"
              sx={{
                mr: 1,
                p: 1,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1c54b2",
                  boxShadow: "0 0 5px #1c54b2",
                },
              }}
              startIcon={
                <Badge badgeContent={totalItems} color="warning" showZero>
                  <AddShoppingCartIcon />
                </Badge>
              }
            >
              Cart
            </Button>
          </Link>
          <DropdownMenu />
        </ButtonsWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
