import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherActions";

const WeatherCard = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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

          return (
            <Col
              key={index}
              md="4"
              className="mb-5 d-flex justify-content-center align-items-center"
            >
              <Card
                style={{
                  width: "16rem",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
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