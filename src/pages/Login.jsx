import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuthentication from '../hooks/useAuthentication';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [, login] = useAuthentication();

  const validationFields = (vEmail, vPassword) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^[^W_]{7}$/;
    if (regexEmail.test(vEmail) && regexPassword.test(vPassword)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  useEffect(() => {
    validationFields(email, password);
  }, [email, password]);

  return (
    <div className="col">
      <div className="row justify-content-center">
        <h1 className="display-4">Login</h1>
      </div>
      <form>
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
        <button
          type="submit"
          className="btn btn-success"
          disabled={isDisable}
          data-testid="login-submit-btn"
          onClick={() => login(email)} // erro, retorna só um objeto vazio!
        >
          Login
        </button>
      </form>
    </div>
  );
}
