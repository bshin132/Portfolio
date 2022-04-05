import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './index.scss';

const Container = styled.div``;

const TextCont = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  max-height: 90%;
`;

const Intro = styled.h1`
  color: #ffffff;
  font-size: 53px;
  margin: 0;
  font-family: 'Coolvetica';
  font-weight: 400;
  &::before {
    content: '<h1>';
    font-family: 'La Belle Aurore';
    color: #ffd700;
    font-size: 18px;
    position: absolute;
    margin-top: -40px;
    left: 15px;
    opacity: 0.6;
  }

  &::after {
    content: '<h1>';
    font-family: 'La Belle Aurore';
    color: #ffd700;
    font-size: 18px;
    position: absolute;
    margin-top: 18px;
    margin-left: 20px;
    animation: fadeIn 1s 1.7s backwards;
    opacity: 0.6;
  }
`;

const Subheader = styled.h2`
  color: #8d8d8d;
  margin-top: 20px;
  font-weight: 400;
  font-size: 11px;
  font-family: sans-serif;
  letter-spacing: 3px;
  animation: fadeIn 1s 1.8s backwards;
`;

export default function Home() {
  return (
    <Container className="container">
      <TextCont>
        <Intro>
          Hi, <br /> I'm Brian
          <br />
          web developer
        </Intro>
        <Subheader>Frontend Developer / UI/UX Designer</Subheader>
        <Link to="/contact" className="button">
          CONTACT ME
        </Link>
      </TextCont>
    </Container>
  );
}
