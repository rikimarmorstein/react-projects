import { useState } from "react";
import "./Bestseller.css";

function Bestseller(): JSX.Element {
    // let name="";
    const nameArray = useState<string>("");
    const name = nameArray[0];
    const setName = nameArray[1];

    const [itemsSold, setItemsSold]=useState<number>(0);

    // let itemsSold = 0;

    function display(){
        // name="Exotic Liquids";
        let arr = ["Exotic Liquids", "Apple", "Coffee"];
        setName(arr[Math.floor(Math.random()*arr.length)]);
        setItemsSold(Math.floor(Math.random()*101));
        
    }

    return (
        <div className="Bestseller Box">
			<button onClick={display}>Display Best Seller</button>
            <span> Name: {name}, Items sold: {itemsSold}</span>
        </div>
    );
}

export default Bestseller;
