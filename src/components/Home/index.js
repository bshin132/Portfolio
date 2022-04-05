import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Container = styled.div`
`;

const TextCont = styled.div``;

const Intro = styled.h1`
  color:#ffffff;
  font-size:53px;
  margin:0;
  font-family:'Coolvetica';
  font-weight:400;
`;



const Subheader = styled.h2`
  color:#8d8d8d;
  margin-top:20px;
  font-weight:400;
  font-size:11px;
  font-family:sans-serif;
  letter-spacing:3px;
  animation:fadeIn 1s 1.8s backwards;
`;

export default function Home() {
  return (
    <Container className='container homepage'>
      <TextCont className='text'>
        <Intro>
          Hi, <br /> I'm
          Brian
          <br />
          web developer
        </Intro>
        <Subheader>Frontend Developer</Subheader>
        <Link to="/contact" className="button">
          CONTACT ME
        </Link>
      </TextCont>
    </Container>
  );
}
