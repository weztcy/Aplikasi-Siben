import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from '../../Image/Konten/Step1.jpg';
import step2Image from '../../Image/Konten/Step2.jpg';
import step3Image from '../../Image/Konten/Step3.jpg';

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
  return (
    <div className="SubPenanganan">
      <NavigationBar />
      <Container fluid>
        <h1>Gempa Bumi</h1>
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
    </div>
  );
}

export default GempaBumi;
