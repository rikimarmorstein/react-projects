import "./Footer.css";
import { useEffect, useState } from "react";

function Footer(): JSX.Element {
    const [year, setYear]=useState<string>(new Date().getFullYear().toString());

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setYear(new Date().getFullYear().toString());
        },1000*60*60*24);
        return ()=>{
            clearInterval(timerId);
        };
    }, []);
        
    return (
        
        <div className="Footer">
            
             כל הזכויות שמורות - למוישה אופניק אתרים | <span>{year}</span>
        </div>
    );
}

export default Footer;
