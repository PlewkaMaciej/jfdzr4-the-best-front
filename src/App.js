import Navigation from "./components/navigation/Navigation";
import Content from "./components/Content";
import { UserContextProvider } from "./controllers/UserContext";
import Wrapper from "./components/auxiliaries/Wrapper";
import { CartContextProvider } from "./controllers/CartContext";
import { MessageContextProvider } from "./controllers/MessageContext";
import Message from "./components/auxiliaries/Message";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <MessageContextProvider>
          <Navigation />
          <Message />
          <Wrapper>
            <Content />
          </Wrapper>
        </MessageContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
