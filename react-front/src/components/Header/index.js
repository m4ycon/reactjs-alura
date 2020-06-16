import React from 'react';
import {
  AppBar,
  Button,
  ButtonGroup,
  Typography
} from '@material-ui/core';

import LinkWrapper from '../../utils/LinkWrapper';

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '7px 25px'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

const Header = () => {

  return (
    <nav>
      <AppBar style={headerStyle} position="static" color="primary" >
        <LinkWrapper style={linkStyle} to="/" className="brand-logo" activeStyle={{}}>
          <Typography variant="h4">Casa do código</Typography>
        </LinkWrapper>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button variant="contained" color="primary">
            <LinkWrapper style={linkStyle} to="/authors">Autores</LinkWrapper>
          </Button>
          <Button variant="contained" color="primary">
            <LinkWrapper style={linkStyle} to="/books">Livros</LinkWrapper>
          </Button>
          <Button variant="contained" color="primary">
            <LinkWrapper style={linkStyle} to="/about">Sobre</LinkWrapper>
          </Button>
        </ButtonGroup>
      </AppBar>
    </nav>
  );

}

export default Header;