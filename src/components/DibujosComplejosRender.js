import { Component } from "react";


class DibujosComplejosRender extends Component {

    state = {
        nombres: ["Lucia", "Ana", "Juan", "Antonio", "Jimena"]
    }

    anadirNombres = () => {
        this.state.nombres.push('Jorge');
        this.setState({
            nombres: this.state.nombres
        })
    }

    render () {
        return(
            <div>
                <h1>Dibujos complejos Render</h1>
                <button onClick={this.anadirNombres}>Nuevo nombre</button>
                {
                    //Este codigo es JSX de REACT
                    //El codigo lógico debe contener un return
                    this.state.nombres.map((nombre, index) => {
                        return (<h3 style={{color: "blue"}} key={index}>
                            {nombre}
                        </h3>)
                    })
                }
            </div>
        )
    }


}

export default DibujosComplejosRender;