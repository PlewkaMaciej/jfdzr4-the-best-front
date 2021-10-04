import Navigation from './components/Navigation';
import Content from './components/Content';
import { UserContextProvider } from './controllers/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Navigation />
      <Content />   
    </UserContextProvider>
  );
}

export default App;
