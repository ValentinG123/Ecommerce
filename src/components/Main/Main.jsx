import React from 'react';
import AddCar from '../button/AddCar';
const Main = () => {
  let contentStyle = {
    backgroundColor: '#F1DDC9',
    height: '450px',
  };
  return (
    <div className=" container mx-auto my-6 d-flex " style={contentStyle}>
      <div className="w-25 position-relative ">
        <div className="position-absolute img-content ">
          <img src="relojinicio.png" alt="" className="logo-inicio" />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-around w-75">
        <h1 className="h1 ff">WAY KAMBAS MINI EBONY</h1>
        <div className="w-75">
          <p className="ff info">
            MATOA Way Kambas - This wood is chosen to represent the Sumatran
            Rhino's skin which is designed with an overlap effect on its strap
            to represent Rhino's skin.
          </p>
        </div>

        <AddCar />
      </div>
    </div>
  );
};

export default Main;
