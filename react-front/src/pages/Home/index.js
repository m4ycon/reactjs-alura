import React, { Component } from 'react';

import Form from '../../components/Form';
import Header from '../../components/Header';
import Toast from '../../components/Toast';

import Table from '../../components/Table';
import api from '../../services/api';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      message: {
        open: false,
        text: '',
        severity: 'success'
      }
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
        this.setState({
          message: {
            open: true,
            text: 'Erro na comunicação da API ao tentar listar os autores',
            severity: 'error'
          }
        })
      );
  }

  removeAuthor = async id => {

    const { authors } = this.state;

    const updatedAuthors = authors.filter(author => author.id !== id);

    await api.RemoveAuthor(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ authors: [...updatedAuthors] });
          this.setState({
            message: {
              open: true,
              text: 'Autor removido com sucesso!',
              severity: 'error'
            }
          });
        }
      })
      .catch(err =>
        this.setState({
          message: {
            open: true,
            text: 'Erro na comunicação da API ao tentar remover o autor',
            severity: 'error'
          }
        })
      );

  }

  addAuthor = author => {

    api.CreateAuthor(JSON.stringify(author))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ authors: [...this.state.authors, res.data] });
          this.setState({
            message: {
              open: true,
              text: 'Adicionado com sucesso!',
              severity: 'success'
            }
          });
        }
      })
      .catch(err =>
        this.setState({
          message: {
            open: true,
            text: 'Erro na comunicação da API ao tentar adicionar o autor',
            severity: 'error'
          }
        })
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
        <Toast
          handleClose={() => this.setState({ message: { open: false } })}
          open={this.state.message.open}
          severity={this.state.message.severity}
        >
          {this.state.message.text}
        </Toast>

        <Header />

        <div className="container">
          <h1>Casa do Código</h1>
          <Form addAuthor={this.addAuthor} />
          <Table
            titles={titles}
            data={data}
            cellDelete={this.removeAuthor}
          />
        </div>
      </>
    );
  }
}

export default Home;