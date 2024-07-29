import './footer.css'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        < div className="footer" >
            <div className="footer-logo">
                <img src={require('../assets/logo_big.png')} alt="logo" />
                <p>SHOPPERHUB</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>&copy;Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div >
    )
}
export default Footer;
