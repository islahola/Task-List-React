import './App.css';
import FormItem from './components/FormItem';
import TodoList from './components/TodoList';
import logo from './logo.png'
import React, { Component } from 'react'
import BoxModel from './components/BoxModel';
import Delete from './components/Delete';

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
    ],
    isEdit : false,
    isDelete : false,
    editData : {
      id : "",
      title : ""
    }
  } 
  update = () =>{
    const {id, title} = this.state.editData
    const newData = {id, title}
    const newTodos = this.state.todos
    newTodos.splice((id-1), 1, newData)
    this.setState({
      todos : newTodos,
      isEdit :false,
      
      editData : {
        id :  "" ,
        title : " "
      }
    })
  }
  setTittle = e => {
    this.setState ({
      editData : {
        ...this.state.editData,
        title : e.target.value
      }
    })
  }
  hapus = () =>{
    this.setState({
      isDelete :true,
    })
  }
  isOpen = (id, data) =>{
    this.setState ({
      isEdit : true,
      editData :{
        id,
        title : data
      }
    })
  }
  isClose = () =>{
    this.setState({
      isEdit : false,
      isDelete : false
    })
  }

  delById = id =>{
   this.setState({
     todos : this.state.todos.filter(item => item.id !==id)
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
        {todos.map(item =>
            <Delete key={item.id} 
            todos={item}
            hapus ={this.state.isDelete} 
            close ={this.isClose}
            del ={this.delById}
            />  
          )}
        <BoxModel  
          edit ={this.state.isEdit} 
          close ={this.isClose}
          change = {this.setTittle}
          data ={this.state.editData}
          update ={this.update}
          />
        <div className="list">
          {todos.map(item =>
            <TodoList key={item.id} 
            todos={item}
            del = {this.hapus}
            open = {this.isOpen}
            />  
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


