import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Table from './components/Table';
import Form from './components/Form';
import Header from './components/Header';
import PopUp from './components/PopUp';

class App extends Component {
  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'React',
        price: '1000'
      },
      {
        name: 'Daniel',
        book: 'Java',
        price: '99'
      },
      {
        name: 'Marcos',
        book: 'Design',
        price: '150'
      },
      {
        name: 'Bruno',
        book: 'DevOps',
        price: '100'
      }
    ]
  };

  removeAuthor = id => {

    const { authors } = this.state;

    this.setState({ authors: authors.filter((author, index) => id !== index) });
    PopUp.showMessage('error', 'Autor removido com sucesso!')

  }

  addAuthor = author => {
    this.setState({ authors: [...this.state.authors, author] });
    PopUp.showMessage('success', 'Adicionado com sucesso!');
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Table
            authors={this.state.authors}
            removeAuthor={this.removeAuthor}
          />
          <Form addAuthor={this.addAuthor} />
        </div>
      </>
    );
  }
}

export default App;
