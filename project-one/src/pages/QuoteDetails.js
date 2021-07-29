import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Hurra' },
  { id: 'q2', author: 'Makuss', text: 'Hurra hura hura!' },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return (<div>
      no quote found!
    </div>)
  }


  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      />
      <Route path={`/quotes/${params.quoteId}/comments`} >
        <Comments />
      </Route>
    </Fragment>
  )
};

export default QuoteDetails;