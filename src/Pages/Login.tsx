import React, { useState } from 'react';
import logo from '../Images/logo.svg';
import loginHero from '../Images/login_hero.webp';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPass, setShowPass] = useState<boolean>(false);
  return (
    <main className="main">
      <section className="login-container">
        <div className="banner">
          <figure className='logo-container'>
            <img src={logo} alt="lendsqr logo" className="logo" />
          </figure>
          <figure className="hero-container">
            <img src={loginHero} alt="Login banner img" className="login__hero" />
          </figure>
        </div>
        <section className="login-form">
          <div className="login-form__header">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <form className="login-form__form">
            <input className='login-form__form--input' type="text" {...register('email')} placeholder='Email' />
            <div className="pass">
              <input type={showPass ? "text" : "password"} {...register('password')} placeholder='Password' />
              <span onClick={() => setShowPass(!showPass)}>{showPass ? "hide" : "show"}</span>
            </div>
            <Link to='#'><span>forgot password?</span></Link>
            <button type="submit">log in</button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Login;