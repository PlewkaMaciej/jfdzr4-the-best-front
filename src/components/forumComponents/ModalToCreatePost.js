import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../index';
export const ModalToCreatePost = ({userData ,setStateOfModal}) => {
  
  const useStyles = makeStyles({
    paper: {
      position:"absolute",
      top:"19%",
      height: "600px",
      width: "800px",
      textAlign: "center",
    },
  });
  const [formData, setFormData] = useState({
    title: '',
    text: ''
})
  const classes = useStyles();
  const addPost=(e)=>{
    e.preventDefault()
    setStateOfModal(false)
    addDoc(collection(db, 'posts'), {
      title:formData.title,
      text:formData.text
  })

  }
  const handleChange = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
}
  return (
    <>
      <section className="section-add-new-post">
        <Paper className={classes.paper} elevation={12}>
          <h1>HELLO {userData.username}</h1>
          <form onSubmit={addPost}>
            <TextField
              rows={1}
              name="title"
              multiline
              placeholder="Title!"
              onChange={handleChange}
              style={{ width: "90%", marginTop: "50px" }}
            />
            <TextField
              rows={12}
              multiline
              aria-label="maximum height"
              name="text"
              placeholder="Share your experience with us!"
              onChange={handleChange}
              style={{ width: "90%", marginTop: "10px" }}
            />
            <Button type="submit" variant="contained">Create new post</Button>
          </form>
        </Paper>
      </section>
    </>
  );
};
