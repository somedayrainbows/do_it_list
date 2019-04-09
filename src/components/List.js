import React, { Component } from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types'

class List extends Component {
  render() {
    return this.props.list.map((listItem) => (
      <ListItem key={listItem.id} listItem={listItem} markComplete={this.props.markComplete}/>
    ))
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired
}

export default List;
