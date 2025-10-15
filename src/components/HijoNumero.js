import { Component } from "react";

class HijoNumero extends Component {

    enviarSuma = () => {
        this.props.suma(this.props.numero)
    }

    render () {
        return(
            <div>
                <h2 style={{color: "red"}}>Numero: {this.props.numero}</h2>
                <button onClick={this.enviarSuma}>Sumar {this.props.numero}</button>
            </div>
        )
    }

}

export default HijoNumero;