const url = 'http://localhost:8000';

const ApiService = {
  ListAuthors: async () => {
    const res = await fetch(url + '/api/autor');
    const res1 = await res.json();
    return res1;
  },

  CreateAuthor: async author => {
    const res = await fetch(url + '/api/autor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: author
    });
    return await res.json();
  },

  ListNames: async () => {
    const res = await fetch(url + '/api/autor/nome');
    const res1 = await res.json();
    return res1;
  },

  ListBooks: async () => {
    const res = await fetch(url + '/api/autor/livro');
    const res1 = await res.json();
    return res1;
  },

  RemoveAuthor: async id => {
    const res = await fetch(url + `/api/autor/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    });
    const res1 = await res.json();
    return res1;
  }

}

export default ApiService;