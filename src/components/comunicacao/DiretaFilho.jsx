import React from "react";

export default props => {
    return (
        <div>
            <span>{props.texto}</span><br/>
            <span>{props.numero}</span><br />
            <span>{props.bool ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}