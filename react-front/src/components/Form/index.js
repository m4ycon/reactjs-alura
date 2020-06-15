import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import FormValidator from '../../utils/FormValidator';
import PopUp from '../PopUp';

class Formulario extends Component {

  constructor(props) {
    super(props);

    this.FormValidator = new FormValidator([{
      field: 'nome',
      method: 'isEmpty',
      validWhen: false,
      message: 'Insira um nome.'
    }, {
      field: 'livro',
      method: 'isEmpty',
      validWhen: false,
      message: 'Insira um livro.'
    }, {
      field: 'preco',
      method: 'isInt',
      args: [{ min: 0, max: 99999 }],
      validWhen: true,
      message: 'Insira um valor numérico.'
    }]);

    this.initialState = {
      nome: '',
      livro: '',
      preco: '',
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

    const { nome, livro, preco } = this.state;

    return (
      <form>
        <Grid container spacing={2} alignItems="center">

          <Grid item>
            <TextField
              id="name"
              name="nome"
              label="Nome"
              variant="outlined"
              value={nome}
              onChange={this.handleInput}
            />
          </Grid>

          <Grid item>
            <TextField
              id="book"
              name="livro"
              label="Livro"
              variant="outlined"
              value={livro}
              onChange={this.handleInput}
            />
          </Grid>

          <Grid item>
            <TextField
              id="price"
              name="preco"
              label="Preço"
              variant="outlined"
              value={preco}
              onChange={this.handleInput}
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={this.handleSubmit}
            >Salvar</Button>
          </Grid>

        </Grid>
      </form>
    );
  }
}

export default Formulario;