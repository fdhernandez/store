import './StoreProducts.css'
import { Link } from 'react-router-dom'


export default function StoreProducts ({products}) {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  
  const priceFormat = (amount) => {
    return `$${formatter.format(amount)}`
  }
    return (
        <div className="StoreProducts">
            {products.map((item) => (
          <Link to={`/store/${item.id}`} key={item.id}>
                {console.log(item.id)}
             <div className="product-info" key={item.id}>
                <div className="product-image">
                 <img src={item.image} alt={item.name}/>
                </div>
                <div className="product-category">{item.category}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">{priceFormat(item.price)}</div>
            </div>
          </Link>
        ))}
      </div>
    )
}