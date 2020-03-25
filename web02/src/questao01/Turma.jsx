import React from 'react'

export default props =>

<div>
    <h2> {props.turma} </h2> 
    {
        React.Children.map(
            props.children,
            filho => {
                return React.cloneElement(filho, {turma:props.turma, curso:props.curso})
            }
        )
    }
</div>