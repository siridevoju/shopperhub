import react, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/breadcrums/breadcrum.jsx'
import ProductDisplay from '../components/productDisplay/productDisplay.jsx'
import DescriptionBox from '../components/descriptionBox/descriptionBox.jsx'
import RelatedProducts from '../components/relatedProducts/relatedProducts.jsx'

const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams()
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default Product