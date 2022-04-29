import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/SVG_Icons_and_web_bg/WLRS-Icon-01.svg';
import tShareLogo from '../../assets/img/SVG_Icons_and_web_bg/WSHARE-Icon-01.svg';
import tombLogoPNG from '../../assets/img/sno.png';
import tShareLogoPNG from '../../assets/img/snoshare.png';
import tBondLogo from '../../assets/img/SVG_Icons_and_web_bg/Bond icon-01.svg';

import tombFtmLpLogo from '../../assets/img/SVG_Icons_and_web_bg/WLRS-UST-LP-01.svg';
import tshareFtmLpLogo from '../../assets/img/SVG_Icons_and_web_bg/SHARE-UST-LP-01.svg';

import wftmLogo from '../../assets/img/SVG_Icons_and_web_bg/UST.svg';
import booLogo from '../../assets/img/spooky.png';
import zooLogo from '../../assets/img/zoo_logo.svg';
import shibaLogo from '../../assets/img/shiba_logo.svg';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  TOMBPNG: tombLogoPNG,
  TSHAREPNG: tShareLogoPNG,
  HSHARE: tShareLogo,
  SNOBOND: tBondLogo,
  HBOND: tBondLogo,
  WFTM: wftmLogo,
  BOO: booLogo,
  SHIBA: shibaLogo,
  ZOO: zooLogo,
  SNO: tombLogo,
  SNOSHARE: tShareLogoPNG,
  'SNO-JOE-LP': tombFtmLpLogo,
  'SNOSHARE-JOE-LP': tshareFtmLpLogo,
  'SNO-SNOSHARE-LP': tshareFtmLpLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 90 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
      style={{ borderRadius: '50%' }}
    />
  );
};

export default TokenSymbol;
