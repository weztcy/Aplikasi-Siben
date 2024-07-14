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
  title: "Penyebab Gunung Meletus",
  text: `
  Gunung berapi meletus karena adanya tekanan dari magma (batuan cair) yang terbentuk di dalam bumi. Beberapa faktor penyebabnya meliputi:
  <br><br>
  <li>Tekanan Magma
    <ul>
    Tekanan dari magma yang naik ke permukaan bumi dapat menyebabkan letusan. Magma yang mengandung gas terperangkap memiliki tekanan yang tinggi, dan saat mencapai permukaan, gas tersebut melepaskan tekanan, menyebabkan letusan eksplosif.
    </ul>
  </li>
  <li>Aktivitas Tektonik
    <ul>
    Pergerakan lempeng tektonik bisa memicu aktivitas vulkanik. Ketika lempeng-lempeng bumi bertabrakan atau bergeser, magma dari dalam bumi bisa naik ke permukaan melalui retakan atau celah.
    </ul>
  </li>
  <li>Panas Bumi
    <ul>
    Panas dari dalam bumi yang sangat tinggi dapat mencairkan batuan dan membentuk magma, yang kemudian bisa naik ke permukaan dan menyebabkan letusan.
    </ul>
  </li>
  `,
};

const option2 = {
  name: "Jenis Erupsi",
  scroll: true,
  backdrop: true,
  title: "Jenis-jenis Erupsi Gunung Berapi",
  text: `
  Erupsi gunung berapi dapat dibedakan berdasarkan karakteristiknya:
  <br><br>
  <li>Erupsi Efusif
    <ul>
    Lava mengalir keluar dari gunung berapi dengan relatif tenang tanpa ledakan besar. Lava ini biasanya bersifat basaltik dan mengalir dengan cepat.
    </ul>
  </li>
  <li>Erupsi Eksplosif
    <ul>
    Letusan yang disertai ledakan besar, mengeluarkan abu, gas, dan material piroklastik dengan kekuatan besar. Erupsi jenis ini bisa sangat berbahaya dan merusak.
    </ul>
  </li>
  <li>Erupsi Strombolian
    <ul>
    Letusan periodik dengan ledakan kecil hingga menengah, seringkali disertai lontaran lava pijar.
    </ul>
  </li>
  <li>Erupsi Plinian
    <ul>
    Letusan sangat eksplosif yang mengeluarkan kolom abu tinggi ke atmosfer dan bisa menyebabkan hujan abu yang luas.
    </ul>
  </li>
  `,
};

const option3 = {
  name: "Dampak",
  scroll: true,
  backdrop: true,
  title: "Dampak Gunung Meletus",
  text: `
  Letusan gunung berapi dapat memiliki berbagai dampak, baik langsung maupun tidak langsung:
  <br><br>
  <li>Kerusakan Lingkungan
    <ul>
    Lava, abu, dan material piroklastik bisa merusak vegetasi, mengubur lahan pertanian, dan merusak bangunan.
    </ul>
  </li>
  <li>Korban Jiwa dan Cedera
    <ul>
    Letusan besar bisa menyebabkan korban jiwa dan cedera akibat runtuhan material, gas beracun, atau panas yang ekstrem.
    </ul>
  </li>
  <li>Gangguan Transportasi
    <ul>
    Abu vulkanik yang beterbangan bisa mengganggu penerbangan dan menutupi jalan.
    </ul>
  </li>
  <li>Bencana Sekunder
    <ul>
    Letusan bisa memicu bencana sekunder seperti banjir lahar, longsor, dan tsunami (jika letusan terjadi di bawah laut).
    </ul>
  </li>
  <li>Perubahan Iklim
    <ul>
    Abu vulkanik dan gas seperti sulfur dioksida yang dilepaskan ke atmosfer bisa mempengaruhi iklim dengan mendinginkan suhu global sementara.
    </ul>
  </li>
  `,
};

const accordionItems1 = [
  {
    header: "Edukasi Masyarakat",
    body: "Mengedukasi masyarakat tentang tindakan yang harus dilakukan saat Gunung Meletus terjadi, seperti berlindung di bawah meja atau menjauh dari kaca.",
  },
  {
    header: "Bangunan Tahan Gempa",
    body: "Membangun dan memperkuat bangunan agar tahan terhadap Gunung Meletus, menggunakan teknik konstruksi yang sesuai.",
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
        <h1>Gunung Meletus</h1>
        <p className="Penjelasan">
          Gunung meletus atau erupsi gunung berapi adalah peristiwa keluarnya
          material dari dalam bumi ke permukaan melalui kawah atau rekahan di
          gunung berapi. Material yang dikeluarkan bisa berupa lava, gas
          vulkanik, abu vulkanik, dan batuan piroklastik. Erupsi gunung berapi
          bisa sangat destruktif dan mempengaruhi lingkungan sekitar, serta
          kehidupan manusia.
        </p>
        <div style={containerStyle}>
          <div style={buttonStyle}>
            <BencanaOffcard {...option1} />
          </div>
          <div style={buttonStyle}>
            <BencanaOffcard {...option2} />
          </div>
          <div style={buttonStyle}>
            <BencanaOffcard {...option3} />
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
              title="Respons saat Gunung Meletus Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Gunung Meletus:"
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
