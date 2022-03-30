import React from "react";

const CoinCard = ({ coin }) => {
  console.log(coin);
  const { image, name, symbol } = coin;
  return (
    <div className="flex justify-between items-center shadow-lg rounded-2xl w-[250px] bg-white p-4">
      <img
        className="object-cover rounded-full h-16 w-16 "
        src={image}
        alt=""
      />
      <div>
        <h5 className="text-gray-600 font-medium">{name}</h5>
        <p className="text-gray-400 text-xs">{symbol}</p>
      </div>
    </div>
  );
};

export default CoinCard;
