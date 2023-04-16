import { useEffect, useState } from "react";
import Routing from "../Routing/Routing";
import YouTube from "../YouTube/YouTube";
import "./Home.css";
import Shoes from "./Shoes/Shoes";
import ShoesCard from "./Shoes/ShoesCard/ShoesCard";

function Home(): JSX.Element {
const [day, setDay]=useState<string>(new Date().getDate().toString());

useEffect(()=>{
    const timerId = setInterval(()=>{
        setDay(new Date().getDate().toString());
    },1000*60*60*24);
    return ()=>{
        clearInterval(timerId);
    };
}, []);

    function isDay():boolean {
                return day==='1';
            }
            return (
                <div className="Home">
            {isDay()&& <p>Only now - discount sale: 1+1</p>}
			<YouTube/>
            <Routing/>
            <Shoes/>
            <ShoesCard name="sniker" model={2001} price={200.00} img=" 👢"></ShoesCard>
            <ShoesCard name="ofra" model={2010} price={250.00} img="👞 "></ShoesCard>
            <ShoesCard name="ofra" model={2010} price={250.00} img="👞 "></ShoesCard>

        </div>
    );
}

export default Home;
