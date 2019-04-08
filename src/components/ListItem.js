import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    let item = this.props.listItem
    return (
      <div>
      <p key={item.id}>{item.title}</p>
      </div>
    )
  }
}

export default ListItem
