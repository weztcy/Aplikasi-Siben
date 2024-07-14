import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerHome from "../../Image/Banner/GempaBumi.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/FireParticles.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const option1 = {
  name: "Penyebab",
  scroll: true,
  backdrop: true,
  title: "Penyebab Gempa Bumi",
  text: `
  Gempa bumi bisa disebabkan oleh beberapa faktor, di antaranya:
  <br><br>
  <li>Pergerakan Lempeng Tektonik
    <ul>
      Lempeng-lempeng tektonik yang berada di bawah permukaan bumi terus bergerak. Ketika lempeng-lempeng ini bertabrakan, bergeser, atau saling menjauh, energi yang tersimpan di dalamnya dilepaskan, menyebabkan gempa bumi.
    </ul>
  </li>
  <li>Aktivitas Vulkanik
    <ul>
    Letusan gunung berapi dapat menyebabkan gempa bumi, dikenal sebagai gempa vulkanik.
    </ul>
  </li>
  <li>Patahan atau Sesar
    <ul>
    Patahan atau sesar adalah retakan di kerak bumi di mana pergerakan bisa terjadi. Ketika tekanan di sepanjang sesar ini menjadi terlalu besar, kerak bumi bisa bergerak tiba-tiba, memicu gempa.
    </ul>
  </li>
  <li>Aktivitas Manusia
    <ul>
    Aktivitas seperti penambangan, pengisian waduk besar, atau pengeboran minyak juga dapat menyebabkan gempa bumi kecil yang disebut sebagai gempa bumi induksi.
    </ul>
  </li>
  `,
};

const option2 = {
  name: "Dampak",
  scroll: true,
  backdrop: true,
  title: "Dampak Gempa Bumi",
  text: `
  Gempa bumi dapat menyebabkan kerusakan yang parah tergantung pada besarnya, kedalaman pusat gempa (hiposenter), dan jarak dari pusat gempa ke permukaan bumi (epicenter). Beberapa dampak yang mungkin terjadi adalah:
  <br><br>
  <li>Kerusakan Bangunan
    <ul>
    Bangunan dan infrastruktur bisa runtuh atau rusak parah.
    </ul>
  </li>
  <li>Tsunami
    <ul>
    Gempa bawah laut bisa memicu gelombang besar atau tsunami yang dapat menyebabkan kerusakan di wilayah pesisir.
    </ul>
  </li>
  <li>Korban Jiwa dan Luka-luka
    <ul>
    Gempa bumi besar bisa menyebabkan banyak korban jiwa dan luka-luka.
    </ul>
  </li>
  `,
};

const accordionItems1 = [
  {
    header: "Edukasi Masyarakat",
    body: "Mengedukasi masyarakat tentang tindakan yang harus dilakukan saat gempa bumi terjadi, seperti berlindung di bawah meja atau menjauh dari kaca.",
  },
  {
    header: "Bangunan Tahan Gempa",
    body: "Membangun dan memperkuat bangunan agar tahan terhadap gempa bumi, menggunakan teknik konstruksi yang sesuai.",
  },
  {
    header: "Latihan dan Simulasi",
    body: "Mengadakan latihan dan simulasi secara rutin untuk meningkatkan kesiapsiagaan masyarakat dan petugas penanggulangan bencana.",
  },
];

const accordionItems2 = [
  {
    header: "Evakuasi",
    body: "Mengarahkan evakuasi segera ke area yang aman, menjauh dari bangunan tinggi dan struktur yang dapat runtuh.",
  },
  {
    header: "Informasi Darurat",
    body: "Menyebarkan informasi terkini tentang situasi gempa melalui media dan sistem komunikasi darurat.",
  },
  {
    header: "Koordinasi",
    body: "Koordinasi antara pemerintah, organisasi non-pemerintah, dan tim penyelamat untuk memastikan respons yang cepat dan efektif.",
  },
];

const accordionItems3 = [
  {
    header: "Bantuan Darurat",
    body: "Menyediakan bantuan seperti makanan, air bersih, dan tempat tinggal sementara bagi korban gempa.",
  },
  {
    header: "Rekonstruksi",
    body: "Memulai rekonstruksi bangunan yang rusak dengan memperhatikan standar keamanan yang lebih tinggi.",
  },
  {
    header: "Dukungan Psikososial",
    body: "Memberikan dukungan psikososial kepada korban yang mengalami trauma akibat gempa.",
  },
];

function GempaBumi() {
  const contentStyle = {
    position: "relative",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "50px",
  };
  const buttonStyle = {
    flex: "1 1 calc(33.333% - 10px)",
    boxSizing: "border-box",
  };
  return (
    <div className="SubPenanganan" style={contentStyle}>
      <BackgroundVideo src={bgvideo} />
      <BannerPhoto imageUrl={BannerHome} />
      <NavigationBar />
      <Container fluid>
        <h1>Gempa Bumi</h1>
        <p className="Penjelasan">
          Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan
          bumi akibat pelepasan energi secara tiba-tiba di dalam kerak bumi.
          Energi ini dilepaskan dalam bentuk gelombang seismik, yang menyebabkan
          getaran yang dapat dirasakan di permukaan bumi.
        </p>
        <div style={containerStyle}>
          <div style={buttonStyle}>
            <BencanaOffcard {...option1} />
          </div>
          <div style={buttonStyle}>
            <BencanaOffcard {...option2} />
          </div>
        </div>

        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Mitigasi dan Kesiapsiagaan:"
              imageSrc={step1Image}
              accordionItems={accordionItems1}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Respons saat Gempa Bumi Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Gempa Bumi:"
              imageSrc={step3Image}
              accordionItems={accordionItems3}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default GempaBumi;
