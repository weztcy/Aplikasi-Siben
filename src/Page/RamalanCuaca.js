import React from 'react';
import WeatherCard from '../Component/WeatherCard';
import { Container } from 'react-bootstrap';
import NavigationBar from '../Component/NavigationBar';
import './RamalanCuaca.css';
import Footer from '../Component/Footer';

const Tentang = () => {
  return (
    <div className="Cuaca">
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
