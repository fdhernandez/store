import './Home.css'
import StoreProducts from '../StoreProducts/StoreProducts'

export default function Home ({products}) {
    return (
        <div id="home" className="Home">
            <div className="store-card">
                <div className="store-card-div">
                    <h1>Thank You for Shopping With Us!!</h1>        
                </div>
            </div>

            <div id ="store">
                <h1>Store</h1>
                <StoreProducts products = {products}/>
            </div>
        </div>
    )
}
