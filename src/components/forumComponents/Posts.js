import Button from "@mui/material/Button";
import "./post.css";
import { ModalToCreatePost } from "./ModalToCreatePost";
import { useState, useEffect, useContext } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../index";
import { ShowPosts } from "./showPost";
import { getPosts } from "./fetchingData/GetPosts";
import { UserContext } from "../../controllers/UserContext";
export const Posts = () => {
  const [stateOfModal, setStateOfModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const { uid, email, username, avatarUrl, setAvatarUrl } =
  useContext(UserContext)
  useEffect(() => {
    
  ;
    getPosts(setPosts, posts);
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
            
              <ShowPosts key={index} title={post.title} text={post.text} />
            );
          })}
        </>
      )}

      {stateOfModal && (
        <>
          <ModalToCreatePost
            setStateOfModal={setStateOfModal}
          />
        </>
      )}
    </>
  );
};
