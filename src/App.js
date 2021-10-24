import Navigation from "./components/navigation/Navigation";
import Content from "./components/Content";
import { UserContextProvider } from "./controllers/UserContext";
import Wrapper from "./components/auxiliaries/Wrapper";
import { CartContextProvider } from "./controllers/CartContext";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Navigation />
        <Wrapper>
          <Content />
        </Wrapper>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
