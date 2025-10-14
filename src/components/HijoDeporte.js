import { Component } from "react";


class HijoDeporte extends Component {
    render (){
        return(
            <div>
                <h3 style={{color: "Blue"}}>Deporte: {this.props.nombre}</h3>
            </div>
        )
    }
}

export default HijoDeporte;