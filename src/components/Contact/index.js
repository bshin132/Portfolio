import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  const time = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }

  useEffect(() => {
    return time();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template_3c359v8',
        refForm.current,
        'Ia_xtOPnIPo9NdvIO'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <>
      <div className="container contact">
        <div className="text">
          <h1>
            <AnimatedLetters
              array={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p style={{fontSize:"14px"}}>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other requests or questions,
            don't heistate to contact me using the form below.
          </p>
          <div className="form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    value="SEND"
                    className="contact-button"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="infomap">
          Brian shin
          <br />
          Canada,
          <br />
          Coquitlam B.C.
          <br />
          <span>bshin132@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[49.259000, -122.870736]} zoom={13} zoomControl={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[49.259000, -122.870736]}>
              <Popup>Brian lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
