import { Component } from "react";

class Comic extends Component {

    enviarFavorito = () => {
        this.props.favorito(this.props.comic);
    }

    enviarIndice = () => {
        this.props.eliminar(this.props.indice)
    }


    render () {
        return(
            <div>
                <h2>Titulo: {this.props.comic.titulo}</h2>
                <h2>Descripción: {this.props.comic.descripcion}</h2>
                <img src={this.props.comic.imagen} style={{width: '150px'}}></img>
                <button onClick={this.enviarFavorito}>Seleccionar favorito</button>
                <button onClick={this.enviarIndice}>Eliminar comic</button>
            </div>
        )
    }

}

export default Comic;