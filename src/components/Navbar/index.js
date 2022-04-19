import React from 'react';
import './index.scss';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const NavContainer = styled.div`
  background-color: #181818;
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  min-height: 500px;
`;

const Logo = styled.img`
  display: block;
  margin: 8px auto;
  width: 24px;
  height: auto;
`;

const NavLinkCont = styled.nav`
  display: block;
  text-align: center;
  position: absolute;
  height: 210px;
  top: 50%;
  margin-top: -120px;
  width: 100%;
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
`;

const ListItem = styled.li``;

export default function Navbar() {
  return (
    <NavContainer className="nav-bar">
      <Link className="logo" to="/">
        <Logo src={`${logo}`} className="image" />
      </Link>

      <NavLinkCont className="nav">
        <NavLink exact="true" activeClassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="about"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="work"
          to="/work"
        >
          <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="contact"
          to="/contact"
        >
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
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </ListItem>
        <ListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bshin132"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </ListItem>
      </List>
    </NavContainer>
  );
}
