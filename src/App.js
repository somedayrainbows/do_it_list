import React, { Component } from 'react';
import List from './components/List'
import Header from './components/Header'
import AddItem from './components/AddItem'
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
    this.setState({ list: this.state.list.map(listItem => {
      if(listItem.id === id) {
        listItem.completed = !listItem.completed
      }
      return listItem
    }) })
  }

  deleteItem = (id) => {
    this.setState({ list: [...this.state.list.filter(listItem => listItem.id !== id)]
    })
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <div clasName="container">
          <Header />
          <AddItem />
          <List list={this.state.list} toggleComplete={this.toggleComplete}
            deleteItem={this.deleteItem}
            />
        </div>
      </div>
    );
  }
}

export default App;
