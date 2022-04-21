import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import styled from 'styled-components';
import { projects } from '../../assets/constants/constant';

export default function Work() {
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
          I have developed many projects using various technologies. Here are
          some projects that I developed.
        </p>
      </div>

      <div className="grid-container">
        {projects.map((p, i) => {
          return (
            <div className="maincontainer" key={i}>
              <div className="thecard">
                <img className="thefront" src={p.image}></img>

                <div className="theback">
                  <h1>{p.title}</h1>
                  <p>{p.description}</p>
                  <div className='stacks'>
                    {p.tags.map((t, i) => {
                      return <span key={i}>{t}</span>;
                    })}
                  </div>
                  <form className='form' action={p.source}>
                    <input type="submit" value="Github" />
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
