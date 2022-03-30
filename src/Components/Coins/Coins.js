import React, { useEffect, useState } from "react";

const Coins = () => {
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCrypto(data));
  }, []);
  return (
    <div>
      <h2>This is From Coins Section</h2>
    </div>
  );
};

export default Coins;
