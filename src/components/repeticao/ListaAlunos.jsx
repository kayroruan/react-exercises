import React from "react";
import alunos from '../../data/alunos';

export default _ => {

    const alunoslist = alunos.map(aluno => {
        return <li key={aluno.id}>{aluno.id} - {aluno.nome} / Nota: {aluno.nota}</li>
    })

    return (
        <div>
            <ul>
                {alunoslist}
            </ul>
        </div>
    )
}