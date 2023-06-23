import React from "react";
import produtos from "../../data/produtos";

export default _ => {

    const produtoslist = produtos.map(produto => {
        return <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R${produto.valor.toFixed(2).replace('.', ',')}</td>
        </tr>
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {produtoslist}
            </tbody>
        </table>
    )
}