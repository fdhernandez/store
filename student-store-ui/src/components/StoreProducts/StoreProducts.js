import './StoreProducts.css'
import { Link } from 'react-router-dom'
//import { useState } from 'react'

import Sidebar from '../Sidebar/Sidebar'


export default function StoreProducts ({products, cartCallback}) {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  
  const priceFormat = (amount) => {
    return `$${formatter.format(amount)}`
  }

  //`const [cart, setCart] = useState([])

  const handleIncrement = (event) => {
    const itemId = event.target.name
    cartCallback(itemId)
  }

  const handleDecrement = (event) => {
    <Sidebar increment={false} id={event.target.name}/>
  }
    return (
        <div className="StoreProducts">
            {products.map((item) => (
          <div className="product-info product-hover" key={item.id}>
          <Link to={`/store/${item.id}`} key={item.id}>
              
             
                <div className="product-image">
                 <img src={item.image} alt={item.name}/>
                </div>
          </Link>
              <div className = "product-details">
                <div className = "addcart-btns">
                  <button name={item.id} onClick={handleDecrement}>–</button>
                  <button name={item.id} onClick={handleIncrement}>+</button>
                </div>
                <div className="product-category">{item.category}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">{priceFormat(item.price)}</div>
              </div>
            </div>
          
        ))}
      </div>
    )
}