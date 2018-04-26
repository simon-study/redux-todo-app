import TodoEdit from '../components/TodoEdit';
import { connect } from 'react-redux';
import { cancelEdit } from '../action/todosAction';
import { updateTodo } from '../action/todosAction';

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit)