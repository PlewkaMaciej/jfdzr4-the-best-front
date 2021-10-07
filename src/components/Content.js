import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import BookDetails from './BookDetails';
import Account from './Account';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Content = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/book/:id">
            <BookDetails /> 
        </Route>
        <Route path="/account">
            <Account />
        </Route>
        <Route path="/sign-in">
            <SignInForm />
        </Route>
        <Route path="/sign-up">
            <SignUpForm />
        </Route>
    </Switch>
)

export default Content;