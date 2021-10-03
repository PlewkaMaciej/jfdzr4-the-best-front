import { db } from "../..";
import { auth } from "../..";
import { onAuthStateChanged } from "firebase/auth";

function sendDataToFirebase(data,setModalStatus) {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            const postDb=db.collection('posts')
            postDb.doc().set({
                title:data.title,
                text:data.text
            }).then(()=>{
                setModalStatus(false)
            })
        } else {
            window.alert("zaloguj się")
        }});
}

export default sendDataToFirebase;
