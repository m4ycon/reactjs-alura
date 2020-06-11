import React from 'react';


const TableHead = () => {
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

const TableBody = props => {

  const { authors } = props;

  return (
    <tbody>
      {authors.map((author, i) => (
        <tr key={i}>
          <td>{author.name}</td>
          <td>{author.book}</td>
          <td>{author.price}</td>
          <td><button>Remover</button></td>
        </tr>
      ))}
    </tbody>
  );
}


const Table = props => {

  const { authors } = props;

  return (
    <table>
      <TableHead />
      <TableBody authors={authors} />
    </table>
  );
}

export default Table;