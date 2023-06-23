import React, { useState } from 'react';


export default (props) => {
    const { a, b } = props
    const [numero, setNumero] = useState(null);

    const gerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * (b - a)) + 1;
        setNumero(novoNumero);
    };

    return (
        <div>
            <h1>Sorteio 1 a 10</h1>
            {numero !== null ? (
                <div>
                    <p>Número Gerado: {numero}</p>
                    <button onClick={gerarNumero}>Gerar Novo Número</button>
                </div>
            ) : (
                <button onClick={gerarNumero}>Gerar Número</button>
            )}
        </div>
    );
};