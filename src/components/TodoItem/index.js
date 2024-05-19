// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    updatedTodo: '',
    edit: false,
  }

  onEdit = () => {
    const {todoItem} = this.props
    this.setState({
      updatedTodo: todoItem.title,
      edit: true,
    })
  }

  onSave = () => {
    const {todoItem, updateTodoTitle} = this.props
    const {updatedTodo} = this.state
    this.setState({
      edit: false,
    })

    if (updateTodoTitle) {
      updateTodoTitle(todoItem.id, updatedTodo)
    }
  }

  onChangeEvent = event => {
    this.setState({
      updatedTodo: event.target.value,
    })
  }

  render() {
    const {todoItem, deleteTodo, onTodoStrikeMark} = this.props
    const {title, completed} = todoItem
    const {updatedTodo, edit} = this.state

    return (
      <li
        className={todoItem.completed ? 'todo-items completed' : 'todo-items'}
      >
        {edit ? (
          <>
            <input
              className="save-container"
              type="text"
              value={updatedTodo}
              onChange={this.onChangeEvent}
            />
            <button className="edit-button" onClick={this.onSave} type="button">
              Save
            </button>
          </>
        ) : (
          <>
            <input
              className="edit-container"
              type="checkbox"
              checked={completed}
              onChange={() => onTodoStrikeMark(todoItem.id)}
            />
            <p className="title-name">{title}</p>
            <button className="edit-button" onClick={this.onEdit} type="button">
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todoItem.id)}
              type="button"
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
