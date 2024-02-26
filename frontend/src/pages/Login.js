import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
