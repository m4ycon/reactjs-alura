import React, { Component } from 'react';

import Header from '../../components/Header';

import AuthorsTable from '../../components/AuthorsTable';
import api from '../../services/api';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: []
    };
  }

  componentDidMount() {
    api.ListBooks()
      .then(res => res.data)
      .then(authors => this.setState({
        authors: [...this.state.authors, ...authors]
      }));

  }

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