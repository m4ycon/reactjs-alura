import React, { Component } from 'react';
document.getElementsByTagName('p')

class Formulario extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      book: '',
      price: ''
    }

    this.state = this.initialState;
  }

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    this.props.addAuthor(this.state);
    this.setState(this.initialState);
  }


  render() {

    const { name, book, price } = this.state;

    return (
      <form>

        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInput}
        />

        <label htmlFor="book">Livro</label>
        <input
          id="book"
          type="text"
          name="book"
          value={book}
          onChange={this.handleInput}
        />

        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="text"
          name="price"
          value={price}
          onChange={this.handleInput}
        />

        <button type="button" onClick={this.handleSubmit}>Salvar</button>
      </form>
    );
  }
}

export default Formulario;