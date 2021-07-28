import { Route, Switch, Redirect } from "react-router-dom";

import Comments from "./components/comments/Comments";
import NewCommentForm from "./components/comments/NewCommentForm";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";


import MainNavigation from './components/layout/MainNavigation'
const App = () => {
  return (
    <div>
      <header><MainNavigation /></header>
      <section>
        <Switch >
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetails />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/new-comment'>
            <NewCommentForm />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
