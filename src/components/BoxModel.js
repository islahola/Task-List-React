import React, { Component } from 'react'
import '../style/box.css'
import Button from './Button'

export default class BoxModel extends Component {
    render() {
        const {edit,close,data, change,update} = this.props
        if(edit){
            return (
                <div className="container">
                    <div className="box">
                        <h1>Edit Data Task</h1>
                        <input type="text" value = {data.title} onChange={change} ></input>
                        <div className="wrep-btn">
                            <Button text="Edit" variant="succes"  action = {update} />
                            <Button text="cencel" variant="warning" action = {close}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null 
        }
    }
}

