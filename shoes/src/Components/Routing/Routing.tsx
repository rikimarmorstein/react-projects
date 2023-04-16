// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Spida from "../Spida/Spida";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/spida" element={<Spida/>}/>
</Routes>
        </div>
    );
}

export default Routing;
