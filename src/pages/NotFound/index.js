import React, { Component } from 'react';

import Header from '../../components/Header';

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Página não encontrada.</h1>
      </>
    );
  }
}

export default NotFound;