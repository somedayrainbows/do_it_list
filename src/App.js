import React, { Component } from 'react';
import List from './components/List'
import './App.css';

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        title: 'Buy groceries',
        completed: false
      },
      {
        id: 2,
        title: 'Meal prep',
        completed: false
      },
      {
        id: 3,
        title: 'Exercise',
        completed: false
      },
    ]
  }

  toggleComplete = (id) => {
    // this.props.listItem.completed = true
    console.log(id)
    this.setState({ list: this.state.list.map(listItem => {
      if(listItem.id === id) {
        listItem.completed = !listItem.completed
      }
      return listItem
    }) })
  }

  render() {
    console.log(this.state.list)
    return (
      <div>
        <List list={this.state.list} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
