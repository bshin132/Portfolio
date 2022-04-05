import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const Container = styled.div``;

const textCont = styled.div``;

const Intro = styled.h1``;

const Logo = styled.img`

`;

export default function Home() {
  return (
    <Container>
      <textCont>
        <Intro>Hi, <br /> I'm</Intro>
        <Logo src={`${logo}`} className="image" />
        Brian
        <br />
        web developer
      </textCont>
    </Container>
  );
}
