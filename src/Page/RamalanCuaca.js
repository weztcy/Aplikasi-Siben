import React from 'react';
import WeatherCard from '../Component/WeatherCard';
import { Container } from 'react-bootstrap';
import NavigationBar from '../Component/NavigationBar';
import './RamalanCuaca.css';
import Footer from '../Component/Footer';
import bgvideo from "../Video/DayNight.mp4";
import BackgroundVideo from "../Component/BackgroundVideo";

const Tentang = () => {
  const contentStyle = {
    position: "relative",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  };
  return (
    <div className="Cuaca" style={contentStyle}>
      <BackgroundVideo src={bgvideo} />
      <NavigationBar />
      <Container>
        <h1>Ramalan Cuaca</h1>
        <WeatherCard style={{ marginBottom: '100px' }}/>
      </Container>
      <Footer />
    </div>
  );
};

export default Tentang;
