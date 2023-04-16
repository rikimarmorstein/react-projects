import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Navigate to={"/home"}/>}/>
                <Route path="*" element={<PageNotFound/>}/>
                <Route path="/products/details/:prodId" element={<ProductDetails/>}/>
                <Route path="/products/new" element={<AddProduct/>}/>
                <Route path="/products/edit/:prodId" element={<EditProduct/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
