import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";

export const ShowPosts = ({ title, text }) => {
  const useStyles = makeStyles({
    paper: {
      minHeight: "400px",
      width: "800px",
      textAlign: "center",
    },
    typographyTextAboutBook: {
      margin: "30px",
      textAlign: "justify",
    },
    typographyTitleAboutBook: {
      marginTop: "20px",
    },
    laneSection:{
      display:"flex",
      justifyContent:"center"
    },
    lane: {
      width: "80%",
      textAlign: "center",
      height: "2px",
      backgroundColor: "#1976d2",
    },
  });
  const classes = useStyles();

  return (
    <>
      <section className="section-add-new-post">
        <Paper className={classes.paper} elevation={12}>
          <Typography
            className={classes.typographyTitleAboutBook}
            variant="h4"
            component="h2"
          >
            {title}
          </Typography>
          <div className={classes.laneSection} >
            <div className={classes.lane}></div>
          </div>

          <Typography
            className={classes.typographyTextAboutBook}
            variant="h8"
            component="h2"
          >
            {text}
          </Typography>
        </Paper>
      </section>
    </>
  );
};
