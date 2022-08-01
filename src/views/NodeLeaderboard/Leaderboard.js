import {Grid} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';

const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;
const Leaderboard = () => {
  return (
  <div className="nodeleaderboard">
    <Page>
      <BackgroundImage />
      <h2 style={{fontSize: '80px', textAlign: 'center'}}>NODE LEADERBOARD</h2> <br /> 
      <h2 style={{ fontSize: '40px', textAlign: 'center'}}>UPDATED WEEKLY!</h2>   
      
            <table class="shadow-lg bg-black">
            <tr>
              <th class="bg-blue-100 border text-left px-8 py-4">Company</th>
              <th class="bg-blue-100 border text-left px-8 py-4">Contact</th>
              <th class="bg-blue-100 border text-left px-8 py-4">Country</th>
            </tr>
            <tr>
              <td class="border px-8 py-4">fuckboi </td>
              <td class="border px-8 py-4">fuckboi2 </td>
              <td class="border px-8 py-4">fuckboi3 </td>
            </tr>
            <tr>
              <td class="border px-8 py-4">name </td>
              <td class="border px-8 py-4">Neal Garrison</td>
              <td class="border px-8 py-4">Spain</td>
            </tr>
            <tr>
              <td class="border px-8 py-4">Ernst Handel</td>
              <td class="border px-8 py-4">Maggie O'Neill</td>
              <td class="border px-8 py-4">Austria</td>
            </tr>
            </table>
    </Page>
  </div>
  );
};

export default Leaderboard;