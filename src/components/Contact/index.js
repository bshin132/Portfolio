import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container contact">
        <div className="text">
          <h1>
            <AnimatedLetters
              array={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other requests or questions,
            don't heistate to contact me using the form below.
          </p>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  );
}
