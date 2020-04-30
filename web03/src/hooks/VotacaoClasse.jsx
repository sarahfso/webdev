import React, {Component} from 'react'

const cidadesStr = ['Fortaleza', 'Quixadá', 'Acopiara', 'Iguatu']

export default class VotacaoClasse extends Component{

    constructor(props){
        super(props)
        this.state{cont1:0,cont2:0,cont3:0,cont4:0,maior:0,menor:0}
    }

    //https://pt-br.reactjs.org/docs/react-component.html#componentdidupdate
    componentDidUpdate(prevProps, prevState){
        if(prevState.cont1 !== this.state.cont1 ||
            prevState.cont2 !== this.state.cont2 ||
            prevState.cont3 !== this.state.cont3 ||
            prevState.cont4 !== this.state.cont4){
            const cidades = [this.state.cont1,this.state.cont2,this.state.cont3,this.state.cont4]
            let localMaior = this.state.maior
            for(let i = 0; i < cidades.length; i++){
                if(cidades[i]>localMaior){
                    localMaior = cidades[i]
                }
            }
            this.setState({maior:localMaior})

            let localMenor = this.state.maior
            for(let i = 0; i < cidades.length; i++){
                if(cidades[i]<localMenor){
                    localMenor = cidades[i]
                }
            }
            this.setState({menor:localMenor})
        }
    }

    maisVotadas(){
        let saida = ''
        const cidades = [this.state.cont1, this.state.cont2, this.state.cont3, this.state.cont4]
        for(let i = 0; i < cidades.length; i++){
            if(cidades[i]===this.state.maior){
                saida+=cidadesStr[i]+''
            }
        }
        return saida
    }

    menosVotadas(){
        let saida = ''
        const cidades = [this.state.cont1, this.state.cont2, this.state.cont3, this.state.cont4]
        for(let i = 0; i < cidades.length; i++){
            if(cidades[i]===this.state.menor){
                saida+=cidadesStr[i]+''
            }
        }
        return saida
    }

    render(){
        return(
            <div>
                <h2>Fortaleza: {this.state.cont1}</h2>
                <h2>Quixadá: {this.state.cont2}</h2>
                <h2>Acopiara: {this.state.cont3}</h2>
                <h2>Iguatu: {this.state.cont4}</h2>

                <h4>Mais votadas: {this.state.maior} : {this.maisVotadas()}</h4>
                <h4>Menos votadas: {this.state.menor} : {this.menosVotadas()}</h4>

                <button onClick={this.setState({cont1:this.state.cont1+1})}>Vote em Fortaleza</button>
                <button onClick={this.setState({cont2:this.state.cont2+1})}>Vote em Quixadá</button>
                <button onClick={this.setState({cont3:this.state.cont3+1})}>Vote em Acopiara</button>
                <button onClick={this.setState({cont4:this.state.cont4+1})}>Vote em Iguatu</button>
            </div>
        )
    }
}