import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import sendDataToFirebase from "./sendDataToFirebase";
import "./createPost.css"
function CreatePost() {
  const useStyles = makeStyles({
    paper: {
      height:"500px",
      width:"800px",
    },
    closeIcon:{
        position:"relative",
        right:"30px",
        top:"7px",
    },
    button:{
        position:"relative",
        left:"20px",
        top:"20px"
    },
    title:{
        textAlign:"center"
    },
  });
  const classes = useStyles();
  const [modalStatus, setModalStatus] = useState(false);
  const [postData, setPostData] = useState({
    email: '',
    password: ''
})
  const { email, password } = postData;

  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal=()=>{
      setModalStatus(false)
  }
  const createPost=(e)=>{
    e.preventDefault()
    sendDataToFirebase(postData)
  }
  const handleChange=(e)=>{
    setPostData({
        ...postData,
        [e.target.name]: e.target.value
    });
  }
  return (
    <>
      <Button onClick={openModal}>Create Post</Button>
      {modalStatus && (
        <section className="container">
          <Paper className={classes.paper} elevation={24}>
            <Typography className={classes.title}variant="h5">Post Creator</Typography>
            <form onSubmit={createPost} noValidate autoComplete="off" >
                <div>
                </div>
                <TextField 
                    label="subject"
                    variant="outlined"
                    color="primary"
                    type="email"
                    name="email"
                    onChange={handleChange}

                    fullWidth
                    required
                />
                <TextField 
                    label="text"
                    variant="outlined"
                    color="primary"
                    type='password'
                    name="password"
                    onChange={handleChange}
                    fullWidth
                    required

                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"  
                    className={classes.button} 
                >
                    Create
                </Button>
            </form>
          </Paper>
          <CloseIcon onClick={closeModal} className={classes.closeIcon}/>
        </section>
      )}
    </>
  );
}

export default CreatePost;
