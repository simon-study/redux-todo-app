import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../action/todosAction';

class TodoFilter extends Component {
  handleFilter = (e) => {
    this.props.setVisibilityFilter(e.target.dataset.filter);
  }

  render() {
    return(
      <div>
        <button onClick={(e) => this.handleFilter(e)} data-filter='SHOW_ALL'>All</button>
        <button onClick={(e) => this.handleFilter(e)} data-filter='SHOW_ACTIVE'>Active</button>
        <button onClick={(e) => this.handleFilter(e)} data-filter='SHOW_INACTIVE'>Inactive</button>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
  
// })

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoFilter);