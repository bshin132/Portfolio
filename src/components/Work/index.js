import React, {useEffect, useState} from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

export default function Work() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const time = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }

  useEffect(() => {
    return time();
  }, []);


  return (
    <div className="container work">
      <div className="text">
        <h1>
          <AnimatedLetters
            array={['M', 'y', ' ', 'w', 'o', 'r', 'k']}
            index={15}
            letterClass={letterClass}
          />
        </h1>
        <p style={{ fontSize: '14px' }}>
          I have developed many projects using various technologies. Here are some projects that I developed.
        </p>
      </div>
    </div>
  );
}
