import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  wrapper: {
    maxWidth: 670,
    minHeight: 480,
    margin: "0 auto",
    padding: "1.3rem 3rem",
    border: "1px solid #FAFAFA",
    borderRadius: 15,
    boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
  link: {
    marginLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#2196f3",
    borderRadius: 10,
    boxShadow: "0 0 2px rgba(0, 0, 0, .1)",
  },
});
