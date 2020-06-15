const url = 'http://localhost:8000';

const ApiService = {
  ListAuthors: async () => await fetch(url + '/api/autor'),

  ListNames: async () => await fetch(url + '/api/autor/nome'),

  ListBooks: async () => await fetch(url + '/api/autor/livro'),

  CreateAuthor: async author => {
    return await fetch(url + '/api/autor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: author
    });
  },

  RemoveAuthor: async id => await fetch(url + `/api/autor/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  }),

  HandleErrors: res => {
    if (!res.ok) {
      throw Error(res.responseText);
    }
    return res.json();
  }

}

export default ApiService;