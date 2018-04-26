import React, { Component } from 'react';

class TodoEdit extends Component {
  constructor (props){
    super(props);
    this.state = {
      id: '',
      valueInput:''
    }
  }

  cancelEdit = () => {
    this.props.cancelEdit()
  }

  handleChange = (e) => {
    this.setState({
      valueInput: e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.itemEdit.id,
      valueInput: nextProps.itemEdit.text
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, valueInput } = this.state;
    this.props.updateTodo(id, valueInput);
  }

  render () {
    const { isEditing } = this.props;
    return (
      isEditing && 
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type='text' value={this.state.valueInput} onChange={(e) => this.handleChange(e)}/>
        <button type='submit'>Update</button>
        <button type='reset' onClick={() => this.cancelEdit()}>Cancel</button>
      </form>
    )
  }
}

export default TodoEdit;
