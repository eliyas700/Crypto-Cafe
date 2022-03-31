import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCrypto(data));
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <h2 className="text-3xl font-bold  text-center mt-16  text-gray-700">
            Available Crypto Currencies
          </h2>
          <p className="text-center py-5 text-xl font-semibold mb-20">
            Total Coins:{crypto.length}
          </p>
          <div className=" w-[90%] mx-auto grid grid-cols-4 gap-20">
            {crypto.map((item) => (
              <CoinCard key={item.id} coin={item}></CoinCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;
