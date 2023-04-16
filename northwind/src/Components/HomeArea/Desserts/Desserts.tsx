import "./Desserts.css";

function Desserts(): JSX.Element {
    const deserts=[
        {id:1, name: "Apple Pie"},
        {id:2, name: "Pavlova"},
        {id:3, name: "Eclair"},
        {id:4, name: "Ice Cream"}

        ];
    return (
        <div className="Desserts Box">
			<span>our desserts: </span>
            {deserts.map((d)=>(
                <span key={d.id}>{d.name} | </span>
            ))}
        </div>
    );
}

export default Desserts;
