import React from 'react';

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>Name:</label>
        <input type="text" /><br /><br />

        <label>Email:</label>
        <input type="email" /><br /><br />

        <label>Password:</label>
        <input type="password" /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
