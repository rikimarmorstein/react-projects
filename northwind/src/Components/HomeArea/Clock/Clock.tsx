import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {
    const [time, setTime]=useState<string>(new Date().toTimeString());

    useEffect(()=>{
    const timerId = setInterval(()=>{
        setTime(new Date().toTimeString());
    },1000);
    return ()=>{
        clearInterval(timerId);
    };
}, []);
    return (
        <div className="Clock Box">
			<span>{time}</span>
        </div>
    );
}

export default Clock;
