import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TopContent = styled.span`
  bottom: auto;
  top: 35px;
  color: #ffd700;
  opacity: 0.6;
  position: absolute;
  bottom: 0;
  left: 120px;
  font-size: 18px;
  font-family: 'La Belle Aurore';
`;

const BottomContent = styled.span`
  color: #ffd700;
  opacity: 0.6;
  position: absolute;
  bottom: 0;
  left: 120px;
  font-size: 18px;
  font-family: 'La Belle Aurore';
`;

const BottomContentHtml = styled.span`
  margin-left: -20px;
`;

export default function Layout() {
  return (
    <Container>
      <TopContent>&lt;body&gt;</TopContent>
      <Outlet />

      <BottomContent>
        &lt;/body&gt;
        <br />
        <BottomContentHtml>&lt;/html&gt;</BottomContentHtml>
      </BottomContent>
    </Container>
  );
}
