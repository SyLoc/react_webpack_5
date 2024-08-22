import React from 'react';

const Greeting = ({ name,partnerName, country }) => {
  return (
    <div>
      <h1 data-testid="greeting">Hello, {partnerName}!</h1>
      <h1>I'm {name} and I come from {country}.</h1>
    </div>
  );
};

export default Greeting;