import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import List from './components/List'
import Header from './components/Header'
import AddItem from './components/AddItem'
import About from './components/pages/About'
import axios from 'axios'
// import uuid from 'uuid'
import './App.css';

class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    //pulls in the existing items from the api
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ list: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ list: [...this.state.list.filter(listItem => listItem.id !== id)]
      })
    )
  }

  addItem = (title) => {
    // mimics the post/request to/from an API but doesn't really save to the test server
    axios.post('https://jsonplaceholder.typicode.com/todos', { title, complete: false }) //returns a promise
      .then(res =>
        this.setState({ list: [...this.state.list, res.data]})
      )
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
