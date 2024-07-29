import react from 'react'
import hand_icon from '../assets/hand_icon.png'
import './hero.css'
import arrow_icon from '../assets/arrow.png'
import shopping_image from '../assets/shopping_image.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={shopping_image} alt="" />
            </div>
        </div>
    )
}

export default Hero