import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import loginHero from '../Images/login_hero.webp';
import logo from '../Images/logo.svg';
import { userInterface } from '../Utils/interfaces';
import { getFromLocal, setLocal } from '../Utils/localStorage';

interface loginInterface {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<loginInterface>();
  const errRef = useRef<HTMLParagraphElement>(null);
  const [errMsg, setErrMsg] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);

  const onSubmit: SubmitHandler<loginInterface> = data => {
    const users = getFromLocal("LendsqrUsers");
    const isUser = users.find((user: userInterface) => user.email === data.email);
    if (isUser) {
      setLocal("currentUser", isUser);
      reset();
      navigate('dashboard');
    } else {
      setErrMsg("User not found");
      setTimeout(() => setErrMsg(""), 3000);
      errRef.current?.focus();
    }
  };

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
          <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
            <p ref={errRef} className={errMsg ? "onscreen" : "offscreen"} aria-live='assertive'>{errMsg}</p>
            <div className="input-container">
              <input
                className={`login-form__form--input ${errors.email ? 'input--error' : ''}`}
                type="email"
                {...register('email', {
                  required: 'Email is required', pattern: {
                    value: /^[\w.+-]{3,}@[\w-]+\.[\w-]{2,}$/,
                    message: "Email is invalid"
                  }
                })}
                placeholder='Email'
                aria-label='Email'
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="input-container">
              <div className="pass">
                <input
                  className={errors.password ? 'input--error' : ''}
                  type={showPass ? "text" : "password"}
                  {...register('password', { required: 'Password is required' })}
                  placeholder='Password'
                  aria-label='Password'
                />
                <span onClick={() => setShowPass(!showPass)}>{showPass ? "hide" : "show"}</span>
              </div>
              {errors.password && <p>{errors.password.message}</p>}
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