import { db, storage } from "../../../index";
import {
  collection,
  query,
  onSnapshot,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
export const getPosts = (setPosts, uid) => {
  const q = query(collection(db, "posts"));

  onSnapshot(q, (querySnapshot) => {
    setPosts([]);
    let storageRef;
    let snap;
    querySnapshot.forEach((postdoc) => {
      snap = getDoc(doc(db, "users", postdoc.data().uidOfUser));
      snap.then((doc) => {
        if (doc.data().avatar === "default-avatar.png") {
          setPosts((prev) => [
            ...prev,
            {
              ...postdoc.data(),
              ...{ id: postdoc.id },
              ...{ url: "default-avatar.png" },
            },
          ]);
        } else {
          storageRef = ref(storage, `avatars/${postdoc.data().uidOfUser}/`);

          getDownloadURL(storageRef).then((url) => {
            setPosts((prev) => [
              ...prev,
              {
                ...postdoc.data(),
                ...{ id: postdoc.id },
                ...{ url:url},
              },
            ]);
          });
        }
      });
    });
  });
};
