import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { Card } from "./Card";

//create your first component
const Home = () => {

	const personajesMobilLegends = [
		{
			id: 1,
			nombre: "Karrie",
			linea: "Tirador",
			abilidades: [" Marca de Rueda de luz"," Daño verdadero", "Velocidad de ataque"],
			imagen: "https://i.pinimg.com/736x/c1/be/6a/c1be6ad79df0ea5aed779b0587d843f5.jpg"
		},
		{
			id: 2,
			nombre: "Bruno",
			linea: "Tirador",
			abilidades: ["Piernas mecanicas", "Tiro bolea", "barrida"],
			imagen: "https://i.pinimg.com/564x/b6/20/95/b62095275b353309b443619153164b43.jpg"
		},
		{
			id: 3,
			nombre: "Grock",
			linea: "Tanque",
			abilidades: ["Control de masas", "Poder de la naturaleza","Barrera de Guardian"],
			imagen: "https://theriagames.com/wp-content/uploads/2025/03/Mobile-Legends-Grock-3.webp"
		},
		{
			id: 4,
			nombre: "Zilong",
			linea: "Asesino",
			abilidades: ["Golpe de lanza","Gerrero supremo","Rafaga "],
			imagen: "https://pm1.aminoapps.com/6606/d4573e455148d4ac3668c2dc7c70b5f5c3886a70_hq.jpg"
		},
		{
			id: 5,
			nombre: "Saber",
			linea: "Asesino",
			abilidades: ["Se especializa en enboscadas","Asesinato al instante","Golpe final"],
			imagen: "https://pm1.aminoapps.com/6704/09eea52919644dba2b1c8cab63910ef6473f8a39_00.jpg"
		},
		{
			id: 6,
			nombre: "Vale",
			linea: "Mago",
			abilidades: ["Alas de viento", "Tornado","Tempestad suprema"],
			imagen: "https://cdn.oneesports.gg/cdn-data/2022/07/MLBB_Vale-1.jpg"
		},
		{
			id: 7,
			nombre: "Ciclope",
			linea: "Mago",
			abilidades: ["Impacto Estelar" ,"Ataque Planetario", "Bloqueo de Energía Estelar"],
			imagen: "https://pm1.aminoapps.com/7259/4eb4de2dab26a156f9a22bd89abd1801d803a290r1-607-1080v2_hq.jpg"
		},
		{
			id: 8,
			nombre: "Rafaela",
			linea: "suport",
			abilidades: ["Luz de Reprensión","Curación Santa","Rayo Sagrado"],
			imagen: "https://theriagames.com/wp-content/uploads/2025/03/Mobile-Legends-Rafaela.webp"
		},
		{
			id: 9,
			nombre: "Estes",
			linea: "suport",
			abilidades: ["Inmersión de la Luz de la Luna"," Dominio de la Diosa de la Luna","Bendición de la Diosa de la Luna"],
			imagen: "https://liquipedia.net/commons/images/0/0a/Estes_infobox.png"
		}



	]

	return (
		<>
			<Navbar />
			<div className="container">
				<h1>Movil lengends</h1>
				<div className="row">
					{
						personajesMobilLegends.map(personaje => {
							return(
								<Card key={personaje.id} personaje={personaje}/>
							)
						})
					}
				</div>

			</div>
		</>
	);
};

export default Home;