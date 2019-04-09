import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListItem extends Component {
  applyStyle = () => {
    return {
      textDecoration: this.props.listItem.completed ? 'line-through' : 'none',
      background: '#388b8d'
    }
  }

  render() {
    let item = this.props.listItem

    return (
      <div style={this.applyStyle()}>
        <p>{item.title}</p>
      </div>
    )
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired
}

export default ListItem
