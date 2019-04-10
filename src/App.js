import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import List from './components/List'
import Header from './components/Header'
import AddItem from './components/AddItem'
import About from './components/pages/About'

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
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddItem addItem={this.addItem} />
                <List list={this.state.list} toggleComplete={this.toggleComplete}
                deleteItem={this.deleteItem}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
