import {
  SearchIconWrapper,
  Search,
  StyledInputBase,
} from "./SearchField.styled";
import SearchIcon from "@mui/icons-material/Search";
import { useFilterContext } from "../../controllers/FilterContext";

const SearchField = ({ pathname }) => {
  const { filterProducts } = useFilterContext();
  const handleChange = (e) => {
    filterProducts(e.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={handleChange}
        placeholder="Search title, author ..."
        inputProps={{ "aria-label": "search title or author" }}
        disabled={pathname === "/" ? false : true}
      />
    </Search>
  );
};

export default SearchField;
