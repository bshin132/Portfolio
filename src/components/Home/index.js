import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../Logo';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['B', 'r', 'i', 'a', 'n'];
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  const time = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  };

  useEffect(() => {
    return time();
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-home">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>&nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              array={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              array={jobArray}
              index={20}
            />
          </h1>
          <h2>Frontend Developer / UI/UX Designer</h2>
          <Link to="/contact" className="button">
            CONTACT ME
          </Link>
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
