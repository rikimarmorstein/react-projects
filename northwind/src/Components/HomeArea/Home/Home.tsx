import appConfig from "../../../Utils/Config";
import Bestseller from "../Bestseller/Bestseller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import MoneyBack from "../MoneyBack/MoneyBack";
import Recommendation from "../Recommendation/Recommendation";
import Sale from "../Sale/Sale";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            {/* events */}
            <Recommendation />
            {/* display lists */}
            <Desserts />
            {/* props */}
            <Sale percent={5} category="Beverages"></Sale>
            <Sale percent={10} category="Candies" comments="No Sugar"></Sale>
            {/* useState */}
            <Bestseller />
            {/* useEffect */}
            <MoneyBack />
            <Clock />

            <h3>Environment variables</h3>
            {/* <div>
                My Name is {process.env.REACT_APP_MY_NAME}
            </div>
            <div>
                My url is {appConfig.productsUrl}
            </div> */}
        </div>
    );
}

export default Home;
