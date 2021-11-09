import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function AboutImageLists() {
  return (
      <ImageList
        sx={{ width: 1, height: 200 }}
        cols={4}
        rowHeight={164}
        gap={20}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTc2Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIxMjYxNzQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1561657819-51c0511e35ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ3ODY0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "Camera",
  },
];

export default AboutImageLists;
