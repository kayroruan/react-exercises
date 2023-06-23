import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import FormPasso from "./FormPasso"

class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <FormPasso passo={this.state.passo} setPasso={this.setPasso}></FormPasso> <br />
                <Buttons onInc={this.inc} onDec={this.dec}></Buttons>
            </div>
        )
    }
}

export default Contador