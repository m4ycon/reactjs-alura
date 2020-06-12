import React, { Component } from 'react';

class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
      </thead>
    );
  }
}

class TableBody extends Component {

  render() {

    const { authors, removeAuthor } = this.props;

    return (
      <tbody>
        {authors.map((author, index) => (
          <tr key={index}>
            <td>{author.name}</td>
            <td>{author.book}</td>
            <td>{author.price}</td>
            <td><button onClick={() => removeAuthor(index)}>Remover</button></td>
          </tr>
        ))}
      </tbody>
    );
  }
}

class Table extends Component {

  render() {

    const { authors, removeAuthor } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody authors={authors} removeAuthor={removeAuthor} />
      </table>
    );
  }
}

export default Table;