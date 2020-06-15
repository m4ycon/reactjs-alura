import React, { Component } from 'react';

import Header from '../../components/Header';

import Table from '../../components/Table';
import api from '../../services/api';
import PopUp from '../../components/PopUp';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    api.ListBooks()
      .then(res => {
        if (res.message === 'success') {
          PopUp.showMessage('success', 'Livros listados com sucesso');
          this.setState({ books: [...this.state.books, ...res.data] });
        }
      })
      .catch(err =>
        PopUp.showMessage('error', 'Erro na comunicação da API ao tentar listar os livros')
      );

  }

  render() {

    const titles = [
      { title: 'Livros', key: 'livro' }
    ];

    return (
      <>
        <Header />
        <div className="container">
          <h1>Livros</h1>
          <Table
            titles={titles}
            data={this.state.books}
          />
        </div>
      </>
    );
  }
}

export default Books;