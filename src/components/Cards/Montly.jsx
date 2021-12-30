import React from 'react';
import Cards from './Cards';

const Montly = () => {
  return (
    <div className="my-8">
      <h3 className="ff text-start my-6 ">Ofertas Mensuales</h3>
      <div className="container card-content row w-100 justify-content-center">
        <Cards />
      </div>
    </div>
  );
};

export default Montly;
