import React, { Component } from 'react';
import LinkWrapper from '../../wrappers/LinkWrapper';

class Header extends Component {

  render() {

    return (
      <nav>
        <div className="nav-wrapper indigo lighten-2">
          <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Casa do código</LinkWrapper>
          <ul className="right">
            <li><LinkWrapper to="/authors">Autores</LinkWrapper></li>
            <li><LinkWrapper to="/books">Livros</LinkWrapper></li>
            <li><LinkWrapper to="/about">Sobre</LinkWrapper></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;