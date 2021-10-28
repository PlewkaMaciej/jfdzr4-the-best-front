import Navigation from "./components/navigation/Navigation";
import Content from "./components/Content";
import { UserContextProvider } from "./controllers/UserContext";
import Wrapper from "./components/auxiliaries/Wrapper";
import { CartContextProvider } from "./controllers/CartContext";
import { MessageContextProvider } from "./controllers/MessageContext";
import Message from "./components/auxiliaries/Message";
import { FilterContextProvider } from "./controllers/FilterContext";

function App() {
  return (
    <MessageContextProvider>
      <FilterContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <Navigation />
            <Message />
            <Wrapper>
              <Content />
            </Wrapper>
          </CartContextProvider>
        </UserContextProvider>
      </FilterContextProvider>
    </MessageContextProvider>
  );
}

export default App;
