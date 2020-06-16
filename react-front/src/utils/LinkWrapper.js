import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
  return (
    <NavLink activeStyle={{ fontWeight: "bold", textShadow: '0 0 3px #fff' }} {...props} />
  );
}

export default LinkWrapper;