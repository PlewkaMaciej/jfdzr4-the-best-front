import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../controllers/UserContext";
import { useState, useEffect, useContext } from "react";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

export const ShowPosts = ({ title, text }) => {
  const { uid, email, username, avatarUrl, setAvatarUrl } =
    useContext(UserContext);
  const useStyles = makeStyles({
    paper: {
      minHeight: "500px",
      width: "800px",
    },
    typographyTextAboutBook: {
      marginLeft: "30px",
      marginRight: "30px",
      textAlign: "justify",
      marginTop:"20px"
    },
    typographyTitleAboutBook: {
      
    },
    avatar: {
      margin: "10px",
      width: "55px",
      height: "55px",
      backgroundColor:"white",
    },
    tittleInMiddle:{
      display:"flex",
      justifyContent:"center",
    },
    avatarAndNicknameContainer:{
alignItems:"center",
display:"flex",
backgroundColor:"#1976d2",
    },
    typographyNickname:{
marginBottom:"30px",
color:"white",
    },
    hours:{
      position:"relative",
      bottom:"50px",
      left:"110px",
      color:"white",

    },
    deleteButton:{
      position:"relative",
      bottom:"220px",
      left:"650px"
    }
  
  });
  const classes = useStyles();

  return (
    <>
      <section className="section-showingposts">
        <Paper className={classes.paper} elevation={12}>
          <CardContent className={classes.avatarAndNicknameContainer}>
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src={avatarUrl}
            sx={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, .75)" }}
          />
          <Typography
            className={classes.typographyNickname}
            variant="h5"
            component="h5"
          >
            {username}
          </Typography>
          </CardContent>
          <Typography
            className={classes.hours}
            variant="p"
            component="p"
          >
            hours ago
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
          <Button className={classes.deleteButton}
              type="submit"
              variant="contained"
              color="primary"
            >
              Delete Post
            </Button>
        </Paper>
      </section>
    </>
  );
};
