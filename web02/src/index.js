import React from 'react'
import ReactDOM from 'react-dom'


 
//PARA TESTE DA QUESTÃO 01 
//HÁ UMA OBSERVAÇÃO EM Turma.jsx

import Estudante from './questao01/Estudante.jsx'
import Curso from './questao01/Curso.jsx'
import Turma from './questao01/Turma.jsx'


const root = document.getElementById('root')
ReactDOM.render(
    <div>

    <Curso curso='Sistemas de Informação'>
        <Turma turma='Fundamentos de Programação' curso='Sistemas de Informação'>
            <Estudante nome='Fulano de Tal'/>
            <Estudante nome='Beltrano de Tal'/>
        </Turma>
        <Turma turma='Introdução a Banco de Dados' curso='Sistemas de Informação'>
            <Estudante nome='Fulano de Tal'/>
            <Estudante nome='Beltrano de Tal'/>
            <Estudante nome='Sicrano de Tal'/>
        </Turma>
    </Curso>

    </div>, root)


/*
//PARA TESTE DA QUESTÃO 02
//OBSERVAÇÃO: Jefferson, não sei como você planeja as aulas durante esse período de isolamento, mas 
//considere por favor, resolver essa questão com explicação, estou com dificuldades.

import Curso from './questao02/Curso.jsx'

const root = document.getElementById('root')
ReactDOM.render(<Curso nome='Sistemas de Informação'/>, root)
*/