import React, { Component } from 'react'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import "bootstrap/dist/css/bootstrap.min.css"
import { v1 as uuid } from "uuid"

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      items: [],
      id:uuid(),
      item: "",
      editItem: false
    };

  }

  handleInputChange = value =>{
    this.setState({
      item: value
    });
  };

  handleDelete = id =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  }

  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  }

  addTodo = value => {

    if(value !== ""){
      const newItem ={
        id: this.state.id,
        title: value
      }

      const updatedItems = [...this.state.items,newItem];

      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false
      });
    }else{
      console.log("No text inputted");
    }
    
  };

  clearList = e =>{
    this.setState({
      items:[]
    })
  }

  render(){
    return(
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo Input</h3>
          <TodoInput item={this.state.item} handleChange={this.handleInputChange} handleSubmit={this.addTodo} editItem={this.state.editItem} />
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        </div>
      </div>
    </div>
    )}
}

export default App;
