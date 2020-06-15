const url = 'http://localhost:8000';

const ApiService = {
  ListAuthors: async () => await fetch(url + '/api/autor')
    .then(res => ApiService.HandleErrors(res))
    .then(res => res.json()),

  ListNames: async () => await fetch(url + '/api/autor/nome')
    .then(res => ApiService.HandleErrors(res))
    .then(res => res.json()),

  ListBooks: async () => await fetch(url + '/api/autor/livro')
    .then(res => ApiService.HandleErrors(res))
    .then(res => res.json()),

  CreateAuthor: async author => await fetch(url + '/api/autor', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: author
  })
    .then(res => ApiService.HandleErrors(res))
    .then(res => res.json()),

  RemoveAuthor: async id => await fetch(url + `/api/autor/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  })
    .then(res => ApiService.HandleErrors(res))
    .then(res => res.json()),

  HandleErrors: res => {
    if (!res.ok) {
      throw Error(res.responseText);
    }
    return res;
  }

}

export default ApiService;