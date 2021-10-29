import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../index";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef)
          .then((docSnapshot) => {
            setUsername(docSnapshot.data().username);
            if (docSnapshot.data().isAvatarDefault) {
              setAvatarUrl(null);
            } else {
              const storageRef = ref(storage, `avatars/${user.uid}`);
              getDownloadURL(storageRef).then((url) => {
                setAvatarUrl(url);
              });
            }
          })
          .catch((err) => {});
      } else {
        setUid(null);
        setEmail(null);
        setUsername(null);
        setAvatarUrl(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        uid,
        email,
        username,
        avatarUrl,
        setAvatarUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
