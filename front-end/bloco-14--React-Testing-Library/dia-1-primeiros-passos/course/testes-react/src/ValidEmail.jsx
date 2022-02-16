// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, isEmailSend } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {isEmailSend && <h3 data-testid="verify">{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;