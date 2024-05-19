import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodo: '',
    newTodoNumber: 1,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const deleteTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: deleteTodosList,
    })
  }

  onAddTodo = () => {
    const {newTodo, newTodoNumber} = this.state
    const newTodos = Array.from({length: newTodoNumber}, (_, i) => ({
      id: Date.now() + i,
      title: newTodo,
      completed: false,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodo: '',
      newTodoNumber: 1,
    }))
  }

  onChangeEvent = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onTodoStrikeMark = id => {
    const {todosList} = this.state
    const updateTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({
      todosList: updateTodoList,
    })
  }

  updateTodoTitle = (id, updatedTitle) => {
    const {todosList} = this.state
    const updatedTodosList = todosList.map(todo =>
      todo.id === id ? {...todo, title: updatedTitle} : todo,
    )
    this.setState({
      todosList: updatedTodosList,
    })
  }

  render() {
    const {todosList, newTodo, newTodoNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-container">
            <input
              className="title-text"
              placeholder="Enter todo title"
              type="text"
              name="newTodo"
              value={newTodo}
              onChange={this.onChangeEvent}
            />
            <input
              className="number-text"
              placeholder="Enter number of todos"
              type="number"
              name="newTodoNumber"
              value={newTodoNumber}
              onChange={this.onChangeEvent}
            />
            <button
              className="add-button"
              type="button"
              onClick={this.onAddTodo}
            >
              Add
            </button>
          </div>
          <ul className="to-do-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                deleteTodo={this.deleteTodo}
                key={eachTodo.id}
                onTodoStrikeMark={this.onTodoStrikeMark}
                updateTodoTitle={this.updateTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
