import "./ShoesCard.css";

interface Shoesim{
    name: string,
    model: number,
    price: number,
    img: string
}
function ShoesCard(props: Shoesim): JSX.Element {

    return (
        <div className="ShoesCard">
<span>name:{props.name}</span>
<p>model:{props.model}</p>
<p>price:{props.price}</p>
<p>img:{props.img}</p>
		<span>____________</span>	
        </div>
    );
}

export default ShoesCard;
