import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';

const DeleteCell = ({ removeData, id, title }) => {
  if (!removeData) {
    return null;
  };
  if (title) {
    return <TableCell>Remover</TableCell>;
  };
  return (
    <TableCell>
      <Button
        variant="contained"
        color="primary"
        onClick={() => removeData(id)}
      >Remover</Button>
    </TableCell>
  );
}

const MainTable = props => {

  const { titles, data, cellDelete } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {titles.map(title =>
            <TableCell key={title.title}>
              {title.title}
            </TableCell>
          )}
          <DeleteCell removeData={cellDelete} title />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(line =>
          <TableRow key={line.id}>
            {titles.map(title =>
              <TableCell key={`${line.id}-${title.key}`}>
                {line[title.key]}
              </TableCell>
            )}
            <DeleteCell id={line.id} removeData={cellDelete} />
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}


export default MainTable;