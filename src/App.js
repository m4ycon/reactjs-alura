import React, { Component } from 'react';
import './App.css';

import Table from './components/Table';
import Form from './components/Form';

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

  addAuthor = author => {
    this.setState({
      authors: [
        ...this.state.authors, author
      ]
    });
  }

  render() {
    return (
      <>
        <Table
          authors={this.state.authors}
          removeAuthor={this.removeAuthor}
        />
        <Form addAuthor={this.addAuthor} />
      </>
    );
  }
}

export default App;
