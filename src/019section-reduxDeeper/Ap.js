import { useSelector } from 'react-redux'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import './index.css'

function App() {
  const showCard = useSelector((state) => state.ui.cardIsVisible)
  console.log(showCard)
  return (
    <Layout>
      {showCard && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
