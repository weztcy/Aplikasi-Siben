import React from "react";
import NavigationBar from "../Component/NavigationBar";
import PageCard from "../Component/PageCard";
import video1 from "../Video/PayAttention.mp4";
import video2 from "../Video/PeopleSearch.mp4";
import video3 from "../Video/News.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css"; // CSS file for additional styling

function Home() {
  return (
    <div className="Home">
      <NavigationBar />
      <h1>Website Siben</h1>
      <Container className="d-flex justify-content-center">
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <PageCard
              cardTitle="Penanganan Bencana"
              cardText="Strategi dan tindakan penanganan bencana."
              videoUrl={video1}
              linkTo="/penanganan"
              modalTitle="Penanganan Bencana"
              modalContent="Halaman ini menyediakan informasi komprehensif mengenai strategi dan tindakan yang dilakukan untuk penanganan bencana. Anda dapat menemukan berbagai rencana mitigasi, kesiapsiagaan, respon darurat, dan upaya pemulihan pascabencana."
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <PageCard
              cardTitle="Data Bencana"
              cardText="Data terkini mengenai bencana yang terjadi."
              videoUrl={video2}
              linkTo="/data"
              modalTitle="Data Bencana"
              modalContent="Halaman ini menampilkan data terkini mengenai berbagai bencana yang terjadi di seluruh dunia. Informasi yang disajikan mencakup jenis bencana, lokasi, tanggal kejadian, serta jumlah korban yang ditimbulkan."
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <PageCard
              cardTitle="Berita Bencana"
              cardText="Berita terbaru seputar bencana alam."
              videoUrl={video3}
              linkTo="/berita"
              modalTitle="Berita Bencana"
              modalContent="Halaman ini menyajikan berita terbaru seputar bencana alam yang terjadi di dalam negeri. Anda dapat membaca laporan, analisis, dan liputan langsung dari lokasi bencana, serta perkembangan terbaru mengenai upaya penanganan dan bantuan yang diberikan."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
