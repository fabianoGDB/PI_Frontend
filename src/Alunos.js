import React from "react";
import Aluno from "./Aluno";

const Alunos = ({ alunos }) => {
    return(
        <>
        {alunos.map(aluno => (
        <Aluno aluno={aluno}/>
        ))}
        </>
    )
}

export default Alunos;