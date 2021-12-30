import React from 'react';
import AddCartFav from '../button/AddCartFav';
import dataProduct from '../../Data';
const Cards = () => {
  let cardStyle = {
    width: '225px',
    height: '400px',
  };

  return (
    <>
      {dataProduct.productOff.map((data) => (
        <div
          className="card bg-ligth col-3 mx-1 border-0 my-5"
          key={data.id}
          style={cardStyle}
        >
          <img
            src={data.img}
            className="card-img-top w-100 h-50 position-relative top-10"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-center ">
            <h5 className="card-title h5">{data.name}</h5>
            <h6 className="fw-lighter">{data.off}</h6>
            <h6 className="text-decoration-line-through fw-lighter">
              {data.priceoff}
            </h6>
            <h5 className="h5">{data.price}</h5>
          </div>
          <div className="add-cart">
            <AddCartFav />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
