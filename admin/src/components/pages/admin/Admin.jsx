import AddProduct from '../../addproduct/AddProduct';
import ListProduct from '../../listproduct/ListProduct';
import Sidebar from '../../sidebar/Sidebar';
import './Admin.css'
import { Routes, Route } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path='/listproduct' element={<ListProduct />} />
            </Routes>
        </div>
    )
};
export default Admin;
