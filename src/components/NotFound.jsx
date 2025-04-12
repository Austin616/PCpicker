import React from 'react';

export default function NotFound() {
    return (
      <div className="flex items-center justify-center text-center mt-20">
        <div>
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-3xl mt-4">Oops! Page not found.</p>
          <p className="text-lg mt-2">The page you are looking for does not exist.</p>
          <a href="/" className="text-white mt-4 block border-2 rounded-full bg-blue-600 hover:bg-blue-800 px-4 py-2 transition duration-300">
            Go back home
            </a>
        </div>
      </div>
    );
  }
  