import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {

    state = {
        favorito: ""
    }

    marcarFavorito = (nombreDeporte) => {
        this.setState({
            favorito: nombreDeporte
        })
    }

    deportes = ["Baloncesto", "futbol", "tenis", "hockey"];

    render () {
        return(
            <div>
                <h1>Padre deportes</h1>
                <h3 style={{backgroundColor: "yellow"}}>Su deporte favorito es: {this.state.favorito}</h3>

                {
                    this.deportes.map((nombre, index) => {
                        return(<HijoDeporte key={index} nombre={nombre} marcarFavorito={this.marcarFavorito}/>)
                    })
                }
            </div>
        )
    }
}

export default PadreDeportes;