import React, { Component } from 'react';

class TodoFilter extends Component {
  handleFilter = (e) => {
    this.props.setVisibilityFilter(e.target.dataset.filter);
  }

  render() {
    return(
      !this.props.isEditing &&
      <div>
        <button onClick={(e) => this.handleFilter(e)} data-filter='SHOW_ALL'>All</button>
        <button onClick={(e) => this.handleFilter(e)} data-filter='SHOW_ACTIVE'>Active</button>
        <button onClick={(e) => this.handleFilter(e)} data-filter='SHOW_INACTIVE'>Inactive</button>
      </div>
    )
  }
}

export default TodoFilter;