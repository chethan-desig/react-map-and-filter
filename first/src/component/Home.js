import React, { Component } from 'react'
import Footer from './footer'
import Header from './Header';
import Json from '../db.json';
import Newasdetails from './Newsdetails'
export default class Home extends Component {
    constructor () {
        super ()
        this.state={
            news:Json,
            filterd:Json
        }
    }
    filterNews(keyword){
        const output = this.state.news.filter((data)=>{
            if(data.title.keyword){
                return(data.title.indexOf(keyword)>-1)
            }
            else
             {
                return(data.feed.toLowerCase().indexOf(keyword.toLowerCase())>-1)
             }
             
               
        })
            this.setState({filterd:output})
    }
    render() {
    
        return (
            <div>
                <center>
                <Header userText={(userInput)=>{this.filterNews(userInput)}}/>
                <hr/>
                <Newasdetails usertext={this.state.filterd} />
                
                <Footer />

                </center>
                
            </div>
        )
    }
}
