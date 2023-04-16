import "./MoneyBack.css";
import { useState, useEffect } from "react";


function MoneyBack(): JSX.Element {

    const[money, setMoney] = useState<number>(0);

    useEffect(()=>{
        setTimeout(()=>{
            setMoney(Math.floor(Math.random()*52)+5);
        },3000);
     },[]);

    return (
        <div className="MoneyBack Box">
			<span>Money Back: {money}</span>
        </div>
    );
}

export default MoneyBack;
