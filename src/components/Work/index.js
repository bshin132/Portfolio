import React from 'react';
import './index.scss';
import styled from 'styled-components';

export default function Work() {
  return (
    <div id="page" class="en">
      <div id="demo" class="container gallery magicwall">
        <ul class="magicwall-grid">
          Project Name
          <li data-thumb="assets/images/portfolio/1-port-thumb.png">
            <div class="hover-content vcenter"></div>
            <a
              href="assets/images/portfolio/1-port-1.png"
              title='<a target="_blank">188Bet</a>'
              class="colorbox"
              rel="magicwall1"
            ></a>
            <a
              href="assets/images/portfolio/1-port-devices.png"
              title='<a target="_blank">188Bet</a>'
              class="colorbox"
              rel="magicwall1"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
