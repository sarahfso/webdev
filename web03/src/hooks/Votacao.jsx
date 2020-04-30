import React, {useState, useEffect} from 'react'

export default props=>{

    const [cont1,setCont1] = useState(0)
    const [cont2,setCont2] = useState(0)
    const [cont3,setCont3] = useState(0)
    const [cont4,setCont4] = useState(0)

    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)

    const cidadesStr = ['Fortaleza', 'Quixadá', 'Acopiara', 'Iguatu']

    useEffect(
        //1 - Função que ele irá executar
        ()=>{

            const cidades = [cont1,cont2,cont3,cont4]
            let localMaior = maior
            for(let i = 0; i < cidades.length; i++){
                if(cidades[i]>localMaior){
                    localMaior = cidades[i]
                }
            }
            setMaior(localMaior)

            let localMenor = localMaior
            for(let i = 0; i < cidades.length; i++){
                if(cidades[i]<localMenor){
                    localMenor = cidades[i]
                }
            }
            setMenor(localMenor)
    
        }, 
        //2 - A variável do useState que irá disparar essa função
        [cont1, cont2, cont3, cont4]     
    )

    function maisVotadas(){
        let saida = ''
        const cidades = [cont1, cont2, cont3, cont4]
        for(let i = 0; i < cidades.length; i++){
            if(cidades[i]===maior){
                saida+=cidadesStr[i]+''
            }
        }
        return saida
    }

    function menosVotadas(){
        let saida = ''
        const cidades = [cont1, cont2, cont3, cont4]
        for(let i = 0; i < cidades.length; i++){
            if(cidades[i]===menor){
                saida+=cidadesStr[i]+''
            }
        }
        return saida
    }
    
    return(
        <div>
            <h2>Fortaleza: {cont1}</h2>
            <h2>Quixadá: {cont2}</h2>
            <h2>Acopiara: {cont3}</h2>
            <h2>Iguatu: {cont4}</h2>

            <h4>Mais votadas: {maior} : {maisVotadas()}</h4>
            <h4>Menos votada: {menor} : {menosVotadas()}</h4>

           <button onClick={setCont1(cont1+1)}>
                Vote em Fortaleza
            </button>
            <button onClick={setCont2(cont2+1)}>
                Vote em Quixadá
            </button>
            <button onClick={setCont3(cont3+1)}>
                Vote em Acopiara
            </button>
            <button onClick={setCont4(cont4+1)}>
                Vote em Iguatu
            </button>
        </div>
    )

}
