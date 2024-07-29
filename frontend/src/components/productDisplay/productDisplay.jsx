import './productDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/shopContext'
import { useContext } from 'react'

const ProductDisplay = (props) => {
    const { product } = props;
    const { all_product, addtocart, removeFromCart, cartItems } = useContext(ShopContext)
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className="product-display-img">
                    <img src={product.image} className="product-display-main-img" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>

                <div className="product-display-right-star">
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_dull_icon} />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-old-price">
                        ${product.old_price}
                    </div>
                    <div className="product-display-right-new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-right-desc">
                    {product.description}
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addtocart(product.id) }}>ADD TO CART</button>
                <p className="product-display-right-category"><span>Category :</span>Women, T shirt, Crop Top</p>
                <p className="product-display-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
};
export default ProductDisplay;
