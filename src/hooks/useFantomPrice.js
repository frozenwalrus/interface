import axios from 'axios';
import { useState, useEffect } from 'react';

const useFantomPrice = () => {
  const [price, setPrice] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    getPrice();
    const interval = setInterval(() => {
      getPrice();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return { price, marketCap, priceChange };

  async function getPrice() {
    try {
      const { data } = await axios(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=usd-coin-avalanche-bridged-usdc-e',
      );
      setPrice(data[0].current_price);
      setMarketCap(data[0].market_cap);
      setPriceChange(data[0].price_change_percentage_24h);
    } catch (err) {
      console.error(err);
    }
  }
};
export default useFantomPrice;
