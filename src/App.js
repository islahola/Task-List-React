import './App.css';
import FormItem from './components/FormItem';
import TodoList from './components/TodoList';
import logo from './logo.png'
import React, { Component } from 'react'
import BoxModel from './components/BoxModel';

export default class App extends Component {
  state = {
    todos : [
        {
          id : 1,
          title : "Waktu olla tidur"
      },
      {
          id : 2,
          title : "Waktu olla Mandi"
      }
    ]
  } 
  delById = id =>{
    this.setState({
      todos : this.state.todos.filter(item => item.id !== id)
    })
  }

  add = data =>{
    const id = this.state.todos.length
    const newData = {
      id : id+1,
      title : data
    }
    this.setState({ 
      todos : [...this.state.todos, newData]
    })
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h3>Task List</h3>
      </div>
      <BoxModel/>
      <div className="list">
        {todos.map(item =>
           <TodoList key={item.id} todos={item} del = {this.delById}/>  
        )}
      </div>
      <div className="form">
        <FormItem add={this.add}/>
      </div>
    </div>
      </div>
    )
  }
}


