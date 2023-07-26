import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setisLogged] = useState(false);

  const handleLogin = () => {
    // Add login functionality here (e.g., authenticate user)
    // You can use a state management library or make API calls to handle login logic.
    // For simplicity, we'll just set isLogged to true to simulate a successful login.
    setisLogged(true);
   
    

    }

  return (
    <div className=" h-[80vh] flex items-center justify-center">
    <div className="flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 w-4/12 border shadow-sm ">
      {isLogged ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Successfully Logged In!</h2>
          {/* Add content for the successfully logged in page */}
          <p>Welcome to our food delivery service. Enjoy your delicious meal!</p>
          {/* Add a link to the home page */}
          <div>
      {/* Place the Link component outside the button */}
      <Link to="/">
        <button className = "Log-In button bg-blue-500 w-48 h-10 rounded-lg  hover:bg-blue-700 text-white font-Inter ml-20 mt-5">
          Proceed to order
        </button>
      </Link>
    </div>
        </div>
      ) : (
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* Add your logo or header here */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleLogin}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default LoginPage;


