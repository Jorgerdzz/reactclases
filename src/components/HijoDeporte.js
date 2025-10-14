import { Component } from "react";


class HijoDeporte extends Component {

    enviarFavorito = () => {
        this.props.marcarFavorito(this.props.nombre);
    }

    render (){
        return(
            <div>
                <h3 style={{color: "Blue"}}>Deporte: {this.props.nombre}</h3>
                <button onClick={this.enviarFavorito}>Seleccionar favorito</button>
            </div>
        )
    }
}

export default HijoDeporte;