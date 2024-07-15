import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerHome from "../../Image/Banner/TanahLongsor.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Tanah Longsor",
    text: `
      Tanah longsor dapat disebabkan oleh berbagai faktor, baik alamiah maupun aktivitas manusia, antara lain:
      <br><br>
      <li>Curah Hujan yang Tinggi
        <ul>
          Hujan deras bisa meningkatkan kelembaban tanah dan membuatnya tidak stabil, sehingga mudah longsor.
        </ul>
      </li>
      <li>Erosi
        <ul>
          Aliran air yang terus-menerus mengikis tanah di lereng, mengurangi stabilitas dan memicu longsor.
        </ul>
      </li>
      <li>Getaran Gempa
        <ul>
          Gempa bumi dapat mengganggu stabilitas tanah di lereng dan menyebabkan longsor.
        </ul>
      </li>
      <li>Aktivitas Vulkanik
        <ul>
          Letusan gunung berapi bisa membuat lereng tidak stabil dengan pengeluaran material vulkanik.
        </ul>
      </li>
      <li>Penggalian dan Konstruksi
        <ul>
          Aktivitas manusia seperti penggalian tanah atau pembangunan bangunan di lereng dapat mengganggu stabilitas tanah.
        </ul>
      </li>
      <li>Deforestasi
        <ul>
          Penebangan hutan mengurangi ikatan akar yang menjaga tanah tetap stabil, meningkatkan risiko longsor.
        </ul>
      </li>
      <li>Kondisi Geologi
        <ul>
          Jenis tanah dan batuan tertentu rentan terhadap longsor, seperti tanah lempung atau batuan retak-retak.
        </ul>
      </li>
    `,
  },
  {
    name: "Jenis",
    scroll: true,
    backdrop: true,
    title: "Jenis-jenis Tanah Longsor",
    text: `
      Berikut adalah jenis-jenis tanah longsor:
      <br><br>
      <li>Longsor Translasi
        <ul>
          Pergerakan massa tanah di sepanjang bidang gelincir yang datar atau melengkung.
        </ul>
      </li>
      <li>Longsor Rotasi
        <ul>
          Massa tanah bergerak menuruni lereng dengan permukaan gelincir berbentuk melengkung, menyebabkan permukaan tanah berotasi.
        </ul>
      </li>
      <li>Longsor Debris
        <ul>
          Pergerakan cepat material campuran seperti tanah, batuan, dan vegetasi, biasanya dipicu oleh hujan deras atau salju yang mencair.
        </ul>
      </li>
      <li>Aliran Lumpur
        <ul>
          Campuran air dan tanah sangat jenuh yang mengalir cepat menuruni lereng, sering terjadi setelah hujan deras.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Tanah Longsor",
    text: `
      Tanah longsor dapat menimbulkan berbagai dampak negatif, antara lain:
      <br><br>
      <li>Kerusakan Infrastruktur
        <ul>
          Jalan, jembatan, rumah, dan bangunan lainnya bisa rusak atau hancur akibat longsor.
        </ul>
      </li>
      <li>Korban Jiwa dan Luka-luka
        <ul>
          Longsor bisa menyebabkan korban jiwa dan cedera, terutama di daerah berpenduduk padat.
        </ul>
      </li>
      <li>Gangguan Transportasi
        <ul>
          Longsor bisa memutus akses jalan dan jembatan, mengganggu transportasi dan evakuasi.
        </ul>
      </li>
      <li>Kerusakan Lingkungan
        <ul>
          Longsor dapat merusak ekosistem, menghancurkan vegetasi, dan mencemari sungai serta sumber air.
        </ul>
      </li>
      <li>Kerugian Ekonomi
        <ul>
          Kerusakan properti dan infrastruktur menyebabkan kerugian ekonomi yang signifikan.
        </ul>
      </li>
    `,
  },
];

const accordionItems1 = [
  {
    header: "Pemetaan Risiko",
    body: "Melakukan pemetaan daerah rawan tanah longsor dan identifikasi faktor-faktor pemicu seperti curah hujan tinggi atau kondisi tanah yang labil.",
  },
  {
    header: "Perencanaan Tata Ruang",
    body: "Mengembangkan kebijakan tata ruang yang mempertimbangkan potensi tanah longsor, termasuk zona larangan bangunan dan perencanaan struktur pengaman.",
  },
  {
    header: "Penguatan Lereng",
    body: "Menerapkan teknik-teknik penguatan lereng seperti pembuatan teras, pemasangan dinding penahan, dan penghijauan untuk memperkuat stabilitas lereng.",
  },
  {
    header: "Sistem Peringatan Dini",
    body: "Membangun sistem peringatan dini untuk mendeteksi potensi longsor dengan menggunakan sensor atau pengamatan visual.",
  },
  {
    header: "Evakuasi dan Rencana Darurat",
    body: "Mengembangkan rencana evakuasi yang jelas dan melatih masyarakat dalam prosedur evakuasi darurat.",
  },
  {
    header: "Pendidikan Masyarakat",
    body: "Meningkatkan kesadaran masyarakat tentang tanda-tanda awal tanah longsor dan langkah-langkah yang dapat diambil untuk mengurangi risiko.",
  },
  {
    header: "Pengawasan dan Monitoring",
    body: "Memantau kondisi lereng secara berkala untuk mendeteksi perubahan yang dapat menyebabkan tanah longsor.",
  },
];

const accordionItems2 = [
  {
    header: "Tetap Tenang",
    body: "Tetap tenang dan hindari panik untuk dapat mengambil langkah-langkah yang tepat.",
  },
  {
    header: "Hindari Daerah Rawan",
    body: "Jauhi daerah rawan tanah longsor dan pindah ke tempat yang lebih aman jika memungkinkan.",
  },
  {
    header: "Cari Tempat Perlindungan",
    body: "Cari tempat perlindungan yang lebih tinggi atau struktur bangunan yang kuat untuk melindungi diri.",
  },
  {
    header: "Dengarkan Informasi Terbaru",
    body: "Dengarkan informasi terbaru melalui radio atau sumber informasi lainnya untuk instruksi evakuasi dan kondisi terkini.",
  },
  {
    header: "Bantu Korban",
    body: "Bantu korban yang terluka dan membutuhkan pertolongan darurat.",
  },
];

const accordionItems3 = [
  {
    header: "Penilaian Kerusakan",
    body: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang diperlukan.",
  },
  {
    header: "Pembersihan dan Perbaikan",
    body: "Membersihkan material longsoran dan memulihkan infrastruktur yang rusak seperti jalan, bangunan, dan saluran air.",
  },
  {
    header: "Bantuan Kemanusiaan",
    body: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, perlengkapan kebersihan, dan tempat penampungan.",
  },
  {
    header: "Dukungan Psikologis",
    body: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami.",
  },
  {
    header: "Pemulihan Lingkungan",
    body: "Melakukan rehabilitasi lingkungan untuk mengembalikan fungsi ekosistem yang terganggu akibat tanah longsor.",
  },
  {
    header: "Evaluasi dan Pembelajaran",
    body: "Mengevaluasi respons terhadap tanah longsor dan memperbaiki sistem mitigasi serta kesiapsiagaan untuk kejadian serupa di masa depan.",
  },
];

function TanahLongsor() {
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
        <h1>Tanah Longsor</h1>
        <p className="Penjelasan">
          Tanah longsor adalah pergerakan massa tanah, batuan, dan material
          lainnya menuruni lereng akibat gravitasi. Peristiwa ini bisa sangat
          merusak dan berbahaya, terutama di daerah yang berbukit atau
          bergunung.
        </p>
        <div style={containerStyle}>
          {options.map((option, index) => (
            <div style={buttonStyle} key={index}>
              <BencanaOffcard {...option} />
            </div>
          ))}
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
              title="Respons saat Tanah Longsor Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Tanah Longsor:"
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

export default TanahLongsor;
