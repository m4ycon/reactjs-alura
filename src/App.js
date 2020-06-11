import React from 'react';
import './App.css';

import Table from './components/Table';

function App() {

  const authors = [
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
  ];

  return (
    <div className="App">
      <Table authors={authors} />

    </div>
  );
}

export default App;
