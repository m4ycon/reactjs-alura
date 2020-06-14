import React, { Component } from 'react';

import Header from '../../components/Header';

import AuthorsTable from '../../components/AuthorsTable';
import simpleDB from '../../database/simpleDB';

class Authors extends Component {
  state = simpleDB;

  render() {

    return (
      <>
        <Header />
        <div className="container">
          <h1>Autores</h1>
          <AuthorsTable
            authors={this.state.authors}
            columns={['Autor']}
          />
        </div>
      </>
    );
  }
}

export default Authors;