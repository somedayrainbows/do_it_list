import React, { Component } from 'react';
import List from './components/List'
import Header from './components/Header'
import AddItem from './components/AddItem'
import uuid from 'uuid'
import './App.css';

class App extends Component {
  state = {
    list: [
      {
        id: uuid.v4(),
        title: 'Buy groceries',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meal prep',
        completed: false
      },
      {
        id: uuid.v4(),
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

  addItem = (title) => {
    const newItem = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ list: [...this.state.list, newItem]
    })
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddItem addItem={this.addItem} />
          <List list={this.state.list} toggleComplete={this.toggleComplete}
            deleteItem={this.deleteItem}
            />
        </div>
      </div>
    );
  }
}

export default App;
