import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import BookDetails from "./books/BookDetails";
import Account from "./account/Account";
import SignInForm from "./forms/SignInForm";
import SignUpForm from "./forms/SignUpForm";
import { Posts } from "./forumComponents/Posts";
import Cart from "./cart/Cart";
import About from "./about/AboutUs";
import Recommend from "./recommend/recommendAll";

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
    <Route path="/about">
      <About />
    </Route>
    <Route path="/cart">
      <Cart />
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
    <Route path="/recommend">
      <Recommend />
    </Route>
    
  </Switch>
);

export default Content;
