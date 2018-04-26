import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelEdit } from '../action/todosAction';
import { updateTodo } from '../action/todosAction';

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
    console.log(e.target.value);
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
    const { isEditing, itemEdit } = this.props;
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

const mapStateToProps = state => ({
  isEditing: state.todos.isEditing,
  itemEdit: state.todos.itemEdit
})

const mapDispatchToProps = dispatch => {
  return {
    cancelEdit: () => {
      dispatch(cancelEdit())
    },
    updateTodo: (id, valueInput) => {
      dispatch(updateTodo(id, valueInput))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);
