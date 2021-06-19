import axios from 'axios'
import { useState, useEffect } from 'react'
import './Sidebar.css'

export default function Sidebar( { cart = [], open = false } ) {
  console.log(cart)
  const [cartItems, setCart] = useState(cart)
  const [isOpen, setIsOpen] = useState(open)
  const [products, setProducts] = useState([])
  const handleOnClick = () => {
    if (isOpen) { 
      setIsOpen(false) 
    } else {
      setIsOpen(true)
    }
    try {
      cart.forEach(async (item, index) => {
        console.log(item)
        const res = await axios.get(`http://localhost:3001/store/${item.id}`)
        const product = res?.data?.product
        const quantity = item.quantity
        console.log(quantity)
        if (product) {
          setProducts([...products, {quantity, product} ])
        }
      })
    } catch(err) {
      console.log(err)
    }
  }

  console.log(products)
  return (
    <div className="Sidebar">
      <div className={isOpen ? "open" : "close"}>
        <div className="sidebar-title">Cart</div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Cost</th>
            </tr>
            {products.map(item => (
              
              <tr key={item.product.id}>
                <th>{item.product.name}</th>
                <th>{item.quantity}</th>
                <th>{item.product.price}</th>
                <th>{item.product.price * item.quantity}</th>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="sidebar-btn" onClick={handleOnClick}>{isOpen ? <>&#171;</> : <>&#187;</> }</button>
    </div>
  )
}