import Navigation from "../Navigation";
import Button from "@mui/material/Button";
import "./post.css";
import { ModalToCreatePost } from "./ModalToCreatePost";
import { useState } from "react";
import { useEffect } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../..";
import { getUser } from "./fetchingData/GetUser";
import { ShowPosts } from "./showPost";
import { getPosts } from "./fetchingData/GetPosts";
export const Posts = () => {
  const [stateOfModal, setStateOfModal] = useState(false);
  const [userData,setUserData]=useState({})
  const [posts,setPosts]=useState([])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        getUser(user.uid,setUserData)
        getPosts(setPosts,posts)
        
      }
    });
  }, []);
  const changeStatusOfModal = () => {
    stateOfModal ? setStateOfModal(false) : setStateOfModal(true);
  };

  return (
    <>
      <Navigation />
      <section className="section-create-post">
        <Button onClick={changeStatusOfModal} variant="contained">
          Create new post
        </Button>
      </section>
      {posts.map((post,index)=>{
         return <ShowPosts key={index} title={post.title} text={post.text}/>
      })}
     
      {stateOfModal && (
        <>
          <ModalToCreatePost userData={userData} setStateOfModal={setStateOfModal} />
        </>
      )}
    </>
  );
};
