import React, { Component } from 'react';

import Form from '../../components/Form';
import Header from '../../components/Header';
import PopUp from '../../components/PopUp';

import AuthorsTable from '../../components/DataTable';
import simpleDB from '../../database/simpleDB';

class Home extends Component {
  state = simpleDB;

  removeAuthor = id => {

    const { authors } = this.state;

    this.setState({ authors: authors.filter((author, index) => id !== index) });
    PopUp.showMessage('error', 'Autor removido com sucesso!')

  }

  addAuthor = author => {
    this.setState({ authors: [...this.state.authors, author] });
    PopUp.showMessage('success', 'Adicionado com sucesso!');
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Casa do Código</h1>
          <AuthorsTable
            authors={this.state.authors}
            removeAuthor={this.removeAuthor}
            columns={['Autor', 'Livro', 'Preço', 'Remover']}
          />
          <Form addAuthor={this.addAuthor} />
        </div>
      </>
    );
  }
}

export default Home;