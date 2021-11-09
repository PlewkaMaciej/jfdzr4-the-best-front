import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { useState,useContext, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../index";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../../controllers/UserContext";
import { Time } from "./Date";

export const ModalToCreatePost = ({ setStateOfModal, setStateOfEditPostModal }) => {
  const [timeOfPost, setTimeOfPost] = useState("");
  useEffect(()=>{
    setTimeOfPost(Time().toString())
  })
  const { uid, username } =
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
    title: "",
    text: "",
  });
  const classes = useStyles();
  const addPost = (e) => {
    e.preventDefault();
    setStateOfModal(false);
    addDoc(collection(db, "posts"), {
      title: formData.title,
      text: formData.text,
      uidOfUser: uid,
      postCreator: username,
      likes:[],
      time:timeOfPost
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const changeStatusOfModal = () => {
    setStateOfModal(false);
    setStateOfEditPostModal(false);
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
            Hello {username}!
          </Typography>

          <CloseIcon
            onClick={changeStatusOfModal}
            className={classes.closeIcon}
          />
          <form onSubmit={addPost}>
            <TextField
              className={classes.textFieldTitle}
              rows={1}
              name="title"
              multiline
              placeholder="Title!"
              onChange={handleChange}
            />
            <TextField
              rows={12}
              multiline
              aria-label="maximum height"
              name="text"
              placeholder="Share your experience with us!"
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
