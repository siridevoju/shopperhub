import react from 'react'
import Hero from '../components/hero/hero.jsx'
import Popular from '../components/popular/popular.jsx'
import Offers from '../components/offers/offers.jsx'
import NewCollections from '../components/newCollections/newCollections.jsx'
import NewsLetter from '../components/newsletter/newsletter.jsx'

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />

        </div>
    )
}

export default Shop