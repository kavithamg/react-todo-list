import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
           <li className="list-group-item text-capitalize d-flex justify-content-between">
               <h6>{title}</h6>
               <div>
                   <span className="mx-2 text-success" onClick={handleEdit}>
                   <FontAwesomeIcon icon={faEdit} />
                   </span>
                   <span className="mx-2 text-danger" onClick={handleDelete}>
                   <FontAwesomeIcon icon={faTrash} />
                   </span>
               </div>
           </li>
        )
    }
}

export default TodoItem
