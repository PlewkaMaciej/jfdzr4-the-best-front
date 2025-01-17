import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../index";
import Spinner from "../auxiliaries/Spinner";
import { useCartDispatch } from "../../controllers/CartContext";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fab from "@mui/material/Fab";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const BookDetails = () => {
  const { id } = useParams();
  const amount = 1;
  const [data, setData] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const history = useHistory();
  const { addToCart } = useCartDispatch();

  useEffect(() => {
    const docRef = doc(db, "books", id);
    getDoc(docRef)
      .then((docSnap) => {
        setData(docSnap.data());
        const { coverName } = docSnap.data();
        getDownloadURL(ref(storage, `covers/${id}/${coverName}`)).then(
          (url) => {
            setImgUrl(url);
          }
        );
      })
      .catch((err) => {
        console.log(err, err.message);
      });
  }, [id]);

  const handleBack = () => {
    history.push("/");
  };

  const handleAddToCart = () => {
    const { title, author, price, copies } = data;
    addToCart(id, title, author, price, amount, imgUrl, copies);
  };

  return (
    <>
      {data && (
        <Box
          sx={{
            maxWidth: "1000px",
            m: "0 auto",
            p: "3rem",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "15px",
            boxShadow: "0 0 10px rgba(0,0,0, .1)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Fab
                onClick={handleBack}
                variant="extended"
                aria-label="go back"
                sx={{
                  alignSelf: "flex-end",
                  mb: 3,
                  fontSize: ".8rem",
                  lineHeight: 2,
                }}
              >
                <ArrowBackOutlinedIcon sx={{ mr: 1, fontSize: "1.3rem" }} />
                back
              </Fab>
            </Grid>
            <Grid item xs={4}>
              {imgUrl !== "" ? (
                <CardMedia
                  component="img"
                  height="85%"
                  width="100%"
                  image={imgUrl}
                  alt={data.title}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    height: "300px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <Spinner />
                </Box>
              )}
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  padding: "0 2rem 0 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h4" component="div" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Author: {data.author}
                </Typography>
                <Typography variant="subtitle2" component="div" gutterBottom>
                  Published: {data.published}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    mt: 3,
                    lineHeight: 1.8,
                    fontSize: "1.2rem",
                  }}
                >
                  {data.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    width: "100%",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ fontWeight: 700 }}
                  >
                    Price: {data.price.toFixed(2)} zł
                  </Typography>
                  <Fab
                    variant="extended"
                    color="primary"
                    type="submit"
                    aria-label="add to cart"
                    onClick={handleAddToCart}
                  >
                    <AddShoppingCartIcon sx={{ mr: 1 }} />
                    Add to Cart
                  </Fab>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default BookDetails;
