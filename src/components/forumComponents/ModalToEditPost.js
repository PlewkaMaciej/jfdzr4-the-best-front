import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../../controllers/UserContext";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../index";

export const ModalToEditPost = ({setStateOfEditPostModal, text,likes, title, id, postCreator, uidOfUser}) => {
  const [stateOfEditText, setStateOfEditText] = useState(false);
  const { uid, email, username, avatarUrl, setAvatarUrl } =
    useContext(UserContext);
  const useStyles = makeStyles({
    paper: {
      position: "absolute",
      top: "19%",
      height: "600px",
      width: "800px",
      textAlign: "center",
    },
    closeIcon: {
      position: "relative",
      left: "356px",
      bottom: "20px",
    },
    typographyHeadingModal: {
      marginTop: "20px",
    },
    textFieldTitle: {
      width: "90%",
    },
    textFieldText: {
      width: "90%",
      marginTop: "10px",
    },
    createPostBtn: {
      marginTop: "10px",
    },
  });
  const [formData, setFormData] = useState({
    title: title,
    text: text,
  });
  const classes = useStyles();
  const editPost = (e) => {
    e.preventDefault();
    setStateOfEditPostModal(false);
    
    setDoc(doc(db, "posts", id), {
      title:formData.title,
      text:formData.text,
      postCreator,
      uidOfUser,
      likes,
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const changeStatusOfModal = () => {
    setStateOfEditPostModal(false)
  };
  return (
    <>
      <section className="section-add-new-post">
        <Paper className={classes.paper} elevation={12}>
          <Typography
            className={classes.typographyHeadingModal}
            variant="h3"
            component="h3"
          >
            Edit your post!
          </Typography>

          <CloseIcon
            onClick={changeStatusOfModal}
            className={classes.closeIcon}
          />
          <form onSubmit={editPost}>
            <TextField
              className={classes.textFieldTitle}
              rows={1}
              name="title"
              multiline
              defaultValue={title}
              onChange={handleChange}
            />
            <TextField
              rows={12}
              multiline
              aria-label="maximum height"
              name="text"
              defaultValue={text}
              onChange={handleChange}
              className={classes.textFieldText}
            />
            <Button
              className={classes.createPostBtn}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </section>
    </>
  );
};
