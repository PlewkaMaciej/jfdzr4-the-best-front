import Button from "@mui/material/Button";
import "./post.css";
import { ModalToCreatePost } from "./ModalToCreatePost";
import { useState, useEffect, useContext } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { ShowPosts } from "./showPost";
import { getPosts } from "./fetchingData/GetPosts";
import { UserContext } from "../../controllers/UserContext";
import { makeStyles } from "@mui/styles";
export const Posts = () => {
  const useStyles = makeStyles({
    createNewPostButton:{
      position:"fixed",
      zIndex: 6,
      left:"100px",
      width:"250px",
      height:"70px",
      marginTop:"30px"
    }
  })
  const classes = useStyles();
  const [stateOfModal, setStateOfModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const[state,setState]=useState(false)
  const [stateOfEditPostModal, setStateOfEditPostModal] = useState(false);
  const { uid,username,  } =
  useContext(UserContext)
  useEffect(() => {
    getPosts(setPosts,setState);

  }, []);
  
  const changeStatusOfModal = () => {
    stateOfModal ? setStateOfModal(false) : setStateOfModal(true);
  };
  return (
    <>{username&&(
      <Button  className={classes.createNewPostButton} onClick={changeStatusOfModal} variant="contained">
      Create new post
    </Button>
    )}
    {state&&(
      <>
  {!stateOfModal && (
        <>
          {posts.map((post, index) => {
            return (              <ShowPosts  oldOfPost={post.oldOfPost} stateOfEditPostModal={stateOfEditPostModal} time={post.time}  setStateOfEditPostModal={setStateOfEditPostModal} setStateOfModal={setStateOfModal} key={index} title={post.title}  text={post.text} id={post.id} idUser={uid} uidOfUser={post.uidOfUser} postCreator={post.postCreator} url={post.url}/>
            );
          })}
        </>
      )}

    
      </>
    )}
        {stateOfModal &&(
        <>
          <ModalToCreatePost
            setStateOfModal={setStateOfModal}
            setStateOfEditPostModal={setStateOfEditPostModal}
          />
        </>
      )}
    </>
  );
};
