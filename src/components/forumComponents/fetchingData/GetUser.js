import { db } from "../../../index";
import { doc,getDoc } from "firebase/firestore";

export const getUser = (userId, setUserData) => {
  const docRef = doc(db, 'users',userId);
        getDoc(docRef)
            .then(docSnap => {
                setUserData(docSnap.data())
            })
            .catch(err => {
                console.log(err, err.message);
            });
};


