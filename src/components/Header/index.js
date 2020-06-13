import React, { Component } from 'react';

class Header extends Component {


  render() {

    return (
      <nav>
        <div className="nav-wrapper indigo lighten-2">
          <a href="/" className="brand-logo">Casa do código</a>
          <ul className="right">
            <li><a href="/authors">Autores</a></li>
            <li><a href="/books">Livros</a></li>
            <li><a href="/about">Sobre</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;