import {
  SearchIconWrapper,
  Search,
  StyledInputBase,
} from "./SearchField.styled";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search title, author ..."
        inputProps={{ "aria-label": "search title or author" }}
      />
    </Search>
  );
};

export default SearchField;
