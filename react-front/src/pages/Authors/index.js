import React, { Component } from 'react';

import Header from '../../components/Header';

import Table from '../../components/Table';
import api from '../../services/api';
import Toast from '../../components/Toast';

class Authors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      message: {
        open: false,
        text: '',
        severity: 'success'
      }
    };
  }

  componentDidMount() {
    api.ListNames()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ names: [...this.state.names, ...res.data] });
          this.setState({
            message: {
              open: true,
              text: 'Autores listados com sucesso',
              severity: 'success'
            }
          });
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

  render() {

    const titles = [
      { title: 'Autores', key: 'nome' },
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
          <h1>Autores</h1>
          <Table
            titles={titles}
            data={this.state.names}
          />
        </div>
      </>
    );
  }
}

export default Authors;