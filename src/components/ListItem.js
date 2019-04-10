import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class ListItem extends Component {
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
          <button style={buttonStyle} onClick={this.props.deleteItem.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

const buttonStyle = {
  background: '#ef5323',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default ListItem
