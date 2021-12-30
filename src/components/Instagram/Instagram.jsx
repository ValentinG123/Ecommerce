import React from 'react';
import dataProduct from '../../Data';
const Instagram = () => {
  let imgStyle = {
    width: '222px',
    height: '222px',
  };
  return (
    <>
      <div className="row container-fluid">
        <h5 className="ff my-5">Instagram</h5>
        {dataProduct.instagram.map((ig) => (
          <div className="container-fluid col" key={ig.id}>
            <img src={ig.img} alt="" style={imgStyle} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Instagram;
