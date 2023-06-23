import React from 'react'

export default (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><b>{props.pessoa}</b> está utilizando <b>{props.lang}</b></p>
        </div>
    )
}