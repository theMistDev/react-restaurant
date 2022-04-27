import React from 'react';
import Button from './Button';

function ProductCard(props) {
  return (
    <div className="flex flex-col border-2 w-[17rem] h-[26rem] m-3 shadow-xl">
      <div className=" h-1/2 ">
        <img className=" object-cover " src={props.picture} alt="product" />
      </div>

      <div className="h-1/2 bg-orange-100 flex flex-col justify-between">
        <div className="py-3 px-2 flex flex-col h-full justify-between ">
          <div>
            <h4 className="font-bold text-xl">{props.title}</h4>
            <p>{props.description}</p>
          </div>

          <div className="text-purple-900">
            <p className="text-3xl font-bold">
              &#x20A6;
              {props.price}
            </p>
          </div>
        </div>
        <Button title="Order" />
      </div>
    </div>
  );
}

export default ProductCard;
