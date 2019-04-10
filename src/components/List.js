import React, { Component } from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types'

export class List extends Component {
  render() {
    return this.props.list.map((listItem) => (
      <ListItem key={listItem.id} listItem={listItem} toggleComplete={this.props.toggleComplete}
      deleteItem={this.props.deleteItem}
      />
    ))
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default List;
