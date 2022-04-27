import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const Container = styled.div`
  @media (max-width: 960px) {
    width: 100%;
    height: 75%;
    padding-bottom: 58px;
    box-sizing: border-box;
    position: relative;
    top: 0;
    overflow: visible;
  }
`;

const TextCont = styled.div`
  @media (max-width: 960px) {
    width: 80% !important;
    min-height: 0;
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
  @media (max-width: 960px) {
    position: relative;
    width: 100%;
    height: 445px;
    top: 390px;
  }
`;

const Content = styled.p`
  font-size: 14px;
`;

const Cube = styled.div``;

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const time = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  };

  useEffect(() => {
    return time();
  }, []);

  return (
    <>
      <Container className="container about">
        <TextCont className="text">
          <h1>
            <AnimatedLetters
              array={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <Content>
            I'm a very higly-motivated frontend developer looking for a role in
            IT company with the opportunity to work with the latest technologies
            and expose myself to diverse projects.
          </Content>
          <Content>
            I'm confident, naturally curious, and always want to improve myself
            to become a better developer than yesterday.
          </Content>
          <Content>
            If I define myself in one sentence, it would be a family person, a
            sports fanatic, animal lover, and tech-addict!!!
          </Content>
        </TextCont>

        <CubeCont>
          <Cube className="cubespin">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#44883e" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </Cube>
        </CubeCont>
      </Container>
      <Loader type="pacman" />
    </>
  );
}
