import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationFields = (e, vEmail, vPassword) => {
    e.preventDefault();
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^[^W_]{6}$/;
    if (regexEmail.test(vEmail) && regexPassword.test(vPassword)) {
      // enviar para o context
    } else {
      alert('credenciais inválidas');
    }
  };

  return (
    <div className="col">
      <div className="row justify-content-center">
        <h1 className="display-4">Login</h1>
      </div>
      <form onSubmit={(e) => validationFields(e, email, password)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />
          <small id="emailHelp" className="form-text text-muted">
            Never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />
          <small id="passwordHelp" className="form-text text-muted">
            Must have 6 characters.
          </small>
        </div>
        <button type="submit" className="btn btn-success" disabled={!email || !password} data-testid="login-submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}
