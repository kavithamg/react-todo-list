import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

class TodoInput extends Component {
    
    handleTodoInput = (e) => {
        e.preventDefault();
        let todo = document.getElementById("todo").value;
        this.props.handleChange(todo);
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        let todo = document.getElementById("todo").value;
        this.props.handleSubmit(todo);
    }

    render() {
        const {editItem} =this.props
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <FontAwesomeIcon icon={faBook} />
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" onChange={this.handleTodoInput} placeholder="add a todo item" id="todo" value={this.props.item} />
                    </div>
                    <button type="submit" onClick={this.handleAddTodo} className={editItem ? "btn btn-block btn-success mt-3" :"btn btn-block btn-primary mt-3"}>{editItem ? "edit item" : "add item"}</button>
                </form>
            </div>
            
        )
    }
}

export default TodoInput
