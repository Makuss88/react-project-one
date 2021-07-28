import { Link } from "react-router-dom";

const Products = () => {
  return <section>
    <h1>Many products.........</h1>
    <ul>
      <li><Link to="/products/book">Book</Link></li>
      <li><Link to="/products/dog">Dog</Link></li>
      <li><Link to="/products/cat">Cat</Link></li>
      <li><Link to="/products/spoon">Spoon</Link></li>
    </ul>
  </section>
}

export default Products;