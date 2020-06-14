import React, { Component } from 'react';

class TableHead extends Component {
  render() {

    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(column => <th key={column}>{column}</th>)}
        </tr>
      </thead>
    );
  }
}

class TableBody extends Component {

  render() {

    const { authors, removeAuthor, columns } = this.props;

    return (
      <tbody>
        {authors.map((author, index) => (
          <tr key={index}>
            {columns.includes('Autor') && <td>{author.name}</td>}
            {columns.includes('Livro') && <td>{author.book}</td>}
            {columns.includes('Preço') && <td>{author.price}</td>}
            {columns.includes('Remover')
              && <td>
                <button
                  onClick={() => removeAuthor(index)}
                  className="waves-effect waves-light indigo lighten-2 btn"
                >Remover</button>
              </td>
            }
          </tr>
        ))}
      </tbody>
    );
  }
}

class Table extends Component {

  render() {

    const { authors, removeAuthor, columns } = this.props;

    return (
      <table className="highlight centered">
        <TableHead columns={columns} />
        <TableBody columns={columns} authors={authors} removeAuthor={removeAuthor} />
      </table>
    );
  }
}

export default Table;