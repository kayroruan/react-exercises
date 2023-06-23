import React,{useState} from "react";

export default props => {
    function gerarNumeroDif(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ? gerarNumeroDif(min, max, array) : random
    }

    function gerarNumero(i) {
        const numeros = Array(i).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroDif(1, 60, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)

        return numeros
    }

    const qtde = props.i || 6
    const numerosIniciais = Array(qtde).fill('')
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar números</button>
        </div>
    )
}