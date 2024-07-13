import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ibnux.github.io/BMKG-importer/cuaca/501262.json"
        );
        console.log("API Response:", response.data); // Log API response
        setWeatherData(response.data);
      } catch (error) {
        console.error(
          "Error fetching the weather data",
          error.response ? error.response.data : error.message
        );
        setError("Failed to fetch weather data");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData.length) {
    return <div>Loading...</div>;
  }

  const formatDateAndTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return { formattedDate, formattedTime };
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {weatherData.map((data, index) => {
          const weatherImage = `/images/IconCuaca/${data.kodeCuaca}.png`;
          const { formattedDate, formattedTime } = formatDateAndTime(
            data.jamCuaca
          );

          console.log(`Weather Data [${index}]:`, data); // Log weather data
          console.log(`Weather Image Path [${index}]:`, weatherImage); // Log image path
          return (
            <Col key={index} md="4" className="mb-5 d-flex justify-content-center align-items-center">
              <Card
                style={{
                  width: "16rem",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src={weatherImage} alt="Weather icon" />
                <Card.Body>
                  <Card.Title
                    style={{ marginBottom: "20px", marginTop: "-15px" }}
                  >
                    Kota Semarang
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left" }}>
                    <div className="d-flex mb-2">
                      <strong style={{ width: "100px" }}>Tanggal:</strong>
                      <span style={{ paddingLeft: "16px" }}>
                        {formattedDate}
                      </span>
                    </div>
                    <div className="d-flex mb-2">
                      <strong style={{ width: "100px" }}>Jam:</strong>
                      <span style={{ paddingLeft: "16px" }}>
                        {formattedTime}
                      </span>
                    </div>
                    <div className="d-flex mb-2">
                      <strong style={{ width: "100px" }}>Kondisi:</strong>
                      <span style={{ paddingLeft: "16px" }}>{data.cuaca}</span>
                    </div>
                    <div className="d-flex mb-2">
                      <strong style={{ width: "100px" }}>Kelembapan:</strong>
                      <span style={{ paddingLeft: "16px" }}>
                        {data.humidity}%
                      </span>
                    </div>
                    <div className="d-flex mb-2">
                      <strong style={{ width: "100px" }}>Temperatur:</strong>
                      <span style={{ paddingLeft: "16px" }}>
                        {data.tempC}°C / {data.tempF}°F
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default WeatherCard;
