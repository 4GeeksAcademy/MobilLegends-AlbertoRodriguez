export const Card = (props) => {

    return (
        <div className="col-sm-6 col-md-4 p-2">
            <div className="card">
                <div className=" d-flex justify-content-center" style={{ width: "100%", overflow: "hidden", aspectRatio: "3/4" }}>
                    <img src={props.personaje.imagen} alt="..." />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.personaje.nombre}</h4>
                    <p className="card-text"><strong>Linea: </strong> {props.personaje.linea}</p>
                    <div className="abilidades-container">
                        <h5>Habilidades</h5>
                        <ul>
                            {props.personaje.abilidades.map((habilidad,index) =>{
                                return(
                                    <li key={index}>{habilidad}</li>
                                )
                            })}
                        </ul>

                    </div>

                </div>

            </div>

        </div>


    )
}

