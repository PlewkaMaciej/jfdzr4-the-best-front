import BookCard from "./BookCard";
import Spinner from "../auxiliaries/Spinner";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useFilterContext } from "../../controllers/FilterContext";

const BookList = () => {
  const { isLoading, filteredProducts } = useFilterContext();
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "1000px", margin: "0 auto" }}>
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Spinner />
        </Box>
      )}
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredProducts &&
          filteredProducts.map((book) => {
            return (
              <Grid key={book.id} item xs={12} sm={6} md={4}>
                <BookCard {...book} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default BookList;
