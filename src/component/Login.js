
import React, { useState } from 'react';
import '../App.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Login data:', formData);
  };

  return (
    <section id="registration" className="registration">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

      </form>
      <a href="/About" className="btn">Log in</a>

    </section>
  );
};

export default Login;
