const baseURL = 'http://localhost:8000/api/autor/';

const apiConsume = async (resource = "", method = "GET", body) =>
  await fetch(baseURL + resource, {
    method,
    headers: { 'content-type': 'application/json' },
    body
  })
    .then(res => ApiService.HandleErrors(res))
    .then(res => res.json());

const ApiService = {
  ListAuthors: () => apiConsume(),
  ListNames: () => apiConsume("nome"),
  ListBooks: () => apiConsume("livro"),
  CreateAuthor: author => apiConsume("", "POST", author),
  RemoveAuthor: id => apiConsume(id, "DELETE"),

  HandleErrors: res => {
    if (!res.ok) {
      throw Error(res.responseText);
    }
    return res;
  }

}

export default ApiService;