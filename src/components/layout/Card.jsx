import "./Card.css"
import React from 'react'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#3498DB',
        borderColor: props.color || 'black',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}