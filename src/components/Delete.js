import React, { Component } from 'react'
import '../style/box.css'
import Button from './Button'

export default class Delete extends Component {
    render() {
        const {close,hapus,del,todos} = this.props   
        const test = id =>{
            del(id)
        } 
        if(hapus){
            return (
                <div className="container">
                    <div className="box">
                        <h1>Anda yakin akan menghapus list?</h1>
                        <div className="wrep-btn">
                            <Button text="hapus" variant="primary" action={()=> test(todos.id)} />
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

