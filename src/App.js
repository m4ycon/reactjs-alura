import React, { Component } from 'react';
import './App.css';

import Table from './components/Table';

class App extends Component {
  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'React',
        price: '1000'
      },
      {
        name: 'Daniel',
        book: 'Java',
        price: '99'
      },
      {
        name: 'Marcos',
        book: 'Design',
        price: '150'
      },
      {
        name: 'Bruno',
        book: 'DevOps',
        price: '100'
      }
    ]
  };

  removeAuthor = id => {

    const { authors } = this.state;

    this.setState({
      authors: authors.filter((author, index) => id !== index),
    });

  }

  render() {
    return (
      <div className="App">
        <Table authors={this.state.authors} removeAuthor={this.removeAuthor} />

      </div>
    );
  }
}

export default App;
