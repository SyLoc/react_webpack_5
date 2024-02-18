import * as React from 'react';
import ImageComponent from './ImageComponent';
import Image from '../images/img.jpg'

const App = () => {
  return (
    <>
      <h1 className='font-serif text-blue-600 font-bold'>Hello, React App using Webpack 5! </h1>
      <ImageComponent/>
      <div>
        <h2 className='font-mono text-red-500'>Hello, React App using Webpack 5!</h2>
        <img src={Image} alt="img" />
        <h3 className="bg-green-500 text-blue-500 p-4 font-semibold hover:bg-yellow-500 hover:text-red-500 ">Hello, Tailwind CSS!</h3>
      </div>
      <h3>updated from feature-a branch</h3>
    </>
  )
};

export default App;



