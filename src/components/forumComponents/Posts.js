import Button from "@mui/material/Button";
import "./post.css";
import { ModalToCreatePost } from "./ModalToCreatePost";
import { useState, useEffect, useContext } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { ShowPosts } from "./showPost";
import { getPosts } from "./fetchingData/GetPosts";
import { UserContext } from "../../controllers/UserContext";
export const Posts = () => {
  const [stateOfModal, setStateOfModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [stateOfEditPostModal, setStateOfEditPostModal] = useState(false);
  const { uid, email, username, avatarUrl, setAvatarUrl } =
  useContext(UserContext)
  useEffect(() => {
    getPosts(setPosts, uid);
  }, []);
  const changeStatusOfModal = () => {
    stateOfModal ? setStateOfModal(false) : setStateOfModal(true);
  };
  return (
    <>
      {!stateOfModal && (
        <>
          <section className="section-create-post">
            {username&&(
              <Button onClick={changeStatusOfModal} variant="contained">
              Create new post
            </Button>
            )}
            
          </section>
          {posts.map((post, index) => {
            return (
            
              <ShowPosts  stateOfEditPostModal={stateOfEditPostModal} setStateOfEditPostModal={setStateOfEditPostModal} setStateOfModal={setStateOfModal} key={index} title={post.title} text={post.text} id={post.id} uidOfUser={post.uidOfUser} postCreator={post.postCreator} url={post.url}/>
            );
          })}
        </>
      )}

      {stateOfModal &&(
        <>
          <ModalToCreatePost
            setStateOfModal={setStateOfModal}
          />
        </>
      )}
    </>
  );
};
