import React, { Component } from 'react';

import Form from '../../components/Form';
import Header from '../../components/Header';
import PopUp from '../../components/PopUp';

import Table from '../../components/Table';
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
      .then(res => {
        if (res.message === 'success') {
          this.setState({ authors: [...this.state.authors, ...res.data] })
        }
      })
      .catch(err =>
        PopUp.showMessage('error', 'Erro na comunicação da API ao tentar listar os autores')
      );
  }

  removeAuthor = async id => {

    const { authors } = this.state;

    const updatedAuthors = authors.filter(author => author.id !== id);

    await api.RemoveAuthor(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ authors: [...updatedAuthors] });
          PopUp.showMessage('error', 'Autor removido com sucesso!');
        }
      })
      .catch(err =>
        PopUp.showMessage('error', 'Erro na comunicação da API ao tentar remover o autor')
      );

  }

  addAuthor = author => {

    api.CreateAuthor(JSON.stringify(author))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ authors: [...this.state.authors, res.data] });
          PopUp.showMessage('success', 'Adicionado com sucesso!');
        }
      })
      .catch(err =>
        PopUp.showMessage('error', 'Erro na comunicação da API ao tentar adicionar o autor')
      );

  }

  render() {
    const titles = [
      { title: 'Autores', key: 'nome' },
      { title: 'Livros', key: 'livro' },
      { title: 'Preços', key: 'preco' }
    ];

    const data = this.state.authors;

    return (
      <>
        <Header />
        <div className="container">
          <h1>Casa do Código</h1>
          <Table
            titles={titles}
            data={data}
            cellDelete={this.removeAuthor}
          />
          <Form addAuthor={this.addAuthor} />
        </div>
      </>
    );
  }
}

export default Home;