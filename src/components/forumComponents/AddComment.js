import CommentIcon from '@mui/icons-material/Comment';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { TextField } from "@mui/material";
import { CardContent } from '@mui/material';
import { makeStyles } from "@mui/styles";
export const AddComment  = ()=>{
    const useStyles = makeStyles({
commentContainer:{
display:"flex",
alignItems:"center",
marginTop:"13px"
},
commentIcon:{
    color: "#1976d2",
    width:"40px",
    height:"40px",
},
fieldText:{
    position:'relative',
    left:"40px",
    width:"500px"
},
addCommentIcon:{
    color: "#1976d2",
    width:"40px",
    height:"40px",
    position:"relative",
    left:"50px"
}
    })
    const classes = useStyles();
    return(
<CardContent className={classes.commentContainer}>
              <CommentIcon className={classes.commentIcon}></CommentIcon>
            <TextField className={classes.fieldText}id="outlined-basic" label="Add Comment" variant="outlined" />
            <AddCommentIcon className={classes.addCommentIcon}></AddCommentIcon>
            </CardContent>)
}