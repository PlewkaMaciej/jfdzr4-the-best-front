import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import BookDetails from './BookDetails';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Content = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/:id">
            <BookDetails />
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