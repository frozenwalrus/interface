import { useEffect, useState } from 'react';
import useTombFinance from './useTombFinance';
import { TokenStat } from '../tomb-finance/types';
import useRefresh from './useRefresh';

const useCashPriceInEstimatedTWAPNrwl = () => {
  const [stat, setStat] = useState<TokenStat>();
  const tombFinance = useTombFinance();
  const { slowRefresh } = useRefresh();

  useEffect(() => {
    async function fetchCashPrice() {
      try {
        setStat(await tombFinance.getTombStatInEstimatedTWAPNrwl());
      } catch (err) {
        console.error(err);
      }
    }
    fetchCashPrice();
  }, [setStat, tombFinance, slowRefresh]);

  return stat;
};

export default useCashPriceInEstimatedTWAPNrwl;
