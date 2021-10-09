import { db } from "../../../index";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getUser = (userId, setUserData) => {
  const q = query(collection(db, "users"), where("id", "==", userId));
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setUserData(doc.data());
    });
  });
};
