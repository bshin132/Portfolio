import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import styled from 'styled-components';
import { projects } from '../../assets/constants/constant';

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   overflow: hidden;
// `;

// const GridContainer = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//   padding: 3rem;
//   place-items: center;
//   column-gap: 2rem;
//   row-gap: 3rem;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     display: flex;
//     flex-direction: column;
//     padding: 2rem;
//     padding-bottom: 0;
//   }
// `;

// const BlogCard = styled.div`
//   border-radius: 10px;
//   box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
//   text-align: center;
//   width: 400px;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 100%;
//   }
// `;

// const TitleContent = styled.div`
//   text-align: center;
//   z-index: 20;
//   width: 100%;
// `;

// const HeaderThree = styled.h3`
//   font-weight: 500;
//   letter-spacing: 2px;
//   color: #9cc9e3;
//   padding: 0.5rem 0;
//   font-size: ${(props) => (props.title ? '3rem' : '2rem')};
// `;

// const Hr = styled.hr`
//   width: 50px;
//   height: 3px;
//   margin: 20px auto;
//   border: 0;
//   background: #d0bb57;
// `;

// const Intro = styled.div`
//   width: 170px;
//   margin: 0 auto;
//   color: #dce3e7;
//   font-family: 'Droid Serif', serif;
//   font-size: 13px;
//   font-style: italic;
//   line-height: 18px;
// `;

// const CardInfo = styled.p`
//   width: 100%;
//   padding: 0 50px;
//   color: #e4e6e7;
//   font-style: 2rem;
//   line-height: 24px;
//   text-align: justify;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.3rem;
//   }
// `;

// const UtilityList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   display: flex;
//   justify-content: space-around;
//   margin: 2.5rem 0;
// `;

// const ExternalLinks = styled.a`
//   color: #d4c0c0;
//   font-size: 1.6rem;
//   padding: 1rem 1.5rem;
//   background: #6b3030;
//   border-radius: 15px;
//   transition: 0.5s;
//   &:hover {
//     background: #801414;
//   }
// `;

// const TagList = styled.ul`
//   display: flex;
//   justify-content: space-around;
//   padding: 2rem;
// `;
// const Tag = styled.li`
//   color: #d8bfbf;
//   font-size: 1.5rem;
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

      {/* <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>Code</ExternalLinks>
                <ExternalLinks href={p.source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer> */}
    </div>
  );
}
