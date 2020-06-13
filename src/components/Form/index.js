import React, { Component } from 'react';

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
        <div className="row">

          <div className="input-field col s4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={this.handleInput}
            />
          </div>

          <div className="input-field col s4">
            <input
              id="book"
              type="text"
              name="book"
              placeholder="Livro"
              value={book}
              onChange={this.handleInput}
            />
          </div>

          <div className="input-field col s4">
            <input
              id="price"
              type="text"
              name="price"
              placeholder="Preço"
              value={price}
              onChange={this.handleInput}
            />
          </div>

          <button
            type="button"
            onClick={this.handleSubmit}
            className="waves-effect waves-light indigo lighten-2 btn"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Formulario;