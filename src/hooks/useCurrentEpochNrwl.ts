import { useEffect, useState } from 'react';
import useTombFinance from './useTombFinance';
import { BigNumber } from 'ethers';
import useRefresh from './useRefresh';

const useCurrentEpochNrwl = () => {
  const [currentEpoch, setCurrentEpoch] = useState<BigNumber>(BigNumber.from(0));
  const tombFinance = useTombFinance();
  const { slowRefresh } = useRefresh();

  useEffect(() => {
    async function fetchCurrentEpoch() {
      try {
        setCurrentEpoch(await tombFinance.getCurrentEpochNrwl());
      } catch (err) {
        console.error(err);
      }
    }
    fetchCurrentEpoch();
  }, [setCurrentEpoch, tombFinance, slowRefresh]);

  return currentEpoch;
};

export default useCurrentEpochNrwl;
