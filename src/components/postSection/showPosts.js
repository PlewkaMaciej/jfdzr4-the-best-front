import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../..";
function ShowPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() });
      });

      setPosts(tempDoc);
    });
  }, []);
  return (
    <>
      {posts.map((doc, index) => {
        return (
          <>
            <div key={doc.id}>
              <Paper elevation={24}>
                <Typography variant="h5" component="h3">
                  {doc.title}
                </Typography>
                <Typography component="p">{doc.text}</Typography>
              </Paper>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ShowPosts;
