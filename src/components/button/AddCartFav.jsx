import React, { useState } from 'react';

const AddCartFav = () => {
  const [fav, setFav] = useState(true);

  const handleClick = () => {
    setFav(false);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="border-0 bg-transparent" onClick={handleClick}>
        <i
          className={
            fav
              ? 'far fa-heart fs-2 bg-ligth'
              : 'fas fa-heart heart-bg fs-2 bg-ligth'
          }
        ></i>
      </button>
      <button className="btn-bg d-flex justify-content-center align-items-center  text-white fs-8 border-0 mx-2">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default AddCartFav;
