import React, { cloneElement } from 'react'

export default props => {
    return (
        <div>
            <h1>Componente</h1>
            {props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })}
        </div>
    )
}