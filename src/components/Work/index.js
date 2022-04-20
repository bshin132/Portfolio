import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import styled from 'styled-components';
import { projects } from '../../assets/constants/constant';

// const GridContainer = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//   padding: 3rem;
//   place-items: center;
//   column-gap: 2rem;
//   row-gap: 3rem;
// `;

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

{/* <GridContainer> */}
      <div>
        {projects.map((p, i) => {
          return (
            <div className="maincontainer" key={i}>
              <div className="thecard">
                <img className="thefront" src={p.image}></img>

                <div className="theback">
                  <h1>{p.title}</h1>
                  <p>{p.description}</p>
                  <div>
                    {p.tags.map((t, i) => {
                      return <div key={i}>{t}</div>;
                    })}
                  </div>
                  <form action={p.source}>
                    <input type="submit" value="Source" />
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* </GridContainer> */}
    </div>
  );
}
