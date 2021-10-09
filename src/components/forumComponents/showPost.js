import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";

export const ShowPosts = ({title,text}) => {
  const useStyles = makeStyles({
    paper: {
        minHeight:"400px",
      width: "800px",
      textAlign: "center",
    },
  });
  const classes = useStyles();

  return (
    <>
      <section className="section-add-new-post">
        <Paper className={classes.paper} elevation={12}>
          <Typography variant="h4" component="h2">
           {title}
          </Typography>
          <Typography variant="h8" component="h2">
           {text}
          </Typography>
          
        </Paper>
      </section>
    </>
  );
};
