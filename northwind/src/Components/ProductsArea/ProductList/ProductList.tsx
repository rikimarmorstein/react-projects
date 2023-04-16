import { log } from "console";
import { useEffect, useState } from "react";
import { NavLink, useHref } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Services/NotificationService";
import productService from "../../../Services/ProductsService";
import Loading from "../../SharedArea/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(()=>{
        (async ()=>{
            productService.getAllProducts().then((arr)=>{
                setProducts(arr);
            }, (error)=>{
                // alert(error.message);
                notificationService.error(error);
            });
           
        })();

    }, []);

    

    return (
        <div className="ProductList" id="product-list-top">
			ProudactList...
            <hr />
            <NavLink id="plus" to="new">➕</NavLink>

            {products.length===0 &&<Loading/>}

            {products.map((p)=>(
                <ProductCard key={p.id} product={p}/>
                // <span key={p.id}>{p.name} | </span>
            ))}
            <br/>
            <a href="#product-list-top">top</a>
            {/* <button onClick={handleSubmit<ProductList/>} >top</button> */}
        </div>
    );
}

export default ProductList;
