import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../index";
import Spinner from "../auxiliaries/Spinner";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import { useCartDispatch } from "../../controllers/CartContext";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
});

const BookCard = ({ title, author, price, id, coverName, description, copies }) => {
  const classes = useStyles();

  const [imgUrl, setImgUrl] = useState("");

  const { addToCart } = useCartDispatch();

  const amount = 1;

  useEffect(() => {
    getDownloadURL(ref(storage, `covers/${id}/${coverName}`))
      .then((url) => {
        setImgUrl(url);
      })
      .catch((err) => {
        console.log(err, err.message);
      });
  }, [id, coverName]);

  return (
    <Card
      sx={{
        maxWidth: 300,
        minHeight: 505,
        borderRadius: "12px",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "1px 3px 8px rgba(0, 0, 0, .12)",
        },
      }}
    >
      <Link to={`/book/${id}`} className={classes.link}>
        {imgUrl !== "" ? (
          <CardMedia component="img" height="330" image={imgUrl} alt={title} />
        ) : (
          <Box
            sx={{
              height: 330,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </Box>
        )}
        <CardContent
          sx={{
            minHeight: "175px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h5"
            align="left"
            fontWeight="700"
            fontSize="22px"
            sx={{ marginBottom: "10px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ marginBottom: "10px" }}
          >
            {author}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            noWrap
          >
            {description}
          </Typography>
          <Typography variant="h6" component="div" sx={{ mt: 2 }}>
            {`cena: ${price.toFixed(2)} zł`}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.cardActions}>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add to cart"
          onClick={() => addToCart(id, title, author, price, amount, imgUrl, copies)}
        >
          <AddShoppingCartIcon sx={{ mr: 1 }} />
          Add to Cart
        </Fab>
      </CardActions>
    </Card>
  );
};

export default BookCard;
