import React from 'react';

const Side = () => {
  let containerStyle = {
    height: '500px',
    marginRight: '',
  };
  let imgStyle = {
    width: '60%',
    marginRight: '-100px',
  };
  return (
    <>
      <div className="container my-5">
        <h4 className="ff">Noticias Recientes</h4>
      </div>
      <div className="container d-flex p-0" style={containerStyle}>
        <div className="container w-50 d-flex flex-column justify-content-center align-items-center">
          <p className="ff">Where to travel?</p>
          <h5 className="ff">Matoa Where To Travel?</h5>
        </div>
        <div className="container bg  position-relative" style={imgStyle}>
          <img src="12.jpg" className="position-absolute img-side" alt="" />
        </div>
      </div>
    </>
  );
};

export default Side;
