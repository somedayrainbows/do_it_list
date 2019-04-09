import React, { Component } from 'react'


class AddItem extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type="text" name="title" placeholder="Add something to the list" style={{ flex: 10 }} value={this.state.title} onChange={this.onChange}
        />
        <input type="submit" value="save item" className="btn" style={{ flex: 1 }}
        />
      </form>
    )
  }
}

export default AddItem
