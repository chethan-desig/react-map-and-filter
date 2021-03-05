import React, { Component } from 'react';
import "./Header.css"

 class Header extends Component{
    constructor(){
        super()
            this.state={
                tittle:"React JS",
                Keyword:"user text"
            }
        
    }
    Changeinput=(event)=>{
        
        this.setState({Keyword:event.target.value?event.target.value:"user text"})
        this.props.userText(event.target.value)
    }
    render(){
        return(
            <header>
                <h1>{this.state.tittle}</h1>
                
                <input onChange={this.Changeinput}/>
                <h2>{this.state.Keyword}</h2>
            </header>
        )
    }
}
export default Header