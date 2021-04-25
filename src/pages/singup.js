import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import { useContext, useEffect, useState } from "react";
import { isInaccessible } from "@testing-library/dom";
import * as ROUTES from "../constants/routes";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSingUp = async (event) => {
    event.preventDefault();
    try {
     
    } catch (error) {
      
    }
  };
  useEffect(() => {
    document.title = "Sign Up - Instagram";
  }, []);

  return (
    <div className='container flex mx-auto  max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img
          className='max-w-full'
          src='/images/iphone-with-profile.jpeg'
          alt='iPhone with Profile'
        />
      </div>
      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded'>
          <h1 className='flex justify-center w-full'>
            <img
              src='/images/logo.png'
              alt='Instagram'
              className='mt-2 w-6/12 mb-4'
            />
          </h1>
          {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

          <form onSubmit={handleSingUp} method='POST'>
            <input
              aria-label='Enter your email address'
              type='text'
              placeholder='Email Address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border
            border-gray-primary rounded mb-2'
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input
              aria-label='Enter your password'
              type='password'
              placeholder='Password'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border
            border-gray-primary rounded mb-2'
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col rounded  w-full bg-white p-4 border border-gray-primary'>
          <p className='text-sm'>
            Don't have an account?{` `}
            <Link to='/signup' className='font-bold text-blue-medium'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
