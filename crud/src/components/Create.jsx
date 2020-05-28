import React, {Component} from 'react'

export default class Create extends Component{
    
    constructor(props){
        super(props)

        this.state = {nome:'', curso:'', ira:''}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIra = this.setIra.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }

    setCurso(e){
        this.setState({curso:e.target.value})
    }

    setIra(e){
        this.setState({ira:e.target.value})
    }    

    onSubmit(e){
        e.preventDefault() //impede que o browser faça reload, perdendo assim o dado
        console.log('Nome: ' + this.state.nome)
        console.log('Curso: ' + this.state.curso)
        console.log('IRA: ' + this.state.ira)
        this.setState({nome:'', curso:'', ira:''})
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Criar Estudante</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control"
                            value={this.state.ira} onChange={this.setIome}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary"/>
                    </div>
                </form>    
            </div>
        )
    }
}