import React from 'react';
import './index.scss';

export default function AnimatedLetters({ letterClass, array, index }) {
  return (
    <span>
      {array.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
