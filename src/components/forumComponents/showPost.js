import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../controllers/UserContext";
import { useContext, useEffect} from "react";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../index";
import { ModalToEditPost } from "./ModalToEditPost";
import { GetLike } from "./GetLike";
export const ShowPosts = ({
  setStateOfEditPostModal,
  likes,
  stateOfEditPostModal,
  title,
  text,
  id,
  uidOfUser,
  postCreator,
  url,
  oldOfPost,
  time,
}) => {
  useEffect(() => {}, []);
  const editPost = () => {
    setStateOfEditPostModal(id);
  };
  const deletePost = () => {
    deleteDoc(doc(db, "posts", id));
  };
  const { uid } = useContext(UserContext);
  const useStyles = makeStyles({
    paper: {
      minHeight: "500px",
      width: "800px",
    },
    typographyTextAboutBook: {
      marginLeft: "30px",
      marginRight: "30px",
      textAlign: "justify",
      marginTop: "20px",
    },
    typographyTitleAboutBook: {},
    avatar: {
      margin: "10px",
      width: "60px",
      height: "60px",
      backgroundColor: "white",
    },
    tittleInMiddle: {
      display: "flex",
      justifyContent: "center",
    },
    avatarAndNicknameContainer: {
      alignItems: "center",
      display: "flex",
      backgroundColor: "#1976d2",
    },
    typographyNickname: {
      marginBottom: "30px",
      color: "white",
    },
    hours: {
      position: "relative",
      bottom: "50px",
      left: "110px",
      color: "white",
    },
    deleteButton: {},
    nicknameAndButton: {
      display: "flex",
      justifyContent: "space-between",
      width: "600px",
    },
    editButton: {
      marginLeft: "150px",
      position: "relative",
      zIndex: 1,
    },
    heartForLikes: {
      width: "40px",
      height: "40px",
      color: "red",
    },
    numberOfLikes: {
      color: "red",
    },
    heartAndNumbers: {
      display: "flex",
      alignItems: "center",
      marginTop: "150px",
    },
  });
  const classes = useStyles();

  return (
    <>
      {!stateOfEditPostModal && (
        <section className="section-showingposts">
          <Paper className={classes.paper} elevation={12}>
            <CardContent className={classes.avatarAndNicknameContainer}>
              <Avatar
                className={classes.avatar}
                alt="avatar"
                src={url}
                sx={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, .75)" }}
              />
              <CardContent className={classes.nicknameAndButton}>
                <Typography
                  className={classes.typographyNickname}
                  variant="h5"
                  component="h5"
                >
                  {postCreator}
                </Typography>
                {uid === uidOfUser && (
                  <Button
                    id={id}
                    onClick={editPost}
                    className={classes.editButton}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Edit POST
                  </Button>
                )}
                {uid === uidOfUser && (
                  <Button
                    onClick={deletePost}
                    id={id}
                    className={classes.deleteButton}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Delete Post
                  </Button>
                )}
              </CardContent>
            </CardContent>
            <Typography className={classes.hours} variant="p" component="p">
              {time}
            </Typography>
            <CardContent className={classes.tittleInMiddle}>
              <Typography
                className={classes.typographyTitleAboutBook}
                variant="h3"
                component="h3"
              >
                {title}
              </Typography>
            </CardContent>
            <Typography
              className={classes.typographyTextAboutBook}
              variant="p"
              component="p"
            >
              {text}
            </Typography>
            <GetLike id={id}/>
          </Paper>
        </section>
      )}
      
      {stateOfEditPostModal === id && (
        <ModalToEditPost
          setStateOfEditPostModal={setStateOfEditPostModal}
          time={time}
          text={text}
          title={title}
          id={id}
          uidOfUser={uidOfUser}
          postCreator={postCreator}
          likes={likes}
          oldOfPost={oldOfPost}
        />
      )}
    </>
  );
};
