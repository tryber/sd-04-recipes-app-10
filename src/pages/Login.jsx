import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  const validationFields = (vEmail, vPassword) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^[^W_]{7}$/;
    if (regexEmail.test(vEmail) && regexPassword.test(vPassword)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  const sendLocalStorage = () => {
    localStorage.setItem('mealsToken', JSON.stringify(1)); // alterar para os dados
    localStorage.setItem('cocktailsToken', JSON.stringify(1)); // alterar para os dados
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  useEffect(() => {
    validationFields(email, password);
    console.log(isDisable);
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
          onClick={() => sendLocalStorage()}
        >
          Login
        </button>
      </form>
    </div>
  );
}
