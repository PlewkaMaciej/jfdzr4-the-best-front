import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";
import { UserContext } from "../../controllers/UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../index";
export const GetLike = (id) => {
  const [isLikes, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(null);
  const [likesFromFirebase, setLikesFromFirebase] = useState([]);
  const { uid } = useContext(UserContext);
  useEffect(() => {
    getDoc(doc(db, "likes", id.id)).then((doc) => {
        setNumberOfLikes(doc.data().likes.length)
        setLikesFromFirebase(doc.data().likes)
      if (doc.data().likes.includes(uid)) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    });
  }, [likesFromFirebase]);
  const likePost = () => {
    if (isLikes === false) {
      setDoc(doc(db, "likes", id.id), {
        likes: [...likesFromFirebase,uid]
      });
      setIsLiked(true)
    } else {
        let filtredArray=likesFromFirebase.filter((item)=>{
            if(item!==uid)
            return item
        })
        setIsLiked(false)
        setDoc(doc(db, "likes", id.id), {
            likes: filtredArray
          });
    }
  };
  const useStyles = makeStyles({
    likesAndCounter: {
      display: "flex",
      alignItems: "center",
      marginTop: "200px",
    },
    heartBorderIcon: {
      color: "red",
      width: "40px",
      height: "40px",
    },
    likesCounter: {
      color: "red",
      fontSize: "20px",
    },
  });
  const classes = useStyles();
  return (
    <>
      <CardContent className={classes.likesAndCounter}>
        {!isLikes && (
          <FavoriteBorderIcon
            className={classes.heartBorderIcon}
            onClick={likePost}
            id={id}
          />
        )}
        {isLikes && (
          <FavoriteIcon
            className={classes.heartBorderIcon}
            onClick={likePost}
            id={id}
          />
        )}
        <Typography variant="p" component="p" className={classes.likesCounter}>
          {numberOfLikes}
        </Typography>
      </CardContent>
    </>
  );
};


