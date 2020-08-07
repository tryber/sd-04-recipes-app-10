import React, { useState } from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useAuthentication from '../hooks/useAuthentication';
import logo from '../images/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [user, login] = useAuthentication();

  const validationFields = (vEmail, vPassword) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^[^W_]{7,100}$/;
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
    <div className="row align-items-center vh-100">
      {user.email && <Redirect to="/comidas" />}
      <div className="col">
        <div className="row justify-content-center">
          <img src={logo} width="100%" alt="Recipes App" />
          {/* <h1 className="mb-4">Recipes App</h1> */}
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
            className="btn btn-success btn-block"
            disabled={isDisable}
            data-testid="login-submit-btn"
            onClick={() => login(email)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
