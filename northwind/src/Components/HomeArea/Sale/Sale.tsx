import "./Sale.css";

interface SaleProps{
    category:string;
    percent:number;
    comments?:string;
}

function Sale(props: SaleProps): JSX.Element {
    return (
        <div className="Sale Box">
			<span>$ sale: {props.percent}% on all {props.category}
            {props.comments && <>| comments:{props.comments} </>}
            </span>

        </div>
    );
}

export default Sale;
