import React from 'react'

import Estudante from './Estudante.jsx'

export default props =>(
<div>
    <h2> {props.turma} </h2>
    {
        props.estudantes.map(element => {
            return <Estudante nome={element.nome} turma={props.turma} curso={props.curso}/> 
        })
    }
</div>
)