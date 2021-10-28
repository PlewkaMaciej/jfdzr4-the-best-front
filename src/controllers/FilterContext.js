import { useCallback, useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import { filterReducer } from "../components/reducers/filterReducer";
import {
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_SUCCESS,
} from "../components/reducers/filterReducerActions";
import { db } from "../index";
import { collection, onSnapshot } from "@firebase/firestore";
import { useMessageContext } from "./MessageContext";

export const FilterContext = createContext(null);

const initialState = {
  allProducts: [],
  filteredProducts: [],
  isLoading: false,
};

export const FilterContextProvider = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, initialState);
  const { setOpen, setColor, setMessage } = useMessageContext();

  const loadProductsFromFirebase = useCallback(async () => {
    dispatch({ type: LOAD_PRODUCTS_START });
    onSnapshot(
      collection(db, "books"),
      (snapshot) => {
        const fetchedProducts = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        dispatch({ type: LOAD_PRODUCTS_SUCCESS, payload: fetchedProducts });
      },
      (err) => {
        console.log(err, err.message);
        setColor("error");
        setMessage(err.message);
        setOpen(true);
      }
    );
  }, [setColor, setMessage, setOpen]);

  useEffect(() => {
    loadProductsFromFirebase();
  }, [loadProductsFromFirebase]);

  return (
    <FilterContext.Provider value={filterState}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
