import { Component } from "react";
import HijoNumero from "./HijoNumero";


class PadreNumeros extends Component {

    numeros = [6, 90, 56, 27]

    state = {
        suma: 0,
        numeros: this.numeros
    }

    sumaNumeros = (numero) => {
        let sumaNumeros = this.state.suma + numero;
        this.setState({
            suma: sumaNumeros
        })
    }

    restarNumeros = (numero) => {
        this.setState({
            suma: this.state.suma - numero
        })
    }

    generarNumAleatorio = () => {
        let num = Math.floor(Math.random()*100);
        this.setState({
            numeros: [...this.state.numeros, num] 
        })
    }

    render () {
        return(
            <div>
                <h1>Padre Números</h1>
                <h3 style={{backgroundColor: "yellow"}}>La suma es {this.state.suma}</h3>
                <button onClick={this.generarNumAleatorio}>Generar número</button>
                {
                    this.state.numeros.map((numero, index) => {
                        return(<HijoNumero key={index} numero={numero} suma={this.sumaNumeros} resta={this.restarNumeros}/>)
                    })
                }
            </div>
        )
    }

}

export default PadreNumeros;