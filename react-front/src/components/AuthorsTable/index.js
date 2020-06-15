import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';

class MainTable extends Component {

  render() {

    const { authors, removeAuthor } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Autor</TableCell>
            <TableCell>Livro</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map(author =>
            <TableRow key={author.id}>
              <TableCell>{author.nome}</TableCell>
              <TableCell>{author.livro}</TableCell>
              <TableCell>{author.preco}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => removeAuthor(author.id)}
                >Remover</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default MainTable;