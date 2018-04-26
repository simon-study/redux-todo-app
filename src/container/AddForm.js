import TodoForm from '../components/TodoForm';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isEditing: state.todos.isEditing
})
  
export default connect(mapStateToProps)(TodoForm);