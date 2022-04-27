import React from 'react';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const Cont = styled.div`
  z-index: 0;
  width: 400px;
  height: 609px;
  position: absolute;
  top: 25%;
  right: 15%;
  bottom: 0;
  left: auto;
  margin: auto;
  @media (max-width: 960px) {
    width: 200px;
    height: 200px;
    top: -45px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  top: auto;
  right: auto;
  bottom: auto;
  left: 0;
  margin: auto;
  width: 100%;
  z-index: 1;
`;

export default function Logo() {
  return (
    <Cont>
      <Image src={logo} />
    </Cont>
  );
}
