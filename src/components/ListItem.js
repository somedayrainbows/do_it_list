import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListItem extends Component {
  applyStyle = () => {
    return {
      textDecoration: this.props.listItem.completed ? 'line-through' : 'none',
      background: '#388b8d',
      borderBottom: '1px #fff dotted',
      padding: '10px',
      color: '#fff'
    }
  }

  render() {
    const { id, title } = this.props.listItem

    return (
      <div style={this.applyStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/> {' '}
          {title}
        </p>
      </div>
    )
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired
}

export default ListItem
