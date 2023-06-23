import React, { useState } from "react";

export default _ => {

    const [valor, setValor] = useState('0');
    const handleChange = (event) => {
        setValor(event.target.value);
    };

    const isPar = valor % 2 === 0

    return (
        <div>
            <input type="text" value={valor} onChange={handleChange}/><br />
            {isPar ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
    }