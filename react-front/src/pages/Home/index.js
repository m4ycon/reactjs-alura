import React, { Component } from 'react';

import Form from '../../components/Form';
import Header from '../../components/Header';
import PopUp from '../../components/PopUp';

import AuthorsTable from '../../components/AuthorsTable';
import api from '../../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    api.ListAuthors()
      .then(res =>
        this.setState({ authors: [...this.state.authors, ...res.data] })
      );
  }

  removeAuthor = async id => {

    const { authors } = this.state;

    await api.RemoveAuthor(id);

    this.setState({ authors: authors.filter((author) => id !== author.id) });

    PopUp.showMessage('error', 'Autor removido com sucesso!');


  }

  addAuthor = author => {

    api.CreateAuthor(JSON.stringify(author))
      .then(res => res.data)
      .then(author => {
        this.setState({ authors: [...this.state.authors, author] });
        PopUp.showMessage('success', 'Adicionado com sucesso!');
      });

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