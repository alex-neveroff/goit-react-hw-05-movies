import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

const Button = ({ onClick, name }) => {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      {name}
    </LoadMoreButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
