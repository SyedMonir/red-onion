import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../Images/logo.png';
import { toast, ToastContainer } from 'react-toastify';
import './Form.css';
import Spinner from './Spinner';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    general: '',
  });

  const [
    createUserWithEmailAndPassword,
    createUser,
    createUserLoading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = (event) => {
    const validTest = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/;
    const validMail = validTest.test(event.target.value);

    if (validMail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Enter valid email!' });
      setUserInfo({ ...userInfo, email: '' });
    }
  };

  const handlePasswordBlur = (event) => {
    // (?=.*[!@#$%^&*])	The string must contain at least one special character,
    const validTest = /(?=.*[!@#$%^&*])/;
    const validPassword = validTest.test(event.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setError({
        ...error,
        password: '',
      });
    } else {
      setError({
        ...error,
        password: 'Its must be contains one special character',
      });
      setUserInfo({ ...userInfo, password: '' });
    }
  };

  if (createUserError) {
    console.log(createUserError);
  }
  if (createUser) {
    console.log(createUser.user);
    // toast('Success!!');
  }
  useEffect(() => {
    if (createUserError) {
      switch (createUserError?.code) {
        case 'auth/invalid-email':
          toast.error('Invalid email provided, please provide a valid email');
          break;
        case 'auth/invalid-password':
          toast.error('Wrong password!!');
          break;
        case 'auth/email-already-in-use':
          toast.error('Email already is use!!');
          break;
        default:
          toast.error('Something went wrong');
      }
    }
  }, [createUserError]);

  const handleSignUp = (event) => {
    event.preventDefault();
    const confirmPassword = event.target.confirmPassword.value;
    if (userInfo.password === confirmPassword) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    } else {
      toast.error("Confirm password didn't matched!");
    }
  };
  return (
    <>
      {createUserLoading ? (
        <Spinner />
      ) : (
        <div className="hero min-h-screen bg-base-200">
          <ToastContainer />
          <div className="hero-content px-0 w-auto max-w-full sm:w-3/5">
            <div className="card flex-shrink-0 p-5 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="text-center mt-4">
                <Link
                  to={'/'}
                  className="btn btn-ghost normal-case text-xl mb-4"
                >
                  <img src={logo} width={120} alt="" />
                </Link>
                <h1 className="text-3xl font-bold">Sign up now!</h1>
              </div>
              <div className="card-body p-1">
                <form onSubmit={handleSignUp}>
                  <div className="form-control">
                    <label className="label" htmlFor="name">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="email">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      onBlur={handleEmailBlur}
                      id="email"
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                    {error?.email && (
                      <span className="error">{error.email}</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="password">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      onBlur={handlePasswordBlur}
                      id="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    {error?.password && (
                      <span className="error">{error.password}</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="confirmPassword">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have account?
                    </Link>
                  </label>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
