import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import logo from '../../Images/logo.png';
import Spinner from './Spinner';

const Login = () => {
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    general: '',
  });

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
    setUserInfo({ ...userInfo, password: event.target.value });
    // if (validPassword) {
    //   setUserInfo({ ...userInfo, password: event.target.value });
    //   setError({
    //     ...error,
    //     password: '',
    //   });
    // } else {
    //   setError({
    //     ...error,
    //     password: 'Its must be contains one special character',
    //   });
    //   setUserInfo({ ...userInfo, password: '' });
    // }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  if (signInError) {
    console.log(signInError);
  }
  useEffect(() => {
    if (signInError) {
      switch (signInError?.code) {
        case 'auth/invalid-email':
          toast.error('Invalid email provided, please provide a valid email');
          break;
        case 'auth/invalid-password':
          toast.error('Wrong password!!');
          break;
        case 'auth/wrong-password':
          toast.error('Wrong Password!!');
          break;
        default:
          toast.error('Something went wrong');
      }
    }
  }, [signInError]);

  // if (signInUser) {
  console.log(signInUser?.user);
  // toast('Success!!');
  // }

  const forgetPassword = () => {
    toast.info('Password reset email sent!');
  };
  return (
    <>
      {signInLoading ? (
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
                <h1 className="text-3xl font-bold">Login</h1>
              </div>
              <div className="card-body p-1">
                <form onSubmit={handleLogin}>
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
                    {/* {error?.email && (
                      <span className="error">{error.email}</span>
                    )} */}
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
                    {/* {error?.password && (
                      <span className="error">{error.password}</span>
                    )} */}
                  </div>
                  <label className="label">
                    <span>
                      <Link
                        to="/signup"
                        className="label-text-alt link link-hover"
                      >
                        Create an account?
                      </Link>
                    </span>
                    <span
                      className="text-xs cursor-pointer hover:underline"
                      onClick={forgetPassword}
                    >
                      Forget password?
                    </span>
                  </label>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Login
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

export default Login;
