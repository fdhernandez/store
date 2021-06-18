
import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import StoreProducts from '../StoreProducts/StoreProducts'
import ProductDetails from '../ProductDetails/ProductDetails'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const req = await axios.get("http://localhost:3001/store")
        const products = req?.data?.products
        if (products) {
          setProducts(products)
        }
      } catch (err) {
        setError(err)
      }
    }
    fetchInventory()
  }, [])

  return (
    <div className="App">
      <div></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products}/>}></Route>
          <Route path="/store/:productId" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
