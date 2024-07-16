import React from "react";
import WeatherCard from "../Component/WeatherCard";
import { Container } from "react-bootstrap";
import NavigationBar from "../Component/NavigationBar";
import "./RamalanCuaca.css";
import Footer from "../Component/Footer";
import bgvideo from "../Video/DayNight.mp4";
import BackgroundVideo from "../Component/BackgroundVideo";
import BannerPhoto from "../Component/BannerPhoto";
import BannerHome from "../Image/Banner/EarthDisaster.jpg";

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
      <BannerPhoto imageUrl={BannerHome} />
      <NavigationBar />
      <Container>
        <h1>Ramalan Cuaca</h1>
        <WeatherCard style={{ marginBottom: "100px" }} />
      </Container>
      <h2>Kantor BMKG Kota Semarang</h2>
      <iframe
        width="1100"
        height="500"
        style={{ marginBottom: "90px", borderRadius: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.1762784700935!2d110.37614861720691!3d-6.9718705053609575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16!3m3!1m2!1s0x2e70f49e4e0b77e7%3A0x64c2defa5407d2fc!2sMaritime%20Meteorology%20Station%20Class%20II%20BMKG%20Semarang!5e0!3m2!1sen!2sid!4v1720979149291!5m2!1sen!2sid"
      ></iframe>
      <Footer />
    </div>
  );
};

export default Tentang;