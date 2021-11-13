import CommentIcon from "@mui/icons-material/Comment";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { TextField } from "@mui/material";
import { CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../index";
import { useState, useContext, useRef, useEffect } from "react";
import { UserContext } from "../../controllers/UserContext";
import Typography from "@mui/material/Typography";

export const AddComment = (postId) => {
  const useStyles = makeStyles({
    commentContainer: {
      display: "flex",
      marginTop: "13px",
      alignItems: "center",
    },
    commentIcon: {
      color: "#1976d2",
      width: "40px",
      height: "40px",
    },
    fieldText: {
      position: "relative",
      left: "40px",
      width: "500px",
    },
    addCommentIcon: {
      color: "#1976d2",
      width: "40px",
      height: "40px",
      position: "relative",
      left: "50px",
    },
    commentsAndUser: {
      display: "flex",
      color: "#1976d2",
      alignItems: "center",
    },
  });

  const classes = useStyles();
  const { uid, username } = useContext(UserContext);
  const inputEl = useRef(null);
  const [commentContent, setcommentContent] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [allComments, setAllComments] = useState("");
  const [usernames, setUsernames] = useState([]);
  useEffect(() => {
      let usersArray=[]
    getDoc(doc(db, "comments", postId.postId)).then((document) => {
      setAllComments(document.data().comments);
      Object.keys(document.data().comments).forEach((element) => {
        getDoc(doc(db, "users", element)).then((document) => {
            usersArray.push(document.data().username)
        }).then(()=>{
            setUsernames(usersArray)
        })
      });
    });
  }, []);
  const addComment = () => {
    let commentArray;
    if (commentContent !== "") {
      getDoc(doc(db, "comments", postId.postId))
        .then((document) => {
          commentArray = document.data().comments;
          commentArray[uid].push(commentContent);
        })
        .then(() => {
          setDoc(doc(db, "comments", postId.postId), {
            comments: commentArray,
          }).then(() => {
            setcommentContent("");
          });
        });
    }
  };
  const handleChange = (e) => {
    setcommentContent(e.target.value);
  };
  const showComments = () => {
    showComment ? setShowComment(false) : setShowComment(true);
  };

  return (
    <>
      <CardContent ref={inputEl} className={classes.commentContainer}>
        <div className={classes.container}>
          <CommentIcon
            onClick={showComments}
            className={classes.commentIcon}
          ></CommentIcon>
          <TextField
            onChange={handleChange}
            value={commentContent}
            className={classes.fieldText}
            id="outlined-basic"
            label="Add Comment"
            variant="outlined"
          />
          <AddCommentIcon
            onClick={addComment}
            className={classes.addCommentIcon}
          ></AddCommentIcon>
        </div>
      </CardContent>
      {showComment && (
        <>
          <CardContent>
            {Object.keys(allComments).map((item, index) => {
             
              return (
                <div key={item.toString()+index.toString()}>
                <>
                  {" "}
                  {allComments[item].map((element ,i) => {
                    return (
                      <>
                      {console.log( element)}
                        <div key={i}className={classes.commentsAndUser}>
                          <Typography variant="h5" component="h5">
                            {usernames[index]}: 
                          </Typography>
                          <Typography variant="p" component="p">
                            {element}
                          </Typography>
                        </div>
                      </>
                    );
                  })}
                </>
                </div> );
            })}
          </CardContent>
        </>
      )}
    </>
  );
};
