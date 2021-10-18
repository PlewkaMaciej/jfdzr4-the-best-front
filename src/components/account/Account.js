import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../controllers/UserContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../index";
import Auth from "../auxiliaries/Auth";
import { UserAvatar, ButtonWrapper } from "./Account.styled";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Account = () => {
  const history = useHistory();
  const { uid, email, username, avatarUrl, setAvatarUrl } =
    useContext(UserContext);
  const [file, setFile] = useState(null);

  const handleBack = () => {
    history.push("/");
  };

  //po zrezygnowaniu z uploadu nie zeruje się w inpucie plik na pozycji 0

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCancelClick = () => {
    setFile(null);
  };

  const handleFileUpload = () => {
    const storageRef = ref(storage, `avatars/${uid}/`);
    uploadBytes(storageRef, file).then((snapshot) => {
      setFile(null);
      getDownloadURL(snapshot.ref).then((url) => {
        setAvatarUrl(url);
      });
    });
  };

  return (
    <Auth>
      <Box
        sx={{
          maxWidth: "1000px",
          m: "0 auto",
          p: "2rem",
          display: "flex",
          justifyContent: "space-around",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0,0,0, .1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <UserAvatar
            alt="avatar"
            src={avatarUrl}
            sx={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, .75)" }}
          />
          <Button variant="text" component="label" style={{ margin: "10px 0" }}>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              hidden
            />
            Change avatar
          </Button>
          {file && (
            <>
              <Typography
                variant="body"
                gutterBottom
                sx={{ fontFamily: "Roboto" }}
              >
                file name: {file.name}
              </Typography>
              <ButtonWrapper>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFileUpload}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              </ButtonWrapper>
            </>
          )}
        </Box>
        <Box
          sx={{
            padding: "0 2rem 0 2.5rem",
            width: "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Fab
            onClick={handleBack}
            variant="extended"
            aria-label="go back"
            sx={{
              alignSelf: "flex-end",
              mb: 3,
              fontSize: ".8rem",
              lineHeight: 2,
            }}
          >
            <ArrowBackOutlinedIcon sx={{ mr: 1, fontSize: "1.3rem" }} />
            back
          </Fab>
          <Typography variant="h4" component="div" gutterBottom>
            Account Details
          </Typography>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ fontWeight: 300, marginTop: "10px" }}
          >
            Username: {username}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ fontWeight: 300 }}
          >
            Email: {email}
          </Typography>
        </Box>
      </Box>
    </Auth>
  );
};

export default Account;
