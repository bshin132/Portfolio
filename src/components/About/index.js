import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div``;

const TextCont = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 35%;
  vertical-align: middle;
  display: table-cell;
  max-height: 90%;
`;

const Intro = styled.h1`
  font-size: 53px;
  font-family: 'Coolvetica';
  color: #ffd700;
  font-weight: 400;
  margin-top: 0;
  position: relative;
  margin-bottom: 40px;
  left: 10px;

  &::before {
    content: '<h1>';
    font-family: 'La Belle Aurore';
    line-height: 18px;
    font-size: 18px;
    position: absolute;
    margin-top: -10px;
    left: -10px;
    opacity: 0.6;
  }

  &::after {
    content: '</h1>';
    font-family: 'La Belle Aurore';
    font-size: 18px;
    left: -30px;
    bottom: -20px;
    position: absolute;
    margin-left: 20px;
    line-height: 18px;
    opacity: 0.6;
  }
`;

const Paragraph = styled.p`
  font-style: 13px;
  color: #fff;
  font-weight: 300;
  min-width: fit-content;
  font-family: sans-serif;
  animation: pulse 1s;

  &:nth-of-type(1) {
    animation-delay: 1.1s;
  }
  &:nth-of-type(2) {
    animation-delay: 1.2s;
  }
  &:nth-of-type(3) {
    animation-delay: 1.3s;
  }
`;

const CubeCont = styled.div`
  width: 50%;
  height: 100%;
  top: 0;
  padding-top: 18%;
  max-lines: 0;
  position: absolute;
  right: 0;
  overflow: hidden;
`;

const Cube = styled.div``;

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <Container className="container about">
      <TextCont className="text">
        <Intro>
          <AnimatedLetters
            array={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
            letterClass={letterClass}
          />
        </Intro>
        <Paragraph>
          I'm a very higly-motivated frontend developer looking for a role in IT
          company with the opportunity to work with the latest technologies and
          expose myself to diverse projects.
        </Paragraph>
        <Paragraph>
          I'm confident, naturally curious, and always want to imporve myself to
          become a better developer than yesterday.
        </Paragraph>
        <Paragraph>
          If I define myself in one sentence, that would be a family person, a
          sports fanatic, animal lover, and tech-obsessed!!!
        </Paragraph>
      </TextCont>

      <CubeCont>
        <Cube className="cubespin">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNodeJs} color="#44883e" />
          </div>
        </Cube>
      </CubeCont>
    </Container>
  );
}
