import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../controllers/UserContext";
import { auth } from "../../index";
import { signOut } from "@firebase/auth";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Logout from "@mui/icons-material/Logout";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useMessageContext } from "../../controllers/MessageContext";

export const DropdownMenu = () => {
  const { uid, username, avatarUrl } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { setOpen, setMessage, setColor } = useMessageContext(); 

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setMessage("user signed out");
    setColor("error");
    setOpen(true);
    signOut(auth);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2, mr: 2 }}>
            <Avatar sx={{ width: 36, height: 36 }} src={avatarUrl} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!uid && (
          <div>
            <MenuItem component={Link} to="/sign-in">
              <ListItemIcon>
                <LoginOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Sign in
            </MenuItem>
            <MenuItem component={Link} to="/sign-up">
              <ListItemIcon>
                <PersonAddIcon fontSize="small" />
              </ListItemIcon>
              Sign up
            </MenuItem>
          </div>
        )}
        {uid && (
          <div>
            <MenuItem>
              <Typography sx={{ minWidth: 100 }}>
                You are signed in as: <b>{username}</b>
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem component={Link} to="/account">
              <ListItemIcon>
                <AccountCircleOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Account
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sign out
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};
