import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">PC Builder</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} PC Builder. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-6">
          <a href="#" className="text-sm hover:text-blue-400">Home</a>
          <a href="#logo-wall" className="text-sm hover:text-blue-400">Trusted Brands</a>
          <a href="#features" className="text-sm hover:text-blue-400">Features</a>
          <a href="#stats" className="text-sm hover:text-blue-400">Stats</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
