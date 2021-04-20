import React, { Component } from 'react'
import '../style/box.css'
import Button from './Button'

export default class BoxModel extends Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                    <h1>Edit Data Task</h1>
                    <input></input>
                    <div className="wrep-btn">
                        <Button text="Edit" variant="succes"/>
                        <Button text="cencel" variant="warning"/>
                    </div>
                </div>
            </div>
        )
    }
}
