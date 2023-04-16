import { NavLink } from "react-router-dom";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			{/* <a href="/home">Home</a>
            <a href="/products">Products</a>
			<a href="/about">About</a> */}
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>

                <TotalProducts/>
        </div>
    );
}

export default Menu;
