import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import './Error.css';

const buttonStyling = {
  fontSize: '1.5rem',
  color: '#3265A7',
  fontWeight: 'bolder',
};

function Error(props) {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center main_error">
      <h1 className="error_header">404</h1>
      <p className="error_para">
        Sorry, the page you searched for can't be found !
      </p>
      <NavLink to="/home">
        <Button
          style={buttonStyling}
          className="p-3"
          variant="outlined"
          size="large"
        >
          GO TO HOME PAGE
        </Button>
      </NavLink>
    </div>
  );
}

export default Error;
