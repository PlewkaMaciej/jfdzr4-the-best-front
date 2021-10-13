import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import BookDetails from './books/BookDetails';
import Account from './account/Account';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';
import { Posts } from './forumComponents/Posts';

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
        <Route path="/forum">
            <Posts />
        </Route>
    </Switch>
)

export default Content;