import './App.css';
import Navbar from '../src/components/navbar/navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../src/pages/cart.jsx'
import Shop from '../src/pages/shop.jsx'
import ShopCategory from '../src/pages/shopCategory.jsx'
import Product from '../src/pages/product.jsx'
import Footer from './components/footer/footer.jsx'
import LoginSignUp from '../src/pages/loginSignUp.jsx'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category='men' banner={men_banner} />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
