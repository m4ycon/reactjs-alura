import React, { Component } from 'react';

import Header from '../../components/Header';

import AuthorsTable from '../../components/AuthorsTable';
import simpleDB from '../../database/simpleDB';

class Books extends Component {

  state = simpleDB;

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Livros</h1>
          <AuthorsTable
            authors={this.state.authors}
            columns={['Livro']}
          />
        </div>
      </>
    );
  }
}

export default Books;