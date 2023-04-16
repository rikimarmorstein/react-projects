import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import "./Links.css";



function Links(): JSX.Element {
    return (
        <div className="Links">
			<p>קישורים מומלצים</p>
            <NavLink to="/check">בדיקת מידה</NavLink>
            <NavLink to="/mid">מדרסים</NavLink>
            <NavLink to="/spida" >ספידה</NavLink>
            <Routes>
                <Route path="https://www.mgweb.co.il/css_tables" element={<Navigate to={"www.mgweb.co.il/css_tables"}/>}/>
            </Routes>
            {/* <a href="https://www.mgweb.co.il/css_tables">kj</a>לא משתמשים בריאקט */}
        </div>
    );
}

export default Links;
