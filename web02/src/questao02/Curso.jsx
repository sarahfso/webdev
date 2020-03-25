import React from 'react'

import Turma from './Turma.jsx'

export default props =>(
<div>
    <h2> {props.nome}</h2>
    <Turma turma='Fundamentos de Programação' curso={props.nome} estudantes={[
        {nome: 'Fulano de Tal'}, 
        {nome: 'Beltrano de Tal'}
    ]}/>       
    <Turma turma='Introdução a Banco de Dados' curso={props.nome} estudantes={[
        {nome: 'Fulano de Tal'}, 
        {nome: 'Beltrano de Tal'},
        {nome: 'Sicrano de Tal'}
    ]}/>
</div>
)