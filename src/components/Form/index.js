import React, { Component } from 'react';
import FormValidator from '../../Validation/FormValidator';
import PopUp from '../PopUp';

class Formulario extends Component {

  constructor(props) {
    super(props);

    this.FormValidator = new FormValidator([{
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'Insira um nome.'
    }, {
      field: 'book',
      method: 'isEmpty',
      validWhen: false,
      message: 'Insira um livro.'
    }, {
      field: 'price',
      method: 'isInt',
      args: [{ min: 0, max: 99999 }],
      validWhen: true,
      message: 'Insira um valor numérico.'
    }]);

    this.initialState = {
      name: '',
      book: '',
      price: '',
      validation: this.FormValidator.valid()
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

    const validation = this.FormValidator.validate(this.state);

    if (validation.isValid) {
      this.props.addAuthor(this.state);
      this.setState(this.initialState);
    } else {
      const { name, book, price } = validation;
      const fields = [name, book, price];
      const invalidFields = fields.filter(elem => elem.isInvalid);
      invalidFields.forEach(field => PopUp.showMessage('erro', field.message));

    }
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