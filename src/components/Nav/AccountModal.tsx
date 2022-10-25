import React, { useMemo } from 'react';
import styled from 'styled-components';
import useTokenBalance from '../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../utils/formatBalance';

import Label from '../Label';
import Modal, { ModalProps } from '../Modal';
import ModalTitle from '../ModalTitle';
import useTombFinance from '../../hooks/useTombFinance';
import TokenSymbol from '../TokenSymbol';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const tombFinance = useTombFinance();

  const tombBalance = useTokenBalance(tombFinance.TOMB);
  const displayTombBalance = useMemo(() => getDisplayBalance(tombBalance), [tombBalance]);

  const tshareBalance = useTokenBalance(tombFinance.TSHARE);
  const displayTshareBalance = useMemo(() => getDisplayBalance(tshareBalance), [tshareBalance]);

  const nrwlBalance = useTokenBalance(tombFinance.NRWL);
  const displayNrwlBalance = useMemo(() => getDisplayBalance(nrwlBalance), [nrwlBalance]);

  const wsharePrice = useStakedTokenPriceInDollars('WSHARE', tombFinance.TSHARE);
  const displayWSharePrice = useMemo(
    () => (Number(tshareBalance) / 1e18) * Number(wsharePrice),
    [tshareBalance, wsharePrice],
  );

  const wlrsPrice = useStakedTokenPriceInDollars('WLRS', tombFinance.FTM);
  const displayWlrsPrice = useMemo(() => (Number(tombBalance) / 1e18) * Number(wlrsPrice), [tombBalance, wlrsPrice]);

  const nrwlPrice = useStakedTokenPriceInDollars('NRWL', tombFinance.NRWL);
  const displayNrwlPrice = useMemo(() => (Number(nrwlBalance) / 1e18) * Number(nrwlPrice), [nrwlBalance, nrwlPrice]);

  // const tbondBalance = useTokenBalance(tombFinance.TBOND);
  // const displayTbondBalance = useMemo(() => getDisplayBalance(tbondBalance), [tbondBalance]);

  return (
    <Modal>
      <ModalTitle text="My Wallet" />

      <Balances>
        <StyledBalanceWrapper>
          <TokenSymbol symbol="WLRS" />
          <StyledBalance>
            <StyledValue>{displayTombBalance}</StyledValue>
            <Label color="black" text="WLRS Available" />
            <div style={{ color: '#07c4ff' }}>${displayWlrsPrice.toFixed(2)}</div>
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper>
          <TokenSymbol symbol="WSHARE" />
          <StyledBalance>
            <StyledValue>{displayTshareBalance}</StyledValue>
            <Label color="black" text="WSHARE Available" />
            <div style={{ color: '#07c4ff' }}>${displayWSharePrice.toFixed(2)}</div>
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper>
          <TokenSymbol symbol="NRWL" />
          <StyledBalance>
            <StyledValue>{displayNrwlBalance}</StyledValue>
            <Label color="black" text="NRWL Available" />{' '}
            <div style={{ color: '#07c4ff' }}>${displayNrwlPrice.toFixed(2)}</div>
          </StyledBalance>
        </StyledBalanceWrapper>

        {/* <StyledBalanceWrapper>
          <TokenSymbol symbol="WBOND" />
          <StyledBalance>
            <StyledValue>{displayTbondBalance}</StyledValue>
            <Label text="WBOND Available" />
          </StyledBalance>
        </StyledBalanceWrapper> */}
      </Balances>
    </Modal>
  );
};

const StyledValue = styled.div`
  //color: ${(props) => props.theme.color.grey[300]};
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 ${(props) => props.theme.spacing[2]}px;
`;

export default AccountModal;
