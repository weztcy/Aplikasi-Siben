import React from "react";
import NavigationBar from "../Component/NavigationBar";
import PageCard from "../Component/PageCard";
import video1 from "../Video/PayAttention.mp4";
import video2 from "../Video/PeopleSearch.mp4";
import video3 from "../Video/News.mp4";
import video4 from "../Video/Weather.mp4";
import mitigasi from "../Image/Konten/Mitigasi.jpg";
import tanggapdarurat from "../Image/Konten/TanggapDarurat.jpg";
import pemulihan from "../Image/Konten/Pemulihan.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css"; // CSS file for additional styling
import Footer from "../Component/Footer";
import Carousel from "react-bootstrap/Carousel";
import DisasterStepCarousel from "../Component/DisasterStepCarousel";
import BannerPhoto from "../Component/BannerPhoto";
import BannerHome from "../Image/Banner/EarthDisaster.jpg";
import bgvideo from "../Video/LightingTornadoes.mp4";
import BackgroundVideo from "../Component/BackgroundVideo";

function Home() {
  const contentStyle = {
    position: "relative",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="Home" style={contentStyle}>
      <BackgroundVideo src={bgvideo} />
      <NavigationBar />
      <BannerPhoto imageUrl={BannerHome} />
      <h1>Website Siben</h1>
      <Container
        className="d-flex justify-content-center"
        style={{ marginBottom: "100px" }}
      >
        <Row className="w-100">
          <Col className="d-flex justify-content-center" md={3}>
            <PageCard
              cardTitle="Penanganan Bencana"
              cardText="Strategi dan tindakan penanganan terhadap bencana alam."
              videoUrl={video1}
              linkTo="/penanganan"
              modalTitle="Informasi Penanganan Bencana"
              modalContent="Halaman ini menyediakan informasi komprehensif mengenai strategi dan tindakan yang dilakukan untuk penanganan bencana. Anda dapat menemukan berbagai rencana mitigasi, kesiapsiagaan, respon darurat, dan upaya pemulihan pascabencana."
            />
          </Col>
          <Col className="d-flex justify-content-center" md={3}>
            <PageCard
              cardTitle="Data Bencana"
              cardText="Data terkini mengenai bencana yang terjadi di Indonesia."
              videoUrl={video2}
              linkTo="/data"
              modalTitle="Informasi Data Bencana"
              modalContent="Halaman ini menampilkan data terkini mengenai berbagai bencana yang terjadi di seluruh dunia. Informasi yang disajikan mencakup jenis bencana, lokasi, tanggal kejadian, serta jumlah korban yang ditimbulkan."
            />
          </Col>
          <Col className="d-flex justify-content-center" md={3}>
            <PageCard
              cardTitle="Berita Bencana"
              cardText="Update berita terbaru seputar bencana alam."
              videoUrl={video3}
              linkTo="/berita"
              modalTitle="Informasi Berita Bencana"
              modalContent="Halaman ini menyajikan berita terbaru seputar bencana alam yang terjadi di dalam negeri. Anda dapat membaca laporan, analisis, dan liputan langsung dari lokasi bencana, serta perkembangan terbaru mengenai upaya penanganan dan bantuan yang diberikan."
            />
          </Col>
          <Col className="d-flex justify-content-center" md={3}>
            <PageCard
              cardTitle="Ramalan Cuaca"
              cardText="Perkiraan cuaca yang akan terjadi di kota Semarang."
              videoUrl={video4}
              linkTo="/cuaca"
              modalTitle="Informasi Ramalan Cuaca"
              modalContent="Halaman ramalan cuaca di Kota Semarang menyajikan informasi terbaru mengenai kondisi cuaca saat ini dan prakiraan cuaca mendatang di Semarang. Anda dapat menemukan data terkini mengenai suhu udara, kelembapan, kecepatan angin, dan kondisi cuaca."
            />
          </Col>
        </Row>
      </Container>

      <Container
        className="d-flex justify-content-center"
        style={{ marginBottom: "100px" }}
      >
        <Carousel fade>
          <Carousel.Item>
            <DisasterStepCarousel
              text="First slide"
              imageUrl={mitigasi}
              title="Mitigasi Bencana"
              description="Proses persiapan dan tindakan pencegahan untuk mengurangi dampak bencana."
            />
          </Carousel.Item>
          <Carousel.Item>
            <DisasterStepCarousel
              text="Second slide"
              imageUrl={tanggapdarurat}
              title="Tanggap Darurat Bencana"
              description="Respon cepat dan terorganisir untuk menyelamatkan dan mendukung korban bencana."
            />
          </Carousel.Item>
          <Carousel.Item>
            <DisasterStepCarousel
              text="Third slide"
              imageUrl={pemulihan}
              title="Pemulihan Bencana"
              description="Upaya kolaboratif untuk membangun kembali dan memulihkan kondisi normal pasca-bencana."
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;