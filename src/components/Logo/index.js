import React from 'react';
import './index.scss';
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
