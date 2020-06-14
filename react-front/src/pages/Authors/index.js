import React, { Component } from 'react';

import Header from '../../components/Header';

import AuthorsTable from '../../components/AuthorsTable';
import api from '../../services/api';

class Authors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: []
    };
  }

  componentDidMount() {
    api.ListNames()
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