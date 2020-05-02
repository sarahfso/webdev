import React, {Component} from 'react'
import './Robo.css'

import Button from '../components/Button'
import Display from '../components/Display'


export default class Robo extends Component {

    constructor(props){
        super(props)
        this.state = {i:7,j:7}

        this.setPosition = this.setPosition.bind(this)
    }

    drawMatrix(){
        let out = ''
        for(let i = 0; i < 14; i++){
            for(let j = 0; j < 14; j++){
                if(i===this.state.i && j===this.state.j)
                    out+='[O]'
                else
                    out+='[X]'
            }
        }
        return out
    }

    setPosition(position){
        let i = this.state.i
        let j = this.state.j
        if(position==='UP'){
            i = i - 1
        }else if(position==='DOWN'){
            i = i + 1
        }else if(position==='LEFT'){
            j = j - 1
        }else if(position==='RIGHT'){
            j = j + 1
        }
        this.setState({i:i,j:j})
    }

    render(){
        return(
            <div className='robo'>
                <Display value={this.drawMatrix()}/>
                <Button label='UP' double click={this.setPosition}/>
                <Button label='LEFT' click={this.setPosition}/>
                <Button label='RIGHT' click={this.setPosition}/>
                <Button label='DOWN' double={true} click={this.setPosition}/>
            </div>
        )
    }
}