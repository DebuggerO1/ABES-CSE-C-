import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" /><br /><br />

        <label>Password:</label>
        <input type="password" /><br /><br />

       <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
