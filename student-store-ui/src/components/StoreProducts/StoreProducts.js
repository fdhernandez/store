import './StoreProducts.css'
import { Link } from 'react-router-dom'

export default function StoreProducts ({products}) {
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
                <div className="product-price">{item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    )
}