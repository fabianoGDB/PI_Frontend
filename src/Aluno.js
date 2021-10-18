import React from 'react';

const Aluno = ({ aluno }) => {
    return (
        <>
            <tr>
                    <th className="nome">{aluno.nome}</th>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                </tr>
        </>
    )
}

export default Aluno;