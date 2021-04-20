import React, { Component } from 'react'
import Button from './Button'
import '../style/form.css'

export default class FormItem extends Component {
    state = {
        text :  ""
    }
    change = e => {
        this.setState({ text : e.target.value})
    }
    submit = e =>{
        e.preventDefault()
        if (this.state.text !== ""){
            this.props.add(this.state.text)
        }
        this.setState ({
            text : ""
        })
        
    }
    render() {
        return (
            <form style={form} onSubmit={this.submit}>
                <input style={input} value={this.state.text} onChange={this.change} placeholder="add task"></input>
                <Button text ="Add" variant = "primary" action={this.submit}/>
            </form>
        )
    }
}
const form = {
    background :" #fff",
    display : "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0.5rem 0",
    padding: "0 1rem",
    height: "3rem",
    color:"#fff"

}

const input ={
    width:"70%",
    border:"none"
}