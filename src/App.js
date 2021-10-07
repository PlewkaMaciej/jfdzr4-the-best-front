import Navigation from './components/Navigation';
import Content from './components/Content';
import { UserContextProvider } from './controllers/UserContext';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <UserContextProvider>
      <Navigation />
      <Wrapper> 
        <Content />   
      </Wrapper>
    </UserContextProvider>
  );
}

export default App;
