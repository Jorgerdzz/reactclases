import { Component } from "react";

//Podemos declara metodos fuera de la clase
//Estos no pueden utilizar nada del component
function metodoAbsurdo(){
    console.log("Método sin funcionalidad");
}

class Contador extends Component {

    // las variables se declaran a nivel de clase, no hace falta let, var ni const

    numero = 1;

    // con los metodos sucede lo mismo

    incrementarNumero = () => {
        // para acceder a la variables de clase hay que utilizar this
        this.numero += 1;
        console.log(this.numero);
    }
    

    //Las variables state son declaradas en el objeto de la clase
    state = {
        valor: parseInt(this.props.inicio),
    }

    incrementarValor = () => {
        this.setState({
            valor: this.state.valor + 1,
        })
    }
    
    render () {
        return(
            <div>
                <h1 style={{color: "blue"}}>Ejemplo Contador JSX: {this.props.inicio}</h1>
                <h3 style={{color: "red"}}>Valor: {this.state.valor}</h3>
                <button onClick={this.incrementarNumero}>Incrementar</button>
                <button onClick={this.incrementarValor}>Incrementar valor</button>
                <button onClick={()=>{
                    //CODIGO JSX
                    metodoAbsurdo();
                    this.incrementarNumero();
                }}>TENEMOS MÚLTIPLES FORMAS DE REALIZAR LLAMADAS</button>
            </div>
        )
    }

}

export default Contador;