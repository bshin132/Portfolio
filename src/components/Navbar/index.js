import React from 'react';
import './index.scss';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faEye,
  faHome,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const NavContainer = styled.div`
  background-color: #181818;
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  min-height: 500px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    min-height: 0;
  }
  @media (max-width: 530px) {
    position: fixed;
  }
`;

const Logo = styled.img`
  display: block;
  margin: 8px auto;
  width: 24px;
  height: auto;
  @media (max-width: 960px) {
    float: left;
    padding: 2px 12px;
    margin-right: 20px;
  }
`;

const NavLinkCont = styled.nav`
  display: block;
  text-align: center;
  position: absolute;
  height: 210px;
  top: 50%;
  margin-top: -120px;
  width: 100%;
  @media (max-width: 960px) {
    width: 42%;
    position: absolute;
    left: 50%;
    margin-left: -19%;
    float: left;
    overflow: hidden;
    text-align: center;
    height: 60px;
    top: 0;
    margin-top: 22px;
  }
  @media (max-width: 530px) {
    width: 100%;
    position: fixed;
    left: 100%;
    opacity: 0;
    margin-left: 0;
    float: left;
    overflow: hidden;
    text-align: center;
    height: 45px;
    top: 60px;
    margin-top: 0;
    background: #181818;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`;

const List = styled.ul`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: block;
  padding: 0;
  list-style: none;
  text-align: center;
  margin: 0;
  @media (max-width: 960px) {
    position: static;
    bottom: 20px;
    width: auto;
    height: 60px;
    line-height: 60px;
    display: block;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0;
    float: right;
  }
  @media (max-width: 530px) {
    display: none;
  }
`;

const ListItem = styled.li`
  @media (max-width: 960px) {
    float: right;
    height: 60px;
    line-height: 60px;
    margin: 0 10px;
  }
`;

const Menu = styled.a`
  display: none;
  :hover {
    color: #ffd700;
  }
  @media (max-width: 530px) {
    font-size: 30px;
    color: #fff;
    float: right;
    margin: -6px 20px 10px 10px;
    display: block;
  }
`;

export default function Navbar() {
  return (
    <NavContainer className="nav-bar">
      <Link className="logo" to="/">
        <Logo src={`${logo}`} className="image" />
      </Link>

      <NavLinkCont className="nav show">
        <NavLink exact="true" to="/" className="home">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="about" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="work" to="/work">
          <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="contact" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </NavLinkCont>

      <List>
        <ListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bshin132/"
          >
            <FontAwesomeIcon
              className="navicon"
              icon={faLinkedin}
              color="#4d4d4e"
            />
          </a>
        </ListItem>
        <ListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bshin132"
          >
            <FontAwesomeIcon
              className="navicon"
              icon={faGithub}
              color="#4d4d4e"
            />
          </a>
        </ListItem>
        <ListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/bshin3714/?hl=en"
          >
            <FontAwesomeIcon
              className="navicon"
              icon={faInstagram}
              color="#4d4d4e"
            />
          </a>
        </ListItem>
      </List>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
    </NavContainer>
  );
}
