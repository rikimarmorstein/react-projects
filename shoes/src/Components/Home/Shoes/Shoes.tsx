import "./Shoes.css";

function Shoes(): JSX.Element {
    const shoes=[
        {id:1, name: "נעליים "},
        {id:2, name: "מגפיים"},
        {id:3, name: "סניקרס"},
        {id:4, name: "נעלי בית "}
    ];

    return (
        <div className="Shoes">
			<h1 >אצלנו תמצאו: </h1>
            {shoes.map((d)=>(
                <span key={d.id}>| {d.name} | </span>
                ))}
                <span>👡</span>
        </div>
    );
}

export default Shoes;
