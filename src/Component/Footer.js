import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import instagram from "../Image/Logo/instagram.png";
import youtube from "../Image/Logo/youtube.png";
import github from "../Image/Logo/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white mt-5">
      <footer className="text-center text-lg-start text-white">
        <section
          className="d-flex justify-content-between p-2"
          style={{
            backgroundColor: "white",
            color: "black",
            paddingRight: "100px",
            paddingLeft: "100px",
          }}
        >
          <div style={{ paddingLeft: "322px" }}>
            <span>Jangkau kami melalui media sosial:</span>
          </div>
          <div style={{ paddingRight: "322px" }}>
            <a
              href="https://www.instagram.com/yodimpra_"
              className="text-white me-4"
            >
              <img
                src={instagram}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span
                style={{
                  paddingLeft: "5px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Instagram
              </span>
            </a>
            <a
              href="https://www.youtube.com/@channel_kuliah"
              className="text-white me-4"
            >
              <img
                src={youtube}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span
                style={{
                  paddingLeft: "5px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Youtube
              </span>
            </a>
            <a href="https://github.com/weztcy" className="text-white me-4">
              <img
                src={github}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span
                style={{
                  paddingLeft: "5px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                GitHub
              </span>
            </a>
          </div>
        </section>
        <section>
          <Container className="text-center text-md-start mt-5">
            <Row className="mt-3">
              <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Siaga Bencana</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Kami berkomitmen untuk menyediakan informasi terbaru dan
                  panduan praktis yang dibutuhkan oleh komunitas untuk tetap
                  aman dan siap dalam segala situasi darurat.
                </p>
              </Col>
              <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Halaman Utama</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link
                    as={Link}
                    to="/penanganan"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Penanganan Bencana
                  </Link>
                </p>
                <p>
                  <Link
                    as={Link}
                    to="/data"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Data Bencana
                  </Link>
                </p>
                <p>
                  <Link
                    as={Link}
                    to="/berita"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Berita Bencana
                  </Link>
                </p>
                <p>
                  <Link
                    as={Link}
                    to="/cuaca"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Ramalan Cuaca
                  </Link>
                </p>
              </Col>
              <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Miscellaneous</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Coming Soon!
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Coming Soon!
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Coming Soon!
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none" }}
                    className="text-white"
                  >
                    Coming Soon!
                  </a>
                </p>
              </Col>
              <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Kontak Kami</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Jl. Yos Sudarso No.58
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  siagabencama@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +62 813-4567-1288
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> +62 811-4567-4789
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <a
            className="text-white"
            href="https://portal.dinus.ac.id/show/ZjgwNzhiMjBmNGFmNWIwYThjMWJiOGE5Y2ZlN2IzZTEtODE5MjYtNDYzMDQ1ODU2ODAyODA4MjE2"
          >
            ©2024: Yohanes Dimas Pratama - A11.2021.13254
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
