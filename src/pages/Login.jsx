import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationFields = (e, email, password) => {
    e.preventDefault();
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^[^W_]{6}$/;
    if (regexEmail.test(email) && regexPassword.test(password)) {
      //enviar para o context 
    } else {
      alert('credenciais inválidas');
    }
  };

  return (
    <div className="col">
      <div className="row justify-content-center">
        <h1 className="display-4">Login</h1>
      </div>
      <form
        onSubmit={(e) => validationFields(e, email, password)}
      >
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
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
          />
          <small id="passwordHelp" className="form-text text-muted">
            Must have 6 characters.
          </small>
        </div>
        <button type="submit" className="btn btn-success" disabled={!email || !password}>
          Login
        </button>
      </form>
    </div>
  );
}
