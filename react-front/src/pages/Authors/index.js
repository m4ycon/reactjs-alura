import React, { Component } from 'react';

import Header from '../../components/Header';

import AuthorsTable from '../../components/AuthorsTable';
import api from '../../services/api';
import PopUp from '../../components/PopUp';

class Authors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: []
    };
  }

  componentDidMount() {
    api.ListNames()
      .then(res => {
        if (res.message === 'success') {
          PopUp.showMessage('success', 'Autores listados com sucesso');
          this.setState({ names: [...this.state.names, ...res.data] })
        }
      })
      .catch(err =>
        PopUp.showMessage('error', 'Erro na comunicação da API ao tentar listar os autores')
      )
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Autores</h1>
          <AuthorsTable
            authors={this.state.names}
            columns={['Autor']}
          />
        </div>
      </>
    );
  }
}

export default Authors;