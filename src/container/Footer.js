import { connect } from 'react-redux';
import TodoFilter from '../components/TodoFilter';
import { setVisibilityFilter } from '../action/todosAction';

const mapStateToProps = state => ({
  isEditing: state.todos.isEditing
})

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);