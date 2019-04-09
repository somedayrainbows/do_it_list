import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListItem extends Component {
  render() {
    let item = this.props.listItem
    const itemStyle = {
      backgroundColor: '#ef5323'
    }

    return (
      <div style={itemStyle}>
      <p key={item.id}>{item.title}</p>
      </div>
    )
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired
}

export default ListItem
