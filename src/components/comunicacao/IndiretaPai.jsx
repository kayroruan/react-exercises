import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default _ => {
    const [nome, setName] = useState('?')
    const [idade, setIdade] = useState(0)
    const [bool, setBool] = useState(false)

    function fornecerInformações(nome, idade, bool) {
        setName(nome)
        setIdade(idade)
        setBool(bool)
    }

    return (
        <div>
            <div>
                <span>{nome}</span><br />
                <span>{idade}</span><br />
                <span>{bool ? 'Verdadeiro' : 'Falso'}</span><br />
            </div>
            <IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
        </div>
    )
}