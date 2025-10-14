import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {

    deportes = ["Baloncesto", "futbol", "tenis", "hockey"];

    render () {
        return(
            <div>
                <h1>Padre deportes</h1>
                <h3 style={{backgroundColor: "yellow"}}>Su deporte favorito es:</h3>

                {
                    this.deportes.map((nombre, index) => {
                        return(<HijoDeporte key={index} nombre={nombre} />)
                    })
                }
            </div>
        )
    }
}

export default PadreDeportes;