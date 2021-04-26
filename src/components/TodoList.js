import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

function TodoList({todos,del,open}) {
    const delTask = id =>{
        del(id)
    }
    const todo = {
        background :" #2da4fb",
        display : "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0.5rem 0",
        padding: "0 1rem",
        height: "3rem",
        color:"#fff"
    }

    const btn ={
        display :"flex"
    }

    return (
        <div style = {todo}>
            <h3>{todos.title}</h3>
            <div style = {btn}>
                <Button variant = "succes" text ="edit" action={() => open(todos.id,todos.title)}/>
                <Button variant = "warning" text ="delete" action={() => delTask(todos.id)}/>
            </div>
        </div>
    )
};

TodoList.propTypes = {
    todos : PropTypes.object.isRequired,
    del : PropTypes.func.isRequired
}

export default TodoList