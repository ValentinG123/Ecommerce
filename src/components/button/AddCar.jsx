import React from 'react';

const AddCar = () => {
  return (
    <div>
      <button
        className="bg-btn btn-bg d-flex justify-content-center align-items-center  text-white fs-5"
        data-tor="hover:bg(danger)"
      >
        <i className="fas fa-shopping-cart cart mx-2 text-white"></i>
        {'Agregar al carrito'}
      </button>
    </div>
  );
};

export default AddCar;
