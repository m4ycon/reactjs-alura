import React, { Component } from 'react';

import Header from '../../components/Header';

import Table from '../../components/Table';
import api from '../../services/api';
import Toast from '../../components/Toast';


class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      message: {
        open: false,
        text: '',
        severity: 'success'
      }
    };
  }

  componentDidMount() {
    api.ListBooks()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ books: [...this.state.books, ...res.data] });
          this.setState({
            message: {
              open: true,
              text: 'Livros listados com sucesso',
              severity: 'success'
            }
          });
        }
      })
      .catch(err =>
        this.setState({
          message: {
            open: true,
            text: 'Erro na comunicação da API ao tentar listar os livros',
            severity: 'error'
          }
        })
      );

  }

  render() {

    const titles = [
      { title: 'Livros', key: 'livro' }
    ];

    return (
      <>
        <Toast
          handleClose={() => this.setState({ message: { open: false } })}
          open={this.state.message.open}
          severity={this.state.message.severity}
        >
          {this.state.message.text}
        </Toast>

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