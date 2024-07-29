import react, { useContext } from 'react'
import './css/shopCategory.css'
import { ShopContext } from '../context/shopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/item/item.jsx'

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className="shopCategory">
            <img className="shopCategory-banner" src={props.banner} />
            <div className="shopCategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopCategory-sort">
                    Sort by <img src={dropdown_icon} />
                </div>
            </div>
            <div className="shopCategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopCategory-loadmore">
                Explore more
            </div>
        </div>
    )
}

export default ShopCategory