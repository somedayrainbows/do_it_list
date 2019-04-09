import React, { Component } from 'react'


class AddItem extends Component {
  state = {
    title: ''
  }
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input type="text" name="title" placeholder="Add something to the list" style={{ flex: 10 }} onChange={this.onChange}
        />
        <input type="submit" value="save item" className="btn" style={{ flex: 1 }}
        />
      </form>
    )
  }
}

export default AddItem
