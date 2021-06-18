import './Home.css'
import StoreProducts from '../StoreProducts/StoreProducts'

export default function Home ({products}) {
    return (
        <div id="home" className="Home">
            <div className="store-card">
                <div className="store-card-div">
                    <h2>🍃 Green Paradise Store </h2>
                          
                </div>
            </div>

            <div id ="store">
            <h1>Thank you for choosing Green Paradise Store for all your plant needs.</h1>
                <StoreProducts products = {products}/>
            </div>
        </div>
    )
}
