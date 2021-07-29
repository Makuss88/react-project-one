import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Hurra' },
  { id: 'q2', author: 'Makuss', text: 'Hurra hura hura!' },
];

const AllQuote = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
};

export default AllQuote;