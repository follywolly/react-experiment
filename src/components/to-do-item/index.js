import React from 'react'
import './to-do-item.scss'

class ToDoItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }

    this.input = React.createRef()

    this.switchEditing = this.switchEditing.bind(this)
    this.editToDoItem = this.editToDoItem.bind(this)
    this.deleteToDoItem = this.deleteToDoItem.bind(this)
  }

  switchEditing() {
    this.setState({
      editing: !this.state.editing
    })
  }

  editToDoItem(e) {
    e.preventDefault()
    this.props.onEdit(this.props.index, this.input.current.value)
    this.setState({editing: false})
  }

  deleteToDoItem() {
    console.log('called in item')
    this.props.onDelete(this.props.index)
  }

  render(){
    return(
      <li className="to-do-item">
        <span className="to-do-item__text-prefix">{this.props.index + 1}.</span>
        {!this.state.editing ? (
            <h3 className="to-do-item__text">{this.props.value}</h3>
          ) : (
            <form className="form form--inline to-do-item__form" onSubmit={this.editToDoItem}>
              <input className="form__input" type="text" defaultValue={this.props.value} ref={this.input} />
              <input className="form__submit btn" type="submit" value="Save" />
            </form>
          )
        }
        <button className="to-do-item__button to-do-item__button--edit btn" onClick={this.switchEditing}>{!this.state.editing ? 'Edit' : 'Discard'}</button>
        <button className="to-do-item__button to-do-item__button--delete btn btn--inverted" onClick={this.deleteToDoItem}>Delete</button>
      </li>
    )
  }
}

export default ToDoItem