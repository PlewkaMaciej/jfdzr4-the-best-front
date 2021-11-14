import { db, storage } from "../../../index";
import { collection, query, onSnapshot, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
export const getPosts = (setPosts, setState) => {
  const q = query(collection(db, "posts"));
  onSnapshot(q, (querySnapshot) => {
    let postArray = [];
    let storageRef;
    let snap;
    setState(false);
    querySnapshot.forEach((postdoc) => {
      snap = getDoc(doc(db, "users", postdoc.data().uidOfUser));
      snap.then((doc) => {
        if (doc.data().isAvatarDefault) {
          
          postArray.push({
            ...postdoc.data(),
            ...{ id: postdoc.id },
            ...{ url: "defaurlt-avatar.png" },
            
            
          })      
        } else {
          
          storageRef = ref(storage, `avatars/${postdoc.data().uidOfUser}/`);
          getDownloadURL(storageRef).then((url) => {
            postArray.push({
              ...postdoc.data(),
              ...{ id: postdoc.id },
              ...{ url: url },
            });
            
          });
        }
        if(postArray.length===querySnapshot.size){
              postArray.forEach((p,j) => {


                postArray.forEach((post, index) => {
                  if (post.oldOfPost < p.oldOfPost) {
                    let changer=postArray[index]
                      postArray[index]=postArray[j]
                      postArray[j]=changer
                  }
                  
                });
              });
          setPosts(postArray);
          setState(true);
        }
      
      });
    });
  });
};
